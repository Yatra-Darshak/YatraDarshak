// resendOtp → to resend OTP if expired or lost.

// getAdminProfile → to fetch admin details by ID.

// deactivateAdmin → to deactivate an admin account.

// getAllAdmins → to fetch all admins (for dashboard listing).

// getAllAdminsByStatus → to filter admins by status (approved, pending, rejected).

// getAdminDashboardStats → to show counts, trends, etc., for the admin dashboard.

import Admin from "../models/authAdmin.models.js";
import OtpStore from "../models/otp.models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import axios from "axios";
import { asyncHandler } from "../middlewares/asyncHandler.js";
import mongoose from "mongoose";
import cloudinary from "../utils/cloudinary.js";
import getDataUri from "../utils/datauri.js";
import crypto from "crypto";

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

// Step 1: Basic Registration
export const registerBasicAdmin = asyncHandler(async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const {
      fullName,
      email,
      phoneNumber,
      password,
      confirmPassword,
      loginMethod,
    } = req.body;

    // Basic validation
    if (!fullName || !email || !password || !phoneNumber) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({
        success: false,
        message:
          "All fields (fullName, email, phoneNumber, password) are required.",
      });
    }

    if (password !== confirmPassword) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({
        success: false,
        message: "Passwords do not match.",
      });
    }

    if (password.length < 8) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters long.",
      });
    }

    // Check for existing admin
    const existingAdmin = await Admin.findOne({
      $or: [{ email }, { phoneNumber }],
    }).session(session);

    if (existingAdmin) {
      await session.abortTransaction();
      session.endSession();

      // If they already completed this step — skip to next
      if (existingAdmin.registrationStep >= 1) {
        let nextStep = existingAdmin.registrationStep + 1;

        return res.status(200).json({
          success: true,
          message: "Basic info already registered. Proceed to next step.",
          adminId: existingAdmin._id,
          registrationStep: existingAdmin.registrationStep,
          nextStep,
        });
      }

      return res.status(400).json({
        success: false,
        message: "Email or phone number already registered.",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new admin
    const newAdmin = new Admin({
      fullName,
      email,
      phoneNumber,
      password: hashedPassword,
      loginMethod: loginMethod || "default",
      registrationStep: 1,
      status: "pending",
      isEmailVerified: false,
      lastLoginIP: req.ip,
    });

    await newAdmin.save({ session });

    // Define next step
    const nextStep = 2;

    await session.commitTransaction();
    session.endSession();

    return res.status(201).json({
      success: true,
      message:
        "Basic details saved successfully. Proceed to business info step.",
      adminId: newAdmin._id,
      registrationStep: newAdmin.registrationStep,
      nextStep,
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.error("❌ Error registering Admin:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to create Admin.",
    });
  }
});

// Login - Email/Default
export const loginAdminDefault = asyncHandler(async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }

    const admin = await Admin.findOne({ email })
      .select("+password")
      .session(session);

    if (!admin) {
      await session.abortTransaction();
      session.endSession();
      return res
        .status(404)
        .json({ success: false, message: "Admin not found." });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      await session.abortTransaction();
      session.endSession();
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials." });
    }

    // Update last login and optionally log activity
    await admin.updateLastLogin();
    // Optional: add to activity log (if model supports)
    // await ActivityLog.create({ adminId: admin._id, action: "Login", timestamp: new Date() });

    // Determine next step only if registration incomplete
    let nextStep = null;
    if (admin.registrationStep < 4) {
      switch (admin.registrationStep) {
        case 1:
          nextStep = 2;
          break;
        case 2:
          nextStep = 3;
          break;
        case 3:
          nextStep = 4;
          break;
        default:
          nextStep = 1;
      }
    }

    // Generate access token
    const token = jwt.sign(
      { id: admin._id, role: admin.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: process.env.JWT_EXPIRES_IN || "7d" }
    );

    // Optional: Refresh token (for future use)
    const refreshToken = jwt.sign(
      { id: admin._id },
      process.env.JWT_REFRESH_SECRET || process.env.JWT_SECRET_KEY,
      { expiresIn: process.env.JWT_REFRESH_EXPIRES_IN || "30d" }
    );

    await session.commitTransaction();
    session.endSession();

    return res.status(200).json({
      success: true,
      message: "Login successful.",
      token,
      refreshToken, // Optional; use later in frontend
      expiresIn: process.env.JWT_EXPIRES_IN || "7d",
      admin: {
        id: admin._id,
        fullName: admin.fullName,
        role: admin.role,
        status: admin.status,
        registrationStep: admin.registrationStep,
      },
      ...(nextStep && { nextStep }), // Only return if registration incomplete
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.error("Error during login:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Error during login.",
    });
  }
});

/* -------------------- SEND OTP -------------------- */
export const sendOtp = asyncHandler(async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { phoneNumber } = req.body;

    // ✅ Validate phone number (strict 10-digit format)
    if (!phoneNumber || !/^\d{10}$/.test(phoneNumber)) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({
        success: false,
        message: "Invalid phone number format.",
      });
    }

    // ✅ Check OTP request rate limit (max 5 per 15 minutes)
    const recentRequests = await OtpStore.countDocuments({
      phoneNumber,
      createdAt: { $gte: new Date(Date.now() - 15 * 60 * 1000) },
    });

    if (recentRequests >= 5) {
      await session.abortTransaction();
      session.endSession();
      return res.status(429).json({
        success: false,
        message: "Too many OTP requests. Please try again after 15 minutes.",
      });
    }

    // ✅ Generate OTP
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    const hashedOtp = await bcrypt.hash(otp, 10);

    // ✅ Replace old OTPs for this number
    await OtpStore.deleteMany({ phoneNumber }).session(session);
    await OtpStore.create(
      [
        {
          phoneNumber,
          otp: hashedOtp,
          createdAt: Date.now(),
          otpAttempts: 0, // track wrong verification attempts
        },
      ],
      { session }
    );

    // ✅ Send OTP via Fast2SMS
    await axios.post(
      "https://www.fast2sms.com/dev/bulkV2",
      {
        route: "q",
        message: `Your OTP for admin verification is ${otp}. Valid for 5 minutes.`,
        language: "english",
        numbers: [phoneNumber],
      },
      {
        headers: {
          authorization: process.env.FAST2SMS_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    // ✅ Log masked info (no OTP leak)
    console.log(`✅ OTP sent successfully to ${phoneNumber.slice(0, 6)}XXXX`);

    await session.commitTransaction();
    session.endSession();

    return res.status(200).json({
      success: true,
      message: "OTP sent successfully.",
      phoneNumber,
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.error("❌ OTP send error:", error.response?.data || error.message);
    return res.status(500).json({
      success: false,
      message: "Failed to send OTP.",
      error: error.response?.data || error.message,
    });
  }
});

/* -------------------- VERIFY OTP -------------------- */
export const verifyOtp = asyncHandler(async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { phoneNumber, otp, fullName } = req.body;

    if (!phoneNumber || !otp) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({
        success: false,
        message: "Phone number and OTP are required.",
      });
    }

    // ✅ Find latest OTP record
    const record = await OtpStore.findOne({ phoneNumber }).sort({
      createdAt: -1,
    });

    if (!record) {
      await session.abortTransaction();
      session.endSession();
      return res
        .status(400)
        .json({ success: false, message: "OTP not found or expired." });
    }

    // ✅ Check expiry (5 minutes)
    const now = Date.now();
    if (now - new Date(record.createdAt).getTime() > 5 * 60 * 1000) {
      await OtpStore.deleteMany({ phoneNumber });
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({ success: false, message: "OTP expired." });
    }

    // ✅ Limit wrong OTP attempts (max 5)
    if (record.otpAttempts >= 5) {
      await OtpStore.deleteMany({ phoneNumber });
      await session.abortTransaction();
      session.endSession();
      return res.status(429).json({
        success: false,
        message: "Too many invalid attempts. Please request a new OTP.",
      });
    }

    // ✅ Verify OTP
    const isMatch = await bcrypt.compare(otp.toString(), record.otp);

    if (!isMatch) {
      record.otpAttempts += 1;
      await record.save();
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({
        success: false,
        message: "Invalid OTP. Please try again.",
      });
    }

    // ✅ OTP verified — cleanup old records
    await OtpStore.deleteMany({ phoneNumber });

    // ✅ Find or create admin
    let admin = await Admin.findOne({ phoneNumber }).session(session);

    if (!admin) {
      admin = new Admin({
        fullName: fullName || "Admin User",
        phoneNumber,
        loginMethod: "phone",
        registrationStep: 1,
      });
      await admin.save({ session });
    }

    // ✅ Determine next step
    const nextStep =
      admin.registrationStep < 5 ? admin.registrationStep + 1 : 1;

    // ✅ Generate JWT
    const token = jwt.sign(
      { id: admin._id, role: admin.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: process.env.JWT_EXPIRES_IN || "7d" }
    );

    await session.commitTransaction();
    session.endSession();

    return res.status(200).json({
      success: true,
      message: "OTP verified successfully.",
      token,
      admin: {
        id: admin._id,
        fullName: admin.fullName,
        phoneNumber: admin.phoneNumber,
        registrationStep: admin.registrationStep,
      },
      nextStep,
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.error("❌ Verify OTP error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while verifying OTP.",
      error: error.message,
    });
  }
});

// STEP 2: UPDATE BUSINESS INFO
export const updateBusinessInfo = asyncHandler(async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { id } = req.params;
    const {
      businessName,
      businessType,
      businessDescription,
      registrationNumber,
      governmentId,
      location,
      documents,
      businessEmail,
      businessPhone,
    } = req.body;

    // ✅ Fetch admin
    const admin = await Admin.findById(id).session(session);
    if (!admin) {
      await session.abortTransaction();
      session.endSession();
      return res.status(404).json({
        success: false,
        message: "Admin not found.",
      });
    }

    // ✅ Skip if already completed
    if (admin.registrationStep >= 2) {
      await session.commitTransaction();
      session.endSession();
      return res.status(200).json({
        success: true,
        message: "Business info already completed. Proceed to next step.",
        admin,
        nextStep: 3,
      });
    }

    // ✅ Validate required fields
    if (
      !businessName ||
      !businessType ||
      !registrationNumber ||
      !governmentId ||
      !location?.address ||
      !location?.city ||
      !documents?.length
    ) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({
        success: false,
        message: "Some business info or documents are missing.",
      });
    }

    // ✅ Validate business type (enforced list)
    const allowedTypes = ["hotel", "bus", "cab", "flight"];
    if (!allowedTypes.includes(businessType.toLowerCase())) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({
        success: false,
        message: `Invalid business type. Allowed types: ${allowedTypes.join(
          ", "
        )}.`,
      });
    }

    // ✅ Optional business contact validation
    if (businessEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(businessEmail)) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({
        success: false,
        message: "Invalid business email format.",
      });
    }

    if (businessPhone && !/^\d{10}$/.test(businessPhone)) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({
        success: false,
        message: "Invalid business phone number. Must be 10 digits.",
      });
    }

    // ✅ Update business details
    admin.businessName = businessName;
    admin.businessType = businessType.toLowerCase();
    admin.businessDescription = businessDescription || "";
    admin.registrationNumber = registrationNumber;
    admin.governmentId = governmentId;
    admin.location = location;
    admin.documents = documents;
    admin.businessEmail = businessEmail || null;
    admin.businessPhone = businessPhone || null;
    admin.registrationStep = 2;

    await admin.save({ session });

    await session.commitTransaction();
    session.endSession();

    return res.status(200).json({
      success: true,
      message: "Business info saved successfully. Proceed to next step.",
      adminId: admin._id,
      nextStep: 3,
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.error("❌ Error updating business info:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Error updating business info.",
    });
  }
});

// Step 3: Upload Documents
export const uploadDocuments = asyncHandler(async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { id } = req.params;
    const admin = await Admin.findById(id).session(session);

    if (!admin) {
      await session.abortTransaction();
      session.endSession();
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }

    const files = req.files;
    if (!files || files.length === 0) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({
        success: false,
        message: "At least one document is required.",
      });
    }

    // Skip if already completed this step
    if (admin.registrationStep >= 3) {
      await session.commitTransaction();
      session.endSession();
      return res.status(200).json({
        success: true,
        message: "Documents already uploaded. Proceed to next step.",
        admin,
        nextStep: 4,
      });
    }

    // Upload documents to Cloudinary
    const uploadedDocs = [];
    for (const file of files) {
      const fileData = getDataUri(file);
      const upload = await cloudinary.uploader.upload(fileData.content);
      uploadedDocs.push({
        docType: file.fieldname,
        fileUrl: upload.secure_url,
      });
    }

    // Update admin document info
    const updatedAdmin = await Admin.findByIdAndUpdate(
      id,
      {
        $push: { documents: { $each: uploadedDocs } },
        registrationStep: 3,
      },
      { new: true, session }
    );

    await session.commitTransaction();
    session.endSession();

    res.status(200).json({
      success: true,
      message: "Documents uploaded successfully.",
      admin: updatedAdmin,
      nextStep: 4,
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.error("Error uploading documents:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Error uploading documents",
    });
  }
});

// Helper function for AES encryption
const encrypt = (text) => {
  const algorithm = "aes-256-cbc";
  const key = crypto.scryptSync(process.env.JWT_SECRET_KEY, "salt", 32);
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return { iv: iv.toString("hex"), data: encrypted };
};

// Step 4: Bank Details
export const updateBankDetails = asyncHandler(async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { id } = req.params;
    const admin = await Admin.findById(id).session(session);

    if (!admin) {
      await session.abortTransaction();
      session.endSession();
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }

    const { bankDetails } = req.body;

    if (
      !bankDetails ||
      !bankDetails.accountHolderName ||
      !bankDetails.accountNumber ||
      !bankDetails.ifsc
    ) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({
        success: false,
        message: "Account holder name, account number, and IFSC are required.",
      });
    }

    // 🔐 Encrypt sensitive details
    const encryptedBankDetails = {
      accountHolderName: bankDetails.accountHolderName,
      accountNumber: encrypt(bankDetails.accountNumber),
      ifsc: encrypt(bankDetails.ifsc),
      lastUpdated: new Date(),
      updatedBy: req.user?._id || "system",
    };

    // 🖼️ Handle optional document uploads
    if (req.files) {
      const uploadPromises = [];

      if (req.files.chequeImage?.[0]) {
        const fileUri = getDataUri(req.files.chequeImage[0]);
        uploadPromises.push(
          cloudinary.uploader.upload(fileUri.content, {
            folder: "admin_bank_docs",
          })
        );
      }

      if (req.files.idProof?.[0]) {
        const fileUri = getDataUri(req.files.idProof[0]);
        uploadPromises.push(
          cloudinary.uploader.upload(fileUri.content, {
            folder: "admin_bank_docs",
          })
        );
      }

      const uploads = await Promise.all(uploadPromises);

      if (uploads.length > 0) {
        encryptedBankDetails.documents = {
          chequeImage: uploads[0]?.secure_url || null,
          idProof: uploads[1]?.secure_url || null,
        };
      }
    }

    // ⛔ Skip if already completed this step
    if (admin.registrationStep >= 4) {
      await session.commitTransaction();
      session.endSession();
      return res.status(200).json({
        success: true,
        message: "Bank details already saved. Proceed to next step.",
        admin,
        nextStep: 5,
      });
    }

    // 🏁 Update admin with new bank details
    const updatedAdmin = await Admin.findByIdAndUpdate(
      id,
      {
        bankDetails: encryptedBankDetails,
        bankVerificationStatus: "pending", // for later approval
        registrationStep: 4,
      },
      { new: true, session }
    );

    await session.commitTransaction();
    session.endSession();

    return res.status(200).json({
      success: true,
      message:
        "Bank details saved successfully. Verification is pending from admin side.",
      admin: updatedAdmin,
      nextStep: 5,
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.error("Error updating bank details:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Error updating bank details.",
    });
  }
});

// Step 5: Final Verification and Approval
export const verifyAndApproveAdmin = asyncHandler(async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { id } = req.params;
    const { verificationStatus, remarks } = req.body; // "approved" | "rejected"

    // Validate input
    if (!["approved", "rejected"].includes(verificationStatus)) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({
        success: false,
        message: "Invalid verification status. Use 'approved' or 'rejected'.",
      });
    }

    // Fetch Admin
    const admin = await Admin.findById(id).session(session);
    if (!admin) {
      await session.abortTransaction();
      session.endSession();
      return res
        .status(404)
        .json({ success: false, message: "Admin not found." });
    }

    // Ensure all previous steps are completed before final verification
    if (admin.registrationStep < 4) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({
        success: false,
        message:
          "Admin registration incomplete. All steps must be completed before verification.",
        currentStep: admin.registrationStep,
      });
    }

    // If already verified
    if (admin.isVerified === true && admin.verificationStatus === "approved") {
      await session.commitTransaction();
      session.endSession();
      return res.status(200).json({
        success: true,
        message: "Admin is already verified and approved.",
        admin,
      });
    }

    // Update verification details
    admin.verificationStatus = verificationStatus;
    admin.verificationRemarks = remarks || "";
    admin.isVerified = verificationStatus === "approved";
    admin.registrationStep = 5;
    admin.verificationDate = new Date();

    // Save changes
    await admin.save({ session });

    await session.commitTransaction();
    session.endSession();

    // Response
    return res.status(200).json({
      success: true,
      message:
        verificationStatus === "approved"
          ? "Admin verified and approved successfully."
          : "Admin application rejected successfully.",
      admin,
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.error("Error in final verification:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Error during admin verification.",
    });
  }
});
