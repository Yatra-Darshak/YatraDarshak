import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/authUser.models.js";
import Admin from "../models/authAdmin.models.js";
import { asyncHandler } from "./asyncHandler.js";

dotenv.config();

/* ============================================================
   🔹 PROTECT MIDDLEWARE
   Verifies JWT and attaches authenticated user/admin to request.
============================================================ */
export const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const user = await User.findById(decoded.id);
      const admin = await Admin.findById(decoded.id);

      console.log("Decoded ID:", decoded.id);
      console.log("User found:", !!user);
      console.log("Admin found:", !!admin);

      if (!user && !admin) {
        return res.status(404).json({
          success: false,
          message: "User not found, authorization denied",
        });
      }

      req.user = user || admin;
      next();
    } catch (error) {
      console.error("Auth error:", error.message);
      return res
        .status(401)
        .json({ success: false, message: "Token verification failed" });
    }
  } else {
    return res
      .status(401)
      .json({ success: false, message: "No token, authorization denied" });
  }
});

/* ============================================================
   🔹 AUTH MIDDLEWARE — Verify JWT Token for User/Admin
============================================================ */
export const authMiddleware = async (req, res, next) => {
  try {
    let token;

    // Token from headers
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    // Token from cookies (optional)
    else if (req.cookies?.token) {
      token = req.cookies.token;
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Access denied. Token missing.",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || process.env.JWT_SECRET_KEY);

    const user =
      (await User.findById(decoded.id)) || (await Admin.findById(decoded.id));

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User/Admin not found." });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Auth Middleware Error:", error.message);
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token.",
    });
  }
};

/* ============================================================
   🔹 ADMIN ONLY MIDDLEWARE
   Restricts access to admin or superAdmin roles only
============================================================ */
export const adminOnly = (req, res, next) => {
  try {
    if (!req.user) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized: Please log in." });
    }

    const allowedRoles = [
      "superAdmin",
      "hotelAdmin",
      "busAdmin",
      "flightAdmin",
      "cabAdmin",
      "homestaysAdmin",
      "holidayPackagesAdmin",
      "trainsAdmin",
      "supportAdmin",
    ];

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message:
          "Access denied. Only admin roles are allowed to perform this action.",
      });
    }

    next();
  } catch (error) {
    console.error("AdminOnly Middleware Error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Server error during admin role verification.",
    });
  }
};

/* ============================================================
   🔹 ROLE-BASED MIDDLEWARE (Dynamic)
============================================================ */
export const verifyAdminRole = (allowedRoles = []) => {
  return (req, res, next) => {
    try {
      if (!req.user) {
        return res
          .status(401)
          .json({ success: false, message: "Unauthorized access." });
      }

      if (!allowedRoles.includes(req.user.role)) {
        return res.status(403).json({
          success: false,
          message: "Forbidden: insufficient privileges.",
        });
      }

      next();
    } catch (error) {
      console.error("Role Verification Error:", error.message);
      return res.status(500).json({
        success: false,
        message: "Server error in role verification.",
      });
    }
  };
};

/* ============================================================
   🔹 VERIFY OPERATOR ROLE
   Specific to travel operators (hotel, bus, flight, etc.)
============================================================ */
export const verifyOperatorRole = (allowedServices = []) => {
  return (req, res, next) => {
    if (!req.user) {
      return res
        .status(401)
        .json({ success: false, message: "Not authenticated" });
    }

    if (
      req.user.role !== "operator" &&
      req.user.role !== "admin" &&
      req.user.role !== "superAdmin"
    ) {
      return res.status(403).json({
        success: false,
        message:
          "Access denied. Only operators or admins can perform this action.",
      });
    }

    if (
      allowedServices.length > 0 &&
      !allowedServices.includes(req.user.businessType)
    ) {
      return res.status(403).json({
        success: false,
        message: `Access denied. Only ${allowedServices.join(
          ", "
        )} operators are allowed.`,
      });
    }

    next();
  };
};

/* ============================================================
   🔹 HELPER FUNCTION: Generate JWT
============================================================ */
export const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET || process.env.JWT_SECRET_KEY, {
    expiresIn: "7d",
  });
};


// import jwt from "jsonwebtoken";
// import User from "../models/authUser.models.js"; // update path as needed

// // Middleware to verify JWT token and authenticate user
// export const protect = async (req, res, next) => {
//   let token;

//   // Check if token is sent in Authorization header
//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     try {
//       token = req.headers.authorization.split(" ")[1];
//       const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

//       // Attach authenticated user to request object
//       req.user = await User.findById(decoded.id).select("-password");

//       if (!req.user) {
//         return res.status(404).json({ success: false, message: "User not found" });
//       }

//       next();
//     } catch (error) {
//       console.error("JWT verification failed:", error.message);
//       return res.status(401).json({
//         success: false,
//         message: "Not authorized, token invalid or expired",
//       });
//     }
//   }

//   if (!token) {
//     return res.status(401).json({
//       success: false,
//       message: "Not authorized, no token provided",
//     });
//   }
// };

// // Middleware to check if user has specific roles (e.g., admin, operator)
// // export const authorizeRoles = (...roles) => {
// export const adminOnly = (...roles) => {
//   return (req, res, next) => {
//     if (!roles.includes(req.user.role)) {
//       return res.status(403).json({
//         success: false,
//         message: `Access denied. This action requires one of the following roles: ${roles.join(", ")}`,
//       });
//     }
//     next();
//   };
// };

// // Optional — to verify operator for hotel management
// export const isHotelOperator = (req, res, next) => {
//   if (req.user.role !== "operator" && req.user.role !== "admin") {
//     return res.status(403).json({
//       success: false,
//       message: "Access denied. Only hotel operators or admins can perform this action.",
//     });
//   }
//   next();
// };
