import React from "react";

const Header = ({ title, subtitle }) => {
  return (
    <div className="text-center space-y-3">
      <div className="inline-block relative">
        <h1
          className="text-5xl md:text-6xl font-bold text-gray-800 relative z-10"
          style={{ fontFamily: "serif" }}
        >
          {title}
        </h1>
        <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-2xl blur-xl -z-10"></div>
      </div>
      <p className="text-lg text-gray-600 font-light tracking-wide">
        {subtitle}
      </p>
      <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
    </div>
  );
};

export default Header;
