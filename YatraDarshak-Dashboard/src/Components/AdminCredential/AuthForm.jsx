import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Phone,
  Shield,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const AuthForm = ({ isLogin: initialIsLogin = true, authMethod: initialAuthMethod = "email" }) => {
  const [isLogin, setIsLogin] = useState(initialIsLogin);
  const [authMethod, setAuthMethod] = useState(initialAuthMethod);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [otpTimer, setOtpTimer] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    otp: "",
  });

  const [errors, setErrors] = useState({});

  // 🔄 Handle input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  // 🔄 Toggle between login/signup
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError("");
    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      otp: "",
    });
  };

  // ⏱️ OTP countdown timer
  useEffect(() => {
    let interval;
    if (otpTimer > 0) {
      interval = setInterval(() => setOtpTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [otpTimer]);

  // 📲 Send OTP handler
  const handleSendOtp = async () => {
    if (!formData.phoneNumber || formData.phoneNumber.length < 10) {
      setError("Please enter a valid phone number.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      const res = await axios.post("http://localhost:5000/api/auth/send-otp", {
        phoneNumber: formData.phoneNumber,
      });

      if (res.data.success) {
        setShowOtp(true);
        setOtpTimer(60);
      } else {
        setError(res.data.message || "Failed to send OTP.");
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Failed to send OTP.");
    } finally {
      setLoading(false);
    }
  };

  // 🧾 Signup/Login submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);

      // 📧 Email-based auth
      if (authMethod === "email") {
        if (!isLogin && formData.password !== formData.confirmPassword) {
          setError("Passwords do not match.");
          return;
        }

        const url = isLogin
          ? "http://localhost:5000/api/auth/login"
          : "http://localhost:5000/api/auth/signup";

        const payload = isLogin
          ? { email: formData.email, password: formData.password }
          : {
              fullName: formData.fullName,
              email: formData.email,
              password: formData.password,
            };

        const res = await axios.post(url, payload);

        if (res.data.success) {
          alert(`${isLogin ? "Login" : "Signup"} successful!`);
          // TODO: store token, redirect to dashboard, etc.
        } else {
          setError(res.data.message || "Something went wrong.");
        }
      }

      // 📱 Phone-based auth
      else if (authMethod === "phone") {
        if (!showOtp) {
          await handleSendOtp();
        } else {
          // Verify OTP
          const res = await axios.post("http://localhost:5000/api/auth/verify-otp", {
            phoneNumber: formData.phoneNumber,
            otp: formData.otp,
          });

          if (res.data.success) {
            alert("OTP Verified! Logged in successfully.");
          } else {
            setError(res.data.message || "Invalid OTP.");
          }
        }
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Request failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full px-4 sm:px-8 py-6 sm:py-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 🌟 Full Name - Signup only */}
        {!isLogin && (
          <div className="relative">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full bg-transparent border-b-2 border-white/50 text-white placeholder-white/70 py-3 pr-10 focus:outline-none focus:border-white transition-colors"
              required
            />
            <User className="absolute right-0 top-1/2 -translate-y-1/2 text-white/70" size={20} />
          </div>
        )}

        {/* 🌐 Email / Phone fields depending on method */}
        {authMethod === "email" && (
          <>
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b-2 border-white/50 text-white placeholder-white/70 py-3 pr-10 focus:outline-none focus:border-white transition-colors"
                required
              />
              <Mail className="absolute right-0 top-1/2 -translate-y-1/2 text-white/70" size={20} />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b-2 border-white/50 text-white placeholder-white/70 py-3 pr-10 focus:outline-none focus:border-white transition-colors"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {!isLogin && (
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b-2 border-white/50 text-white placeholder-white/70 py-3 pr-10 focus:outline-none focus:border-white transition-colors"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            )}
          </>
        )}

        {/* 📱 Phone-based Auth */}
        {authMethod === "phone" && (
          <>
            <div className="relative">
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Mobile Number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                disabled={showOtp}
                className="w-full bg-transparent border-b-2 border-white/50 text-white placeholder-white/70 py-3 pr-10 focus:outline-none focus:border-white transition-colors disabled:opacity-50"
                required
              />
              <Phone className="absolute right-0 top-1/2 -translate-y-1/2 text-white/70" size={20} />
            </div>

            {showOtp && (
              <div className="relative">
                <input
                  type="text"
                  name="otp"
                  maxLength="4"
                  placeholder="Enter OTP"
                  value={formData.otp}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b-2 border-white/50 text-white placeholder-white/70 py-3 text-center text-2xl tracking-widest focus:outline-none focus:border-white transition-colors"
                  required
                />
                <div className="flex justify-between items-center text-sm mt-2">
                  <span className="text-white/80">
                    {otpTimer > 0
                      ? `${Math.floor(otpTimer / 60)}:${(otpTimer % 60)
                          .toString()
                          .padStart(2, "0")}`
                      : "Expired"}
                  </span>
                  {otpTimer === 0 && (
                    <button type="button" onClick={handleSendOtp} className="text-white hover:underline">
                      Resend OTP
                    </button>
                  )}
                </div>
              </div>
            )}
          </>
        )}

        {/* 🔒 Submit */}
        <button
          type="submit"
          disabled={loading}
          className={`group w-full font-bold text-lg py-4 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-3 ${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-gradient-to-r from-teal-500 to-emerald-600 text-white"
          }`}
        >
          {loading
            ? "Please wait..."
            : authMethod === "phone" && !showOtp
            ? isLogin
              ? "Send OTP"
              : "Send Verification Code"
            : isLogin
            ? "Sign In to Account"
            : "Create Account"}
          <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
        </button>

        {error && <p className="text-red-400 text-sm text-center font-medium mt-3">{error}</p>}
      </form>

      <div className="text-center mt-6">
        <p className="text-white">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={toggleForm}
            className="ml-2 text-teal-400 hover:text-teal-300 font-semibold hover:underline transition-colors duration-300"
          >
            {isLogin ? "Sign up here" : "Sign in here"}
          </button>
        </p>
      </div>

      <div className="flex items-center justify-center gap-8 mt-8 text-sm text-gray-300">
        <div className="flex items-center gap-2">
          <Shield className="text-green-400" size={16} />
          <span>Secure & Protected</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="text-teal-400" size={16} />
          <span>Government Verified</span>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
