/* ============================================================
   🔹 asyncHandler.js
   Utility to wrap async route handlers and controllers.
   It catches any rejected promises and passes the error to
   Express’s centralized error handler.
============================================================ */

export const asyncHandler = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((err) => {
      console.error("🔥 Async Handler Error:", err.message);

      // Standardized error response
      if (!res.headersSent) {
        res.status(err.statusCode || 500).json({
          success: false,
          message: err.message || "Internal Server Error",
        });
      }

      // Pass error to global error middleware (if defined)
      next(err);
    });
  };
};
