import jwt from "jsonwebtoken";
import User from "../models/authUser.models.js";

const isAuthenticated = async (req, res, next) => {
  try {
    let token;

    if (req.cookies?.token) {
      token = req.cookies.token;
    }

    else if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authorized, no token provided",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found, authorization denied",
      });
    }

    req.user = user;
    next();

  } catch (error) {
    console.error("Auth Error:", error.message);
    return res.status(401).json({
      success: false,
      message: "Not authorized, invalid token",
    });
  }
};

export default isAuthenticated;


// import jwt from "jsonwebtoken";

// const isAuthenticated = async (req, res, next) => {
//   try {
//     // Get token from cookies
//     const token = req.cookies?.token;

//     if (!token) {
//       return res.status(401).json({
//         message: "User not authenticated",
//         success: false,
//       });
//     }

//     // Verify token
//     const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
//     if (!decoded) {
//       return res.status(401).json({
//         message: "Invalid token",
//         success: false,
//       });
//     }

//     // Attach user id to request
//     req.id = decoded.id; // note: 'id' because you signed token with { id: user._id }

//     next();
//   } catch (error) {
//     console.error("Auth middleware error:", error);
//     return res.status(401).json({
//       success: false,
//       message: "Authentication failed",
//       error: error.message,
//     });
//   }
// };

// export default isAuthenticated;
