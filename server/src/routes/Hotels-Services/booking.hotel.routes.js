import express from "express";
import {
  createBooking,
  getUserBookings,
  getBookingById,
  cancelBooking,
} from "../../controllers/Hotels-Services/booking.hotel.controllers.js";
import { protect } from "../../middlewares/authMiddleware.js";

const router = express.Router();

// Book a hotel room
router.post("/", protect, createBooking);

// Get logged-in user's bookings
router.get("/my", protect, getUserBookings);

// Get specific booking by ID
router.get("/:id", protect, getBookingById);

// Cancel a booking
router.put("/:id/cancel", protect, cancelBooking);

export default router;
 