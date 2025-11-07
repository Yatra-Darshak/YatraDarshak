import { Menu, X, LogIn } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPartnerView, setIsPartnerView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
                <a
                  href="#"
                  className="relative text-gray-200 hover:text-white font-medium transition-colors duration-300 group"
                >
                  Partner Dashboard
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </a>
                <a
                  href="#"
                  className="relative text-gray-200 hover:text-white font-medium transition-colors duration-300 group"
                >
                  Partner Benefits
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </a>
                <a
                  href="#"
                  className="relative text-gray-200 hover:text-white font-medium transition-colors duration-300 group"
                >
                  Contact Support
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </a>
                <Link to="/authAdmin">
                <button
                  className="flex items-center gap-2 bg-white text-slate-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
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
                </Link>
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
                  to='/'
                  className="relative text-gray-600 hover:text-[#012938] font-medium transition-colors duration-300 group"
                >
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#012938] group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link
                  to='/travel-dairy'
                  className="relative text-gray-600 hover:text-[#012938] font-medium transition-colors duration-300 group"
                >
                  Travel Diary
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#012938] group-hover:w-full transition-all duration-300"></span>
                </Link>
                <a
                  href="#"
                  className="relative text-gray-600 hover:text-[#012938] font-medium transition-colors duration-300 group"
                >
                  About Us
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#012938] group-hover:w-full transition-all duration-300"></span>
                </a>
                <a
                  href="#"
                  className="relative text-gray-600 hover:text-[#012938] font-medium transition-colors duration-300 group"
                >
                  Contact Us
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#012938] group-hover:w-full transition-all duration-300"></span>
                </a>
                <Link to="/auth">
                  <button
                    className="flex items-center gap-2 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
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
                </Link>
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

                    <a
                      href="#"
                      className="text-gray-200 hover:text-white font-medium py-2"
                    >
                      Partner Dashboard
                    </a>
                    <a
                      href="#"
                      className="text-gray-200 hover:text-white font-medium py-2"
                    >
                      Partner Benefits
                    </a>
                    <a
                      href="#"
                      className="text-gray-200 hover:text-white font-medium py-2"
                    >
                      Contact Support
                    </a>
                    <Link to="/authAdmin">
                      <button className="bg-white text-slate-800 px-6 py-3 rounded-full font-semibold mt-4 hover:bg-gray-100 transition-all duration-300 shadow-lg">
                        Login
                      </button>
                    </Link>
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

                    <a
                      href="#"
                      className="text-gray-600 hover:text-[#012938] font-medium py-2"
                    >
                      Travel Diary
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-[#012938] font-medium py-2"
                    >
                      About Us
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-[#012938] font-medium py-2"
                    >
                      Contact Us
                    </a>
                    <Link to="/auth">
                      <button className="bg-gradient-to-r from-[#012938] to-[#01153E] text-white px-6 py-3 rounded-full font-semibold mt-4 hover:to-cyan-950 transition-all duration-300 shadow-lg">
                        Login
                      </button>
                    </Link>
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

// import { Menu, X } from "lucide-react";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className="min-h-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
//       {/* Fixed Header */}
//       <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-blue-100 px-6 py-4 fixed top-0 left-0 right-0 z-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex justify-between items-center">
//             {/* Logo */}
//             <div className="flex items-center space-x-3">
//               <Link to="/">
//                 <div className="relative group">
//                   <img
//                     className="w-12 h-12 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
//                     src="./YD-logo.png"
//                     alt="YatraDarshak Logo"
//                   />
//                   <div className="absolute -inset-1 bg-gradient-to-br from-teal-200 to-blue-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
//                 </div>
//               </Link>

//               <div className="rounded-2xl transition duration-300">
//                 <span className="text-2xl font-bold bg-gradient-to-r from-[#012938] to-[#01153E] bg-clip-text text-transparent group-hover:from-teal-400 group-hover:to-blue-500 transition-all duration-300">
//                   YATRADARSHAK
//                 </span>
//                 <div className="text-xs text-gray-600 font-medium tracking-wide group-hover:text-cyan-950 transition-colors duration-300">
//                   Your Travel Companion
//                 </div>
//               </div>
//             </div>

//             {/* Center - Partner Badge */}
//             <div className="hidden lg:flex items-center justify-center flex-1">
//               <Link
//                 to="/yd-partner"
//                 className="flex items-center space-x-3 bg-teal-50 px-6 py-3 rounded-full border border-teal-200 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
//               >
//                 <img
//                   className="w-8 h-8 rounded-full shadow-sm group-hover:shadow-md transition-all duration-300"
//                   src="./YD-Partner.png"
//                   alt="Yatra Darshak Partner"
//                 />
//                 <div className="text-center">
//                   <div className="text-sm font-semibold text-[#012938] group-hover:text-[#01153E] transition-colors">
//                     Yatradarshak Partner
//                   </div>
//                   <div className="text-xs text-amber-600 font-medium">
//                     Verified Travel Expert
//                   </div>
//                 </div>
//               </Link>
//             </div>

//             {/* Navigation */}
//             <nav className="hidden lg:flex items-center space-x-6">
//               <a
//                 href="#"
//                 className="relative text-gray-600 hover:text-[#012938] font-medium transition-colors duration-300 group"
//               >
//                 Travel Diary
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#012938] group-hover:w-full transition-all duration-300"></span>
//               </a>
//               <a
//                 href="#"
//                 className="relative text-gray-600 hover:text-[#012938] font-medium transition-colors duration-300 group"
//               >
//                 About Us
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#012938] group-hover:w-full transition-all duration-300"></span>
//               </a>
//               <a
//                 href="#"
//                 className="relative text-gray-600 hover:text-[#012938] font-medium transition-colors duration-300 group"
//               >
//                 Contact Us
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#012938] group-hover:w-full transition-all duration-300"></span>
//               </a>
//               <Link to="/auth">
//                 <button className="bg-gradient-to-r from-[#012938] to-[#01153E] text-white px-8 py-3 rounded-full font-semibold hover:from-[#01153E] hover:to-cyan-950 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:scale-105">
//                   Login or Create Account
//                 </button>
//               </Link>
//             </nav>

//             {/* Mobile menu button */}
//             <button
//               className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? (
//                 <X className="w-6 h-6" />
//               ) : (
//                 <Menu className="w-6 h-6" />
//               )}
//             </button>
//           </div>

//           {/* Mobile menu */}
//           {isMenuOpen && (
//             <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
//               <nav className="flex flex-col space-y-4">
//                 <div className="flex justify-center">
//                   <Link
//                     to="/partners"
//                     className="flex items-center space-x-3 bg-teal-50 px-4 py-2 rounded-full border border-teal-200 shadow-sm"
//                   >
//                     <div className="w-6 h-6 rounded-full flex items-center justify-center">
//                       <img
//                         src="./YD-Partner.png"
//                         alt="YatraDarshak Partner Logo"
//                       />
//                     </div>
//                     <div>
//                       <div className="text-[#012938] text-sm font-semibold">
//                         Yatradarshak Partner
//                       </div>
//                       <div className="text-xs text-amber-600 font-medium">
//                         Verified Travel Expert
//                       </div>
//                     </div>
//                   </Link>
//                 </div>

//                 <a
//                   href="#"
//                   className="text-gray-600 hover:text-[#012938] font-medium transition-colors py-2"
//                 >
//                   Travel Diary
//                 </a>
//                 <a
//                   href="#"
//                   className="text-gray-600 hover:text-[#012938] font-medium transition-colors py-2"
//                 >
//                   About Us
//                 </a>
//                 <a
//                   href="#"
//                   className="text-gray-600 hover:text-[#012938] font-medium transition-colors py-2"
//                 >
//                   Contact Us
//                 </a>

//                 <Link to="/auth">
//                   <button className="bg-gradient-to-r from-[#012938] to-[#01153E] text-white px-6 py-3 rounded-full font-semibold mt-4 hover:to-cyan-950 transition-all duration-300 shadow-lg">
//                     Login or Create Account
//                   </button>
//                 </Link>
//               </nav>
//             </div>
//           )}
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Header;

// // import { Menu, X } from "lucide-react";
// // import React, { useState } from "react";

// // const Header = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// //   return (
// //     <div className="min-h-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
// //       {/* Fixed Header */}
// //       <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-blue-100 px-6 py-4 fixed top-0 left-0 right-0 z-50">
// //         <div className="max-w-7xl mx-auto">
// //           <div className="flex justify-between items-center">
// //             {/* Logo */}
// //             <div className="flex items-center space-x-3">
// //               <div className="relative group">
// //                 <img
// //                   className="w-12 h-12 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
// //                   src="./YD-logo.png"
// //                   alt="YatraDarshak Logo"
// //                 />
// //                 <div className="absolute -inset-1 bg-gradient-to-br from-teal-200 to-blue-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
// //               </div>
// //               <div className="rounded-2xl transition duration-300">
// //                 <span className="text-2xl font-bold bg-gradient-to-r from-[#012938] to-[#01153E] bg-clip-text text-transparent group-hover:from-teal-400 group-hover:to-blue-500 transition-all duration-300">
// //                   YATRADARSHAK
// //                 </span>
// //                 <div className="text-xs text-gray-600 font-medium tracking-wide group-hover:text-cyan-950 transition-colors duration-300">
// //                   Your Travel Companion
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Center - Partner Badge */}
// //             <div className="hidden lg:flex items-center justify-center flex-1">
// //               <div className="flex items-center space-x-3 bg-teal-50 px-6 py-3 rounded-full border border-teal-200 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer">
// //                 <img
// //                   className="w-8 h-8 rounded-full shadow-sm group-hover:shadow-md transition-all duration-300"
// //                   src="./YD-Partner.png"
// //                   alt="Yatra Darshak Partner"
// //                 />
// //                 <div className="text-center">
// //                   <div className="text-sm font-semibold text-[#012938] group-hover:text-[#01153E] transition-colors">
// //                     Yatradarshak Partner
// //                   </div>
// //                   <div className="text-xs text-amber-600 font-medium">
// //                     Verified Travel Expert
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Navigation */}
// //             <nav className="hidden lg:flex items-center space-x-6">
// //               <a
// //                 href="#"
// //                 className="relative text-gray-600 hover:text-[#012938] font-medium transition-colors duration-300 group"
// //               >
// //                 Travel Diary
// //                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#012938] group-hover:w-full transition-all duration-300"></span>
// //               </a>
// //               <a
// //                 href="#"
// //                 className="relative text-gray-600 hover:text-[#012938] font-medium transition-colors duration-300 group"
// //               >
// //                 About Us
// //                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#012938] group-hover:w-full transition-all duration-300"></span>
// //               </a>
// //               <a
// //                 href="#"
// //                 className="relative text-gray-600 hover:text-[#012938] font-medium transition-colors duration-300 group"
// //               >
// //                 Contact Us
// //                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#012938] group-hover:w-full transition-all duration-300"></span>
// //               </a>
// //               <button className="bg-gradient-to-r from-[#012938] to-[#01153E] text-white px-8 py-3 rounded-full font-semibold hover:from-[#01153E] hover:to-cyan-950 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:scale-105">
// //                 Login or Create Account
// //               </button>
// //             </nav>

// //             {/* Mobile menu button */}
// //             <button
// //               className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
// //               onClick={() => setIsMenuOpen(!isMenuOpen)}
// //             >
// //               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
// //             </button>
// //           </div>

// //           {/* Mobile menu */}
// //           {isMenuOpen && (
// //             <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
// //               <nav className="flex flex-col space-y-4">
// //                 <div className="flex justify-center">
// //                   <div className="flex items-center space-x-3 bg-teal-50 px-4 py-2 rounded-full border border-teal-200 shadow-sm">
// //                     <div className="w-6 h-6 rounded-full flex items-center justify-center">
// //                       <img src="./YD-Partner.png" alt="YatraDarshak Partner Logo" />
// //                     </div>
// //                     <div>
// //                       <div className="text-[#012938] text-sm font-semibold">
// //                         Yatradarshak Partner
// //                       </div>
// //                       <div className="text-xs text-amber-600 font-medium">
// //                         Verified Travel Expert
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <a href="#" className="text-gray-600 hover:text-[#012938] font-medium transition-colors py-2">
// //                   Travel Diary
// //                 </a>
// //                 <a href="#" className="text-gray-600 hover:text-[#012938] font-medium transition-colors py-2">
// //                   About Us
// //                 </a>
// //                 <a href="#" className="text-gray-600 hover:text-[#012938] font-medium transition-colors py-2">
// //                   Contact Us
// //                 </a>

// //                 <button className="bg-gradient-to-r from-[#012938] to-[#01153E] text-white px-6 py-3 rounded-full font-semibold mt-4 hover:to-cyan-950 transition-all duration-300 shadow-lg">
// //                   Login or Create Account
// //                 </button>
// //               </nav>
// //             </div>
// //           )}
// //         </div>
// //       </header>

// //     </div>
// //   );
// // };

// // export default Header;
