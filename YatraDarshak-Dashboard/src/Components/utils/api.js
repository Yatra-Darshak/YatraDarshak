// src/utils/api.js

import axios from "axios";

/* ============================================================
   🔹 BASE AXIOS INSTANCES
============================================================ */
const USER_API = axios.create({
  baseURL: "http://localhost:5000/api/auth",
  withCredentials: true,
});

const ADMIN_API = axios.create({
  baseURL: "http://localhost:5000/api/admin/auth",
  withCredentials: true,
});

/* ============================================================
   🔹 USER AUTH ROUTES
============================================================ */

// Email signup
export const signup = (data) => USER_API.post("/signup", data);

// Email login
export const login = (data) => USER_API.post("/login", data);

// Send OTP (for user)
export const sendOtp = (data) => USER_API.post("/send-otp", data);

// Verify OTP (for user)
export const verifyOtp = (data) => USER_API.post("/verify-otp", data);

// Google login
export const googleLogin = (data) => USER_API.post("/google-login", data);

// Logout
export const logout = () => USER_API.post("/logout");

// Get profile
export const getProfile = () => USER_API.get("/profile");

// Edit profile
export const editProfile = (formData) => USER_API.put("/profile/edit", formData);

/* ============================================================
   🔹 ADMIN AUTH & MANAGEMENT ROUTES
============================================================ */

// Step 1: Register Admin (Basic Info)
export const registerAdmin = (data) => ADMIN_API.post("/register", data);

// Step 2: Login Admin
export const loginAdmin = (data) => ADMIN_API.post("/login", data);

// Send OTP for admin phone verification
export const sendAdminOtp = (data) => ADMIN_API.post("/send-otp", data);

// Verify OTP for admin
export const verifyAdminOtp = (data) => ADMIN_API.post("/verify-otp", data);

// Step 3: Update Business Info (protected)
export const updateBusinessInfo = (id, data, token) =>
  ADMIN_API.put(`/business-info/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

// Step 4: Upload Business Documents (using multipart/form-data)
export const uploadAdminDocuments = (id, formData, token) =>
  ADMIN_API.put(`/upload-documents/${id}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });

// Step 5: Add or Update Bank Details
export const updateBankDetails = (id, data, token) =>
  ADMIN_API.put(`/bank-details/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

// Step 6: Super Admin - Verify & Approve Admins
export const verifyAndApproveAdmin = (id, data, token) =>
  ADMIN_API.put(`/verify/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
