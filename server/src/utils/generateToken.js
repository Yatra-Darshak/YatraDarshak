import jwt from "jsonwebtoken";

// Function to generate JWT token for a user
const generateToken = (userId, role) => {
  return jwt.sign(
    { id: userId, role },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN || "7d", // Default 7 days
    }
  );
};

export default generateToken;
