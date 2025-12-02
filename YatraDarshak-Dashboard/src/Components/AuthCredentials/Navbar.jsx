import React from "react";
import { Home } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="relative z-50 bg-white/30 backdrop-blur-3xl border-b border-white/20 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* YD Logo */}
          <div className="relative group">
            <img
              className="w-12 h-12 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
              src="./YD-Partner.png"
              alt="YatraDarshak Partner Logo"
            />
            <div className="absolute -inset-1 bg-gradient-to-br from-teal-400 to-blue-600 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur"></div>
          </div>

          {/* Back button */}
          <button
            onClick={() => (window.location.href = "/")}
            className="flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors duration-300 font-medium"
          >
            <Home size={20} />
            Back to Home
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
