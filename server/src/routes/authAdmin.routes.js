import express from "express";
import multer from "multer";
import {
  sendOtp,
  verifyOtp,
  updateBusinessInfo,
  uploadDocuments,
  updateBankDetails,
  verifyAndApproveAdmin,
  registerBasicAdmin,
  loginAdminDefault,
} from "../controllers/authAdmin.controllers.js";

import {
  protect,
  authMiddleware,
  verifyAdminRole,
} from "../middlewares/authMiddleware.js";

const router = express.Router();

/* ============================================================
   🔹 AUTHENTICATION & LOGIN/REGISTRATION
============================================================ */

// Step 1: Register Admin (Basic Info)
router.post("/register", registerBasicAdmin);

// Step 2: Login with Email/Password
router.post("/login", loginAdminDefault);

// Send OTP for Phone Login/Verification
router.post("/send-otp", sendOtp);

// Verify OTP (for login or registration)
router.post("/verify-otp", verifyOtp);

/* ============================================================
   🔹 ADMIN ONBOARDING & PROFILE MANAGEMENT (Protected)
============================================================ */

// Step 3: Update business information
router.put("/business-info/:id", authMiddleware, updateBusinessInfo);

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Step 4: Upload business documents
router.put(
  "/upload-documents/:id",
  protect,
  verifyAdminRole(["superAdmin", "hotelAdmin", "busAdmin", "cabAdmin", "flightAdmin"]),
  upload.array("documents", 5),
  uploadDocuments
);

// Step 5: Add or update bank details
router.put("/bank-details/:id", authMiddleware, updateBankDetails);

/* ============================================================
   🔹 SUPER ADMIN CONTROLS
============================================================ */

// Final verification and approval (SuperAdmin only)
router.put(
  "/verify/:id",
  authMiddleware,
  verifyAdminRole(["superAdmin"]),
  verifyAndApproveAdmin
);

/* ============================================================
   🔹 EXPORT ROUTER
============================================================ */
export default router;



// import express from "express";
// import {
//   sendOtp,
//   verifyOtp,
//   // resendOtp,
//   updateBusinessInfo,
//   uploadDocuments,
//   updateBankDetails,
//   verifyAndApproveAdmin,
//   // getAdminProfile,
//   // deactivateAdmin,
//   // getAllAdmins,
//   // getAllAdminsByStatus,
//   // getAdminDashboardStats,
// } from "../controllers/authAdmin.controllers.js";

// import { authMiddleware, verifyAdminRole } from "../middlewares/authMiddleware.js";

// const router = express.Router();

// /* ============================================================
//    🔹 AUTHENTICATION & OTP MANAGEMENT
// ============================================================ */

// // Send OTP to admin phone/email
// router.post("/send-otp", sendOtp);

// // Verify OTP to login or register
// router.post("/verify-otp", verifyOtp);

// // Resend OTP (optional)
// // router.post("/resend-otp", resendOtp);

// /* ============================================================
//    🔹 ADMIN ONBOARDING & PROFILE MANAGEMENT (Protected)
// ============================================================ */

// // Step 2: Update business information
// router.put("/business-info/:id", authMiddleware, updateBusinessInfo);

// // Step 3: Upload business documents (license, GST, ID proof)
// router.put("/documents/:id", authMiddleware, uploadDocuments);

// // Step 4: Add or update bank details
// router.put("/bank-details/:id", authMiddleware, updateBankDetails);

// // Fetch admin’s own profile
// // router.get("/profile/:id", authMiddleware, getAdminProfile);

// /* ============================================================
//    🔹 SUPER ADMIN CONTROLS
// ============================================================ */

// // Verify or approve an admin (SuperAdmin only)
// router.put(
//   "/verify/:id",
//   authMiddleware,
//   verifyAdminRole(["superAdmin"]),
//   verifyAndApproveAdmin
// );

// // Get all admins (SuperAdmin only)
// // router.get(
// //   "/all",
// //   authMiddleware,
// //   verifyAdminRole(["superAdmin"]),
// //   getAllAdmins
// // );

// // Get admins filtered by status (e.g., pending, verified)
// // router.get(
// //   "/status/:status",
// //   authMiddleware,
// //   verifyAdminRole(["superAdmin"]),
// //   getAllAdminsByStatus
// // );

// // Deactivate an admin account
// // router.put(
// //   "/deactivate/:id",
// //   authMiddleware,
// //   verifyAdminRole(["superAdmin"]),
// //   deactivateAdmin
// // );

// // Get dashboard analytics for SuperAdmin
// // router.get(
// //   "/dashboard/stats",
// //   authMiddleware,
// //   verifyAdminRole(["superAdmin"]),
// //   getAdminDashboardStats
// // );

// /* ============================================================
//    🔹 EXPORT ROUTER
// ============================================================ */
// export default router;


// // import express from "express";
// // import {
// //   sendOtp,
// //   verifyOtp,
// //   updateBusinessInfo,
// //   uploadDocuments,
// //   updateBankDetails,
// //   verifyAndApproveAdmin,
// //   getAdminProfile,
// //   resendOtp,
// //   deactivateAdmin,
// //   getAllAdmins,
// // } from "../controllers/authAdmin.controllers.js";

// // import { authMiddleware, verifyAdminRole } from "../middlewares/auth.middleware.js";

// // const router = express.Router();

// // /* ------------------------------------------------------------------
// //    🔹 AUTHENTICATION FLOW (OTP / LOGIN)
// // ------------------------------------------------------------------- */

// // // Step 1: Send OTP for login/verification
// // router.post("/send-otp", sendOtp);

// // // Step 1b: Resend OTP (optional, rate-limited)
// // router.post("/resend-otp", resendOtp);

// // // Step 1c: Verify OTP and login or create admin account
// // router.post("/verify-otp", verifyOtp);

// // /* ------------------------------------------------------------------
// //    🔹 ADMIN ONBOARDING STEPS (Protected Routes)
// // ------------------------------------------------------------------- */

// // // Step 2: Business Information
// // router.put("/business-info/:id", authMiddleware, updateBusinessInfo);

// // // Step 3: Document Uploads (like license, GST, proof)
// // router.put("/documents/:id", authMiddleware, uploadDocuments);

// // // Step 4: Bank Details
// // router.put("/bank-details/:id", authMiddleware, updateBankDetails);

// // /* ------------------------------------------------------------------
// //    🔹 ADMIN DASHBOARD & MANAGEMENT
// // ------------------------------------------------------------------- */

// // // Get logged-in admin profile
// // router.get("/profile/:id", authMiddleware, getAdminProfile);

// // // Super Admin: Approve / Reject / Verify Admin Operator
// // router.put(
// //   "/verify/:id",
// //   authMiddleware,
// //   verifyAdminRole(["superAdmin"]),
// //   verifyAndApproveAdmin
// // );

// // // Super Admin: Get all admins for management
// // router.get(
// //   "/all",
// //   authMiddleware,
// //   verifyAdminRole(["superAdmin"]),
// //   getAllAdmins
// // );

// // // Super Admin: Deactivate an Admin Operator
// // router.put(
// //   "/deactivate/:id",
// //   authMiddleware,
// //   verifyAdminRole(["superAdmin"]),
// //   deactivateAdmin
// // );

// // /* ------------------------------------------------------------------
// //    🔹 DEFAULT EXPORT
// // ------------------------------------------------------------------- */
// // export default router;
