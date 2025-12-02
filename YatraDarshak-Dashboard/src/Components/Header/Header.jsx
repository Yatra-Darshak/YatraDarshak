import {
  Menu,
  X,
  LogIn,
  User,
  Settings,
  LogOut,
  BookOpen,
  MapPin,
  Heart,
  CreditCard,
  Bell,
  HelpCircle,
  ChevronDown,
  Plane,
  Star,
} from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPartnerView, setIsPartnerView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Toggle this to test logged in/out states
  const [user, setUser] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    let parsedUser = null;

    try {
      if (storedUser && storedUser !== "undefined") {
        parsedUser = JSON.parse(storedUser);
      }
    } catch (e) {
      console.error("User JSON parse failed:", e);
      parsedUser = null;
    }

    setUser(parsedUser);
    if (parsedUser) setIsLoggedIn(true);

  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsUserDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsUserDropdownOpen(false);
    // Add your logout logic here
  };

  const handleNavigation = (path) => {
    console.log(`Navigating to: ${path}`);
    setIsUserDropdownOpen(false);
  };

  return (
    <div className="min-h-20">
      <header
        className={`${
          isPartnerView
            ? "bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800"
            : "bg-white/80 backdrop-blur-md"
        } shadow-lg  px-6 py-4 fixed top-0 left-0 right-0 z-50 transition-all duration-500`}
      >
        <div className="max-w-7xl mx-auto">
          {/* ======== PARTNER HEADER ======== */}
          {isPartnerView ? (
            <div className="flex justify-between items-center">
              {/* Logo + Branding */}
              <div className="flex items-center space-x-3">
                <div className="relative group">
                  <img
                    className="w-12 h-12 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                    src="./YD-Partner.png"
                    alt="YatraDarshak Partner Logo"
                  />
                  <div className="absolute -inset-1 bg-gradient-to-br from-teal-400 to-blue-600 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur"></div>
                </div>

                <div className="rounded-2xl transition duration-300">
                  <span className="text-2xl font-bold bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent">
                    YATRADARSHAK
                  </span>
                  <div className="text-xs text-gray-300 font-medium tracking-wide">
                    Partner’s Platform
                  </div>
                </div>
              </div>

              {/* Center - Main Page Badge */}
              <div className="hidden lg:flex items-center justify-center flex-1">
                <Link
                  to="/"
                  onClick={() => setIsPartnerView(false)}
                  className="flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-teal-200/30 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
                >
                  <img
                    className="w-8 h-8 rounded-full shadow-sm group-hover:shadow-md transition-all duration-300"
                    src="./YD-logo.png"
                    alt="Yatra Darshak Main"
                  />
                  <div className="text-center">
                    <div className="text-sm font-semibold text-white group-hover:text-teal-200 transition-colors">
                      Yatradarshak Main Page
                    </div>
                    <div className="text-xs text-amber-300 font-medium">
                      Back to Explorer
                    </div>
                  </div>
                </Link>
              </div>

              {/* Navigation */}
              <nav className="hidden lg:flex items-center space-x-6">
                <Link
                  to="/partner-dashboard"
                  className="relative text-gray-200 hover:text-white font-medium transition-colors duration-300 group"
                >
                  Partner Dashboard
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link
                  to="/partner-benefits"
                  className="relative text-gray-200 hover:text-white font-medium transition-colors duration-300 group"
                >
                  Partner Benefits
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link
                  to="/contact-us"
                  className="relative text-gray-200 hover:text-white font-medium transition-colors duration-300 group"
                >
                  Contact Support
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </Link>

                {/* User Dropdown or Login - Partner View */}
                {user ? (
                  <div className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                      className="flex items-center gap-2 bg-white text-slate-800 px-4 py-2.5 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-md"
                    >
                      <img
                        src={user?.avatar || "/default-avatar.png"}
                        alt={user?.name || "User"}
                        className="w-7 h-7 rounded-full border-2 border-teal-900"
                      />
                      <span className="max-w-[100px] truncate">
                        {user?.name?.split(" ")[0] || "User"}
                      </span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          isUserDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {isUserDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                        {/* User Info */}
                        <div className="bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 p-4 text-white">
                          <div className="flex items-center gap-3">
                            <img
                              src={user?.avatar || "/default-avatar.png"}
                              alt={user?.name || "User"}
                              className="w-14 h-14 rounded-full border-3 border-white shadow-lg"
                            />
                            <div className="flex-1 min-w-0">
                              <p className="font-bold text-lg truncate">
                                {user?.name || "User"}
                              </p>
                              <p className="text-xs text-teal-200 truncate">
                                {user?.email || "user@example.com"}
                              </p>
                              <div className="flex items-center gap-1 mt-1">
                                <Star
                                  size={12}
                                  className="text-amber-400 fill-amber-400"
                                />
                                <span className="text-xs text-amber-300">
                                  Partner Member
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Menu Items */}
                        <div className="py-2">
                          <button
                            onClick={() => handleNavigation("/profile")}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors w-full text-left"
                          >
                            <User size={18} className="text-gray-600" />
                            <div>
                              <p className="text-sm font-medium text-gray-700">
                                My Profile
                              </p>
                              <p className="text-xs text-gray-500">
                                View and edit profile
                              </p>
                            </div>
                          </button>

                          <Link
                            to="/partner-dashboard"
                            onClick={() =>
                              handleNavigation("/partner-dashboard")
                            }
                            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors w-full text-left"
                          >
                            <MapPin size={18} className="text-gray-600" />
                            <div>
                              <p className="text-sm font-medium text-gray-700">
                                Partner Dashboard
                              </p>
                              <p className="text-xs text-gray-500">
                                Manage your services
                              </p>
                            </div>
                          </Link>

                          <Link
                            to="/partner-settings"
                            onClick={() => handleNavigation("/settings")}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors w-full text-left"
                          >
                            <Settings size={18} className="text-gray-600" />
                            <div>
                              <p className="text-sm font-medium text-gray-700">
                                Settings
                              </p>
                              <p className="text-xs text-gray-500">
                                Account preferences
                              </p>
                            </div>
                          </Link>

                          <Link
                            to="/partner-help-support"
                            onClick={() =>
                              handleNavigation("/partner-help-support")
                            }
                            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors w-full text-left"
                          >
                            <HelpCircle size={18} className="text-gray-600" />
                            <div>
                              <p className="text-sm font-medium text-gray-700">
                                Help & Support
                              </p>
                              <p className="text-xs text-gray-500">
                                Get assistance
                              </p>
                            </div>
                          </Link>

                          <div className="border-t border-gray-100 my-2"></div>

                          <button
                            onClick={handleLogout}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-red-50 transition-colors w-full text-left group"
                          >
                            <LogOut
                              size={18}
                              className="text-red-600 group-hover:translate-x-1 transition-transform"
                            />
                            <span className="text-sm font-medium text-red-600">
                              Logout
                            </span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => navigate("/login")}
                    className="flex items-center gap-2 bg-white text-slate-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-md"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <LogIn
                      size={18}
                      className={`transition-transform duration-300 ${
                        isHovered ? "rotate-12" : ""
                      }`}
                    />
                    Login
                  </button>
                )}
              </nav>

              {/* Mobile menu toggle */}
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          ) : (
            /* ======== MAIN HEADER ======== */
            <div className="flex justify-between items-center">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <Link to="/">
                  <div className="relative group">
                    <img
                      className="w-12 h-12 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                      src="./YD-logo.png"
                      alt="YatraDarshak Logo"
                    />
                    <div className="absolute -inset-1 bg-gradient-to-br from-teal-200 to-blue-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
                  </div>
                </Link>

                <div className="rounded-2xl transition duration-300">
                  <span className="text-2xl font-bold bg-gradient-to-r from-[#012938] to-[#01153E] bg-clip-text text-transparent group-hover:from-teal-400 group-hover:to-blue-500 transition-all duration-300">
                    YATRADARSHAK
                  </span>
                  <div className="text-xs text-gray-600 font-medium tracking-wide group-hover:text-cyan-950 transition-colors duration-300">
                    Your Travel Companion
                  </div>
                </div>
              </div>

              {/* Center - Partner Badge */}
              <div className="hidden lg:flex items-center justify-center flex-1">
                <Link
                  to="/yd-partner"
                  onClick={() => setIsPartnerView(true)}
                  className="flex items-center space-x-3 bg-teal-50 px-6 py-3 rounded-full border border-teal-200 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
                >
                  <img
                    className="w-8 h-8 rounded-full shadow-sm group-hover:shadow-md transition-all duration-300"
                    src="./YD-Partner.png"
                    alt="Yatra Darshak Partner"
                  />
                  <div className="text-center">
                    <div className="text-sm font-semibold text-[#012938] group-hover:text-[#01153E] transition-colors">
                      Yatradarshak Partner
                    </div>
                    <div className="text-xs text-amber-600 font-medium">
                      Verified Travel Expert
                    </div>
                  </div>
                </Link>
              </div>

              {/* Navigation */}
              <nav className="hidden lg:flex items-center space-x-6">
                <Link
                  to="/"
                  className="relative text-gray-600 hover:text-[#012938] font-medium transition-colors duration-300 group"
                >
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#012938] group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link
                  to="/travel-dairy"
                  className="relative text-gray-600 hover:text-[#012938] font-medium transition-colors duration-300 group"
                >
                  Travel Diary
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#012938] group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link
                  to="/about-us"
                  className="relative text-gray-600 hover:text-[#012938] font-medium transition-colors duration-300 group"
                >
                  About Us
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#012938] group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link
                  to="/contact-us"
                  className="relative text-gray-600 hover:text-[#012938] font-medium transition-colors duration-300 group"
                >
                  Contact Us
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#012938] group-hover:w-full transition-all duration-300"></span>
                </Link>
                {/* User Dropdown or Login - Main View */}
                {isLoggedIn ? (
                  <div className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                      className="flex items-center gap-2 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 text-white px-4 py-2.5 rounded-full font-semibold hover:shadow-lg transition-all duration-300 shadow-md"
                    >
                      <img
                        src={user?.avatar || "/default-avatar.png"}
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full"
                      />

                      <span className="max-w-[100px] truncate">
                        {user?.name?.split(" ")[0] || "Guest"}
                      </span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          isUserDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {isUserDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                        {/* User Info */}
                        <div className="bg-gradient-to-br from-[#012938] to-[#01153E] p-4 text-white">
                          <div className="flex items-center gap-3">
                            <img
                              src={user?.avatar || "/default-avatar.png"}
                              alt={user?.name || "Guest"}
                              className="w-14 h-14 rounded-full border-3 border-white shadow-lg"
                            />
                            <div className="flex-1 min-w-0">
                              <p className="font-bold text-lg truncate">
                                {user?.name || "Guest"}
                              </p>
                              <p className="text-xs text-teal-200 truncate">
                                {user?.email}
                              </p>
                              <p className="text-xs text-gray-300 mt-1">
                                Member since {user?.memberSince}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Menu Items */}
                        <div className="py-2">
                          <Link
                            to="/myAccount"
                            onClick={() => handleNavigation("/myAccount")}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors w-full text-left"
                          >
                            <User size={18} className="text-gray-600" />
                            <div>
                              <p className="text-sm font-medium text-gray-700">
                                My Account
                              </p>
                              <p className="text-xs text-gray-500">
                                View and edit profile
                              </p>
                            </div>
                          </Link>

                          <Link
                            to="/myBookings"
                            onClick={() => handleNavigation("/myBookings")}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors w-full text-left"
                          >
                            <BookOpen size={18} className="text-gray-600" />
                            <div>
                              <p className="text-sm font-medium text-gray-700">
                                My Bookings
                              </p>
                              <p className="text-xs text-gray-500">
                                View travel history
                              </p>
                            </div>
                          </Link>

                          <Link
                            to="/savedPlaces"
                            onClick={() => handleNavigation("/saved")}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors w-full text-left"
                          >
                            <Heart size={18} className="text-gray-600" />
                            <div>
                              <p className="text-sm font-medium text-gray-700">
                                Saved Places
                              </p>
                              <p className="text-xs text-gray-500">
                                Your wishlist
                              </p>
                            </div>
                          </Link>

                          <Link
                            to="/paymentMode"
                            onClick={() => handleNavigation("/payments")}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors w-full text-left"
                          >
                            <CreditCard size={18} className="text-gray-600" />
                            <div>
                              <p className="text-sm font-medium text-gray-700">
                                Payment Methods
                              </p>
                              <p className="text-xs text-gray-500">
                                Manage cards & wallets
                              </p>
                            </div>
                          </Link>

                          <Link
                            to="/notifications"
                            onClick={() => handleNavigation("/notifications")}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors w-full text-left"
                          >
                            <Bell size={18} className="text-gray-600" />
                            <div>
                              <p className="text-sm font-medium text-gray-700">
                                Notifications
                              </p>
                              <p className="text-xs text-gray-500">
                                Manage alerts
                              </p>
                            </div>
                          </Link>

                          <Link
                            to="/settings"
                            onClick={() => handleNavigation("/settings")}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors w-full text-left"
                          >
                            <Settings size={18} className="text-gray-600" />
                            <div>
                              <p className="text-sm font-medium text-gray-700">
                                Settings
                              </p>
                              <p className="text-xs text-gray-500">
                                Account preferences
                              </p>
                            </div>
                          </Link>

                          <Link
                            to="/help-and-support"
                            onClick={() =>
                              handleNavigation("/help-and-support")
                            }
                            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors w-full text-left"
                          >
                            <HelpCircle size={18} className="text-gray-600" />
                            <div>
                              <p className="text-sm font-medium text-gray-700">
                                Help & Support
                              </p>
                              <p className="text-xs text-gray-500">
                                FAQs and contact
                              </p>
                            </div>
                          </Link>

                          <div className="border-t border-gray-100 my-2"></div>

                          <button
                            onClick={handleLogout}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-red-50 transition-colors w-full text-left group"
                          >
                            <LogOut
                              size={18}
                              className="text-red-600 group-hover:translate-x-1 transition-transform"
                            />
                            <span className="text-sm font-medium text-red-600">
                              Logout
                            </span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => setIsLoggedIn(true)}
                    className="flex items-center gap-2 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 shadow-md"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <LogIn
                      size={18}
                      className={`transition-transform duration-300 ${
                        isHovered ? "rotate-12" : ""
                      }`}
                    />
                    Login
                  </button>
                )}
              </nav>

              {/* Mobile menu toggle */}
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          )}

          {/* ======== MOBILE MENU (Common) ======== */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
              <nav className="flex flex-col space-y-4">
                {isPartnerView ? (
                  <>
                    <Link
                      to="/"
                      onClick={() => {
                        setIsPartnerView(false);
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center space-x-3 bg-white/10 px-4 py-2 rounded-full border border-teal-200/30 shadow-sm cursor-pointer text-white"
                    >
                      <img
                        src="./YD-logo.png"
                        alt="Main Logo"
                        className="w-6 h-6 rounded-full"
                      />
                      <div>
                        <div className="text-sm font-semibold">
                          Back to Main
                        </div>
                        <div className="text-xs text-amber-300 font-medium">
                          Explore YatraDarshak
                        </div>
                      </div>
                    </Link>

                    {isLoggedIn && (
                      <div className="bg-white/10 p-4 rounded-lg">
                        <div className="flex items-center gap-3 mb-3">
                          <img
                            src={user?.avatar || "/default-avatar.png"}
                            alt={user?.name || "Guest"}
                            className="w-12 h-12 rounded-full border-2 border-white"
                          />
                          <div>
                            <p className="font-semibold text-white">
                              {user?.name || "Guest"}
                            </p>
                            <p className="text-xs text-gray-300">
                              {user?.email}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => handleNavigation("/profile")}
                          className="text-left text-gray-200 hover:text-white font-medium py-2 w-full"
                        >
                          My Profile
                        </button>
                        <Link
                          to="/partner-dashboard">
                            <button
                          onClick={() => handleNavigation("/partner-dashboard")}
                          className="text-left text-gray-200 hover:text-white font-medium py-2 w-full"
                        >
                          Partner Dashboard
                          </button>
                        </Link>
                        <Link to="/partner-settings">
                          <button
                            onClick={() =>
                              handleNavigation("/partner-settings")
                            }
                            className="text-left text-gray-200 hover:text-white font-medium py-2 w-full"
                          >
                            Settings
                          </button>
                        </Link>
                      </div>
                    )}

                    <Link
                      to="/partner-benefits"
                      className="text-gray-200 hover:text-white font-medium py-2"
                    >
                      Partner Benefits
                    </Link>
                    <Link
                      to="/contact-us"
                      className="text-gray-200 hover:text-white font-medium py-2"
                    >
                      Contact Support
                    </Link>
                    {isLoggedIn ? (
                      <button
                        onClick={handleLogout}
                        className="bg-white text-slate-800 px-6 py-3 rounded-full font-semibold mt-4 hover:bg-gray-100 transition-all duration-300 shadow-lg"
                      >
                        Logout
                      </button>
                    ) : (
                      <button
                        onClick={() => setIsLoggedIn(true)}
                        className="bg-white text-slate-800 px-6 py-3 rounded-full font-semibold mt-4 hover:bg-gray-100 transition-all duration-300 shadow-lg"
                      >
                        Login
                      </button>
                    )}
                  </>
                ) : (
                  <>
                    <Link
                      to="/yd-partner"
                      onClick={() => {
                        setIsPartnerView(true);
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center space-x-3 bg-teal-50 px-4 py-2 rounded-full border border-teal-200 shadow-sm cursor-pointer"
                    >
                      <img
                        src="./YD-Partner.png"
                        alt="Partner Logo"
                        className="w-6 h-6 rounded-full"
                      />
                      <div>
                        <div className="text-[#012938] text-sm font-semibold">
                          Yatradarshak Partner
                        </div>
                        <div className="text-xs text-amber-600 font-medium">
                          Verified Travel Expert
                        </div>
                      </div>
                    </Link>

                    {isLoggedIn && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center gap-3 mb-3">
                          <img
                            src={user?.avatar || "/default-avatar.png"}
                            alt={user?.name || "Guest"}
                            className="w-12 h-12 rounded-full border-2 border-[#012938]"
                          />
                          <div>
                            <p className="font-semibold text-[#012938]">
                              {user?.name || "Guest"}
                            </p>
                            <p className="text-xs text-gray-600">
                              {user?.email}
                            </p>
                          </div>
                        </div>
                        <Link to="/myAccount">
                          <button
                            onClick={() => handleNavigation("/myAccount")}
                            className="text-left text-gray-600 hover:text-[#012938] font-medium py-2 w-full"
                          >
                            My Account
                          </button>
                        </Link>
                        <Link to="/myBookings">
                          <button
                            onClick={() => handleNavigation("/myBookings")}
                            className="text-left text-gray-600 hover:text-[#012938] font-medium py-2 w-full"
                          >
                            My Bookings
                          </button>
                        </Link>
                        <Link to="/savedPlaces">
                          <button
                            onClick={() => handleNavigation("/savedPlaces")}
                            className="text-left text-gray-600 hover:text-[#012938] font-medium py-2 w-full"
                          >
                            Saved Places
                          </button>
                        </Link>
                        <Link to="/settings">
                          <button
                            onClick={() => handleNavigation("/settings")}
                            className="text-left text-gray-600 hover:text-[#012938] font-medium py-2 w-full"
                          >
                            Settings
                          </button>
                        </Link>
                      </div>
                    )}

                    <Link
                      to="/travel-dairy"
                      className="text-gray-600 hover:text-[#012938] font-medium py-2"
                    >
                      Travel Diary
                    </Link>
                    <Link
                      to="/about-us"
                      className="text-gray-600 hover:text-[#012938] font-medium py-2"
                    >
                      About Us
                    </Link>
                    <Link
                      to="/contact-us"
                      className="text-gray-600 hover:text-[#012938] font-medium py-2"
                    >
                      Contact Us
                    </Link>
                    {isLoggedIn ? (
                      <button
                        onClick={handleLogout}
                        className="bg-gradient-to-r from-[#012938] to-[#01153E] text-white px-6 py-3 rounded-full font-semibold mt-4 hover:to-cyan-950 transition-all duration-300 shadow-lg"
                      >
                        Logout
                      </button>
                    ) : (
                      <button
                        onClick={() => setIsLoggedIn(true)}
                        className="bg-gradient-to-r from-[#012938] to-[#01153E] text-white px-6 py-3 rounded-full font-semibold mt-4 hover:to-cyan-950 transition-all duration-300 shadow-lg"
                      >
                        Login
                      </button>
                    )}
                  </>
                )}
              </nav>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
