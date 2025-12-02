import React, { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import AuthForm from "./AuthForm";
import GoogleAuth from "./GoogleAuth";
import {
  sendOtp,
  verifyOtp,
  signup,
  login,
  googleLogin,
} from "../utils/api.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Left panel
const LeftPanel = () => (
  <div className="w-full lg:w-1/2 relative min-h-[420px] lg:min-h-[720px]">
    <img
      src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop"
      alt="Travel"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60" />
    <div className="absolute top-1/8 left-0 right-0 text-center px-8">
      <h2 className="text-white text-2xl lg:text-3xl font-bold leading-tight drop-shadow-lg">
        TRAVEL IS THE ONLY THING <br /> YOU BUY THAT MAKES YOU RICHER
      </h2>
    </div>
    {/* Social Media Icons at bottom */}
    <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4">
      <button className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg">
        <svg
          className="w-6 h-6 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      </button>

      <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shadow-lg">
        <svg
          className="w-6 h-6 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M18.244 2H21.5l-7.59 8.652L22 22h-5.657l-4.436-5.79L6.936 22H3.68l8.09-9.216L2 2h5.657l4.025 5.298L18.244 2zm-2.005 17.373h1.374L7.858 4.548H6.36l9.879 14.825z" />
        </svg>
      </button>

      <button className="w-12 h-12 bg-[#0077B5] rounded-full flex items-center justify-center hover:bg-[#006097] transition-colors shadow-lg">
        <svg
          className="w-6 h-6 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.83v2.17h.05c.53-1 1.84-2.17 3.79-2.17C20.4 8 24 10.54 24 15.26V24h-4v-7.73c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.07V24h-4V8z" />
        </svg>
      </button>

      <button className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-full flex items-center justify-center hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 transition-colors shadow-lg">
        <svg
          className="w-6 h-6 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
        </svg>
      </button>
    </div>
  </div>
);

const SuccessToast = ({ isLogin }) => (
  <div className="fixed top-8 right-8 z-[100] bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-right duration-700 border-2 border-green-400">
    <CheckCircle size={24} className="animate-bounce" />
    <div>
      <div className="font-bold text-lg">Success!</div>
      <div className="text-green-100 text-sm">
        {isLogin ? "Welcome back, explorer!" : "Your journey begins now!"}
      </div>
    </div>
  </div>
);

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [authMethod, setAuthMethod] = useState("email");
  const [showOtp, setShowOtp] = useState(false);
  const [otpTimer, setOtpTimer] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    otp: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    if (authMethod === "email") {
      if (!formData.email || !formData.password) {
        setError("Email and password are required.");
        return false;
      }
      if (!isLogin && formData.password !== formData.confirmPassword) {
        setError("Passwords do not match.");
        return false;
      }
    }
    if (authMethod === "phone" && !formData.phoneNumber) {
      setError("Phone number is required.");
      return false;
    }
    return true;
  };

  // ✅ Auto-hide error after 3s
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  useEffect(() => {
    if (otpTimer > 0) {
      const timer = setTimeout(() => setOtpTimer((t) => t - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [otpTimer]);

  // ✅ Redirect if user already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/");
  }, []);

  // ✅ Redirect after success
  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => navigate("/"), 1500);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
    setErrors((s) => ({ ...s, [name]: "" }));
  };

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
    setShowOtp(false);
    setError("");
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      otp: "",
    });
  };

  const switchAuthMethod = (method) => {
    setAuthMethod(method);
    setShowOtp(false);
    setError("");
  };

  const handleGoogleAuth = (user) => {
    console.log("Google user data received:", user);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    // You can send 'user' to backend for Google signup/login
  };

  const handleSendOtp = async () => {
    if (!formData.phoneNumber) {
      setError("Enter phone number first");
      return;
    }
    try {
      setLoading(true);
      await sendOtp({ phonenumber: formData.phoneNumber });
      setShowOtp(true);
      setOtpTimer(30);
      setError("");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Failed to send OTP.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      if (authMethod === "email") {
        if (isLogin) {
          const { data } = await login({
            email: formData.email,
            password: formData.password,
          });
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          console.log("Login Success:", data);
        } else {
          const { data } = await signup({
            fullName: formData.fullName,
            email: formData.email,
            password: formData.password,
            confirmPassword: formData.confirmPassword,
          });

          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          console.log("Signup Success:", data);
        }
      } else if (authMethod === "phone") {
        if (!showOtp) {
          await handleSendOtp();
        } else {
          const { data } = await verifyOtp({
            phonenumber: formData.phoneNumber,
            otp: formData.otp,
          });
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          console.log("OTP Verified:", data);
        }
      } else if (authMethod === "google") {
        if (!googleUserToken) {
          setError("Google token missing.");
          return;
        }

        const { data } = await googleLogin({ token: googleUserToken });

        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  // 🧠 Google login example (if using Firebase or Google SDK)
  const handleGoogleLogin = async (token) => {
    try {
      const { data } = await googleLogin({ token });
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setShowSuccess(true);
    } catch (err) {
      setError("Google login failed.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 relative overflow-hidden">
      {showSuccess && <SuccessToast isLogin={isLogin} />}

      {/* ❌ Error Alert */}
      {error && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-red-500/80 text-white px-6 py-3 rounded-lg shadow-md animate-fadeIn z-50">
          {error}
        </div>
      )}

      <div className="relative z-10 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          <LeftPanel />

          <div className="w-full lg:w-1/2 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 shadow-black p-8 lg:p-12 flex flex-col justify-center">
            <div className="text-center mb-6">
              <div className="inline-block border-4 border-white px-6 py-2 mb-4">
                <h1 className="text-white text-xl lg:text-2xl font-bold tracking-wider">
                  YATRADARSHAK
                </h1>
              </div>
            </div>

            {/* 🔹 Auth Toggle Section */}
            <div className="flex justify-center gap-4 mb-6">
              {/* Email Login */}
              <button
                onClick={() => switchAuthMethod("email")}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-md hover:shadow-lg ${
                  authMethod === "email"
                    ? "bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 shadow-black"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                <svg
                  className={`w-6 h-6 ${
                    authMethod === "email" ? "text-white" : "text-blue-600"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18a2 2 0 002 2h16a2 2 0 002-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </button>

              {/* Google Login */}
              <button
                onClick={() => switchAuthMethod("google")}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-md hover:shadow-lg ${
                  authMethod === "google"
                    ? "bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 shadow-black"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
              </button>

              {/* Phone Login */}
              <button
                onClick={() => switchAuthMethod("phone")}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-md hover:shadow-lg ${
                  authMethod === "phone"
                    ? "bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 shadow-black"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                <svg
                  className={`w-6 h-6 ${
                    authMethod === "phone" ? "text-white" : "text-blue-600"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24a11.72 11.72 0 003.68.59c.55 0 1 .45 1 1V20a1 1 0 01-1 1C10.39 21 3 13.61 3 4a1 1 0 011-1h2.5c.55 0 1 .45 1 1 0 1.26.21 2.49.59 3.68.11.35.03.74-.25 1.02l-2.22 2.09z" />
                </svg>
              </button>
            </div>

            {/* ✅ Conditionally Render Forms */}
            {authMethod === "google" ? (
              <GoogleAuth isLogin={isLogin} onGoogleAuth={handleGoogleAuth} />
            ) : (
              <AuthForm
                isLogin={isLogin}
                authMethod={authMethod}
                handleInputChange={handleInputChange}
                errors={errors}
                formData={formData}
                showOtp={showOtp}
                otpTimer={otpTimer}
                handleSendOtp={handleSendOtp}
                handleSubmit={handleSubmit}
                toggleForm={toggleForm}
                error={error}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
