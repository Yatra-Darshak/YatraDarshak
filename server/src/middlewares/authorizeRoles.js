import asyncHandler from "express-async-handler";

/**
 * @desc    Restrict access based on user roles
 * @param   {...string} allowedRoles - e.g., "admin", "operator"
 * @usage   router.post('/trips', authorizeRoles("operator", "admin"), createTrips);
 */
const authorizeRoles = (...allowedRoles) => {
  return asyncHandler(async (req, res, next) => {
    // ✅ Ensure authentication middleware ran before this
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Not authenticated. Please log in to access this resource.",
      });
    }

    // ✅ Check if the user's role is allowed
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: `Access denied. This action requires one of the following roles: ${allowedRoles.join(
          ", "
        )}.`,
      });
    }

    // ✅ Pass control to next middleware/controller
    next();
  });
};

export default authorizeRoles;
