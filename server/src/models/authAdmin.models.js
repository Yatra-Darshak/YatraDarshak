import mongoose, { Schema } from "mongoose";

const adminSchema = new Schema(
  {
    // 🔹 Basic Info
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      sparse: true,
      required: true,
    },

    password: {
      type: String,
      required: true,
      select: false, // never expose in queries
    },

    phoneNumber: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      sparse: true,
    },

    profilePicture: {
      type: String,
      default: "",
    },

    loginMethod: {
      type: String,
      enum: ["default", "phone", "google"],
      default: "default",
    },

    // 🔹 Business / Operator Info
    businessName: {
      type: String,
      trim: true,
    },

    businessType: {
      type: String,
      enum: [
        "hotel",
        "bus",
        "flight",
        "cab",
        "homestays",
        "holidayPackages",
        "trains",
        "other",
      ],
    },

    businessDescription: {
      type: String,
      trim: true,
      default: "",
    },

    registrationNumber: {
      type: String,
      trim: true, // e.g., GST, FSSAI, Tourism ID, etc.
    },

    governmentId: {
      type: String,
      trim: true, // Aadhar / PAN / Passport
    },

    location: {
      address: { type: String, trim: true },
      city: { type: String, trim: true },
      state: { type: String, trim: true },
      country: { type: String, trim: true },
      geoLocation: {
        lat: { type: Number },
        lng: { type: Number },
      },
      landmark: { type: String, trim: true },
    },

    documents: [
      {
        docType: {
          type: String,
          enum: [
            "license",
            "gstCertificate",
            "ownershipProof",
            "idProof",
            "insurance",
            "fssai",
            "agreement",
          ],
        },
        fileUrl: { type: String, lowercase: true },
        verified: { type: Boolean, default: false },
      },
    ],

    // 🔹 Bank & Payout Details
    bankDetails: {
      accountHolderName: {
        type: String,
        trim: true,
      },
      accountNumber: {
        iv: { type: String },
        data: { type: String },
      },
      ifsc: {
        iv: { type: String },
        data: { type: String },
      },
      bankName: { type: String },
      upiId: { type: String },

      documents: {
        chequeImage: { type: String },
        idProof: { type: String },
      },

      lastUpdated: { type: Date },
      updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
    },

    // 🔹 Role & Access Control
    role: {
      type: String,
      enum: [
        "superAdmin",
        "hotelAdmin",
        "busAdmin",
        "flightAdmin",
        "cabAdmin",
        "homestaysAdmin",
        "holidayPackagesAdmin",
        "trainsAdmin",
        "supportAdmin",
        "other",
      ],
      default: "other",
    },

    accessLevel: {
      type: Number,
      default: 1,
    },

    status: {
      type: String,
      enum: ["pending", "verified", "rejected"],
      default: "pending",
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    notifications: [
      {
        message: String,
        type: { type: String, enum: ["info", "warning", "alert"] },
        read: { type: Boolean, default: false },
        createdAt: { type: Date, default: Date.now },
      },
    ],

    // 🔹 Verification & Security
    isEmailVerified: {
      type: Boolean,
      default: false,
    },

    isPhoneVerified: {
      type: Boolean,
      default: false,
    },

    verificationComments: {
      type: String,
      trim: true,
      default: "",
    },

    verificationStatus: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },

    verificationRemarks: {
      type: String,
      trim: true,
      default: "",
    },

    verificationDate: {
      type: Date,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    // 🔹 Onboarding / Registration Progress
    registrationStep: {
      type: Number,
      default: 1, // 1 = basic, 2 = business, 3 = documents, 4 = bank, 5 = verified
    },

    nextStep: {
      type: Number,
      default: 2, // used by controller for flow tracking
    },

    // 🔹 Metadata
    approvedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin", // superAdmin reference
    },

    approvedAt: {
      type: Date,
    },

    lastLogin: {
      type: Date,
    },

    resetToken: {
      type: String,
      default: null,
    },

    resetTokenExpiry: {
      type: Date,
    },
  },
  { timestamps: true }
);

// 🔸 Middleware / Instance Methods
adminSchema.methods.updateLastLogin = async function () {
  this.lastLogin = new Date();
  await this.save();
};

export default mongoose.model("Admin", adminSchema);
