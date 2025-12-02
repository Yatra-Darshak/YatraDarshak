import mongoose from "mongoose";
import HotelLog from "../../models/Hotels-Services/hotelBookingLogs.models.js";
import asyncHandler from "express-async-handler";

/**
 * @desc    Create a hotel log entry
 * @route   POST /api/hotels/logs
 * @access  Private (Operator/Admin)
 */
export const createLog = asyncHandler(async (req, res) => {
  const { action, hotelId, details } = req.body;

  if (!action || !hotelId) {
    return res.status(400).json({
      success: false,
      message: "Action and hotelId are required fields.",
    });
  }

  const log = await HotelLog.create({
    action,
    hotel: hotelId,
    operator: req.user._id,
    details: details || "No additional details provided.",
  });

  res.status(201).json({
    success: true,
    message: "Log entry created successfully.",
    data: log,
  });
});

/**
 * @desc    Get all hotel logs (Admin only)
 * @route   GET /api/hotels/logs
 * @access  Private (Admin)
 */
export const getAllLogs = asyncHandler(async (req, res) => {
  const logs = await HotelLog.find()
    .populate("hotel", "hotelName location")
    .populate("operator", "name email")
    .sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    count: logs.length,
    message: "All hotel logs fetched successfully.",
    data: logs,
  });
});

/**
 * @desc    Get logs for a specific hotel
 * @route   GET /api/hotels/logs/:hotelId
 * @access  Private (Admin)
 */
export const getLogsByHotel = asyncHandler(async (req, res) => {
  const { hotelId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(hotelId)) {
    return res.status(400).json({
      success: false,
      message: "Invalid hotel ID format.",
    });
  }

  const logs = await HotelLog.find({ hotel: hotelId })
    .populate("operator", "name email")
    .sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    count: logs.length,
    message: "Logs fetched successfully for the specified hotel.",
    data: logs,
  });
});

/**
 * @desc    Delete a specific log entry
 * @route   DELETE /api/hotels/logs/:logId
 * @access  Private (Admin)
 */
export const deleteLog = asyncHandler(async (req, res) => {
  const { logId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(logId)) {
    return res.status(400).json({
      success: false,
      message: "Invalid log ID format.",
    });
  }

  const log = await HotelLog.findById(logId);
  if (!log) {
    return res.status(404).json({
      success: false,
      message: "Log not found.",
    });
  }

  await log.deleteOne();

  res.status(200).json({
    success: true,
    message: "Log deleted successfully.",
  });
});
