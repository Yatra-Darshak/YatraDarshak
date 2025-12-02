import express from "express";
import {
  getAllLogs,
  getLogsByHotel,
  createLog,
  deleteLog,
} from "../../controllers/Hotels-Services/hotelLogs.controllers.js";
import { protect, adminOnly } from "../../middlewares/authMiddleware.js";

const router = express.Router();

// Get all logs (Admin only)
router.get("/", protect, adminOnly, getAllLogs);

// Get logs for a specific hotel
router.get("/:hotelId", protect, adminOnly, getLogsByHotel);

// Create a log entry manually (optional)
router.post("/", protect, createLog);

// Delete a log (Admin only)
router.delete("/:logId", protect, adminOnly, deleteLog);

export default router;
    