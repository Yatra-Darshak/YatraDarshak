import mongoose from "mongoose";
import HotelBooking from "../../models/Hotels-Services/booking.hotels.models.js";
import Hotel from "../../models/Hotels-Services/hotels.models.js";
import asyncHandler from "express-async-handler";

/**
 * @desc    Create a new hotel booking
 * @route   POST /api/hotels/bookings
 * @access  Private (User)
 */
export const createBooking = asyncHandler(async (req, res) => {
  const { hotelId, operatorId, room, bookingDetails, payment } = req.body;

  if (!hotelId || !operatorId || !room || !bookingDetails || !payment) {
    return res.status(400).json({
      success: false,
      message: "Missing required booking fields.",
    });
  }

  const hotelExists = await Hotel.findById(hotelId);
  if (!hotelExists) {
    return res.status(404).json({
      success: false,
      message: "Hotel not found.",
    });
  }

  const newBooking = await HotelBooking.create({
    user: req.user._id,
    hotel: hotelId,
    operator: operatorId,
    room,
    bookingDetails,
    payment,
    bookingStatus: "initiated",
    meta: {
      bookedBy: req.user._id,
    },
  });

  res.status(201).json({
    success: true,
    message: "Hotel booking created successfully.",
    data: newBooking,
  });
});

/**
 * @desc    Get all bookings for logged-in user
 * @route   GET /api/hotels/bookings/my
 * @access  Private (User)
 */
export const getUserBookings = asyncHandler(async (req, res) => {
  const bookings = await HotelBooking.find({ user: req.user._id })
    .populate("hotel", "hotelName location propertyType")
    .populate("operator", "name providerName")
    .populate("room.roomId", "roomType bedType pricePerNight")
    .sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    count: bookings.length,
    message: "User bookings fetched successfully.",
    data: bookings,
  });
});

/**
 * @desc    Get a specific booking by ID
 * @route   GET /api/hotels/bookings/:id
 * @access  Private (User)
 */
export const getBookingById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid booking ID format.",
    });
  }

  const booking = await HotelBooking.findById(id)
    .populate("hotel", "hotelName location propertyType")
    .populate("operator", "name providerName")
    .populate("room.roomId", "roomType bedType pricePerNight");

  if (!booking) {
    return res.status(404).json({
      success: false,
      message: "Booking not found.",
    });
  }

  // Ensure user owns the booking
  if (booking.user.toString() !== req.user._id.toString()) {
    return res.status(403).json({
      success: false,
      message: "Access denied. You are not the owner of this booking.",
    });
  }

  res.status(200).json({
    success: true,
    message: "Booking fetched successfully.",
    data: booking,
  });
});

/**
 * @desc    Cancel a booking
 * @route   PUT /api/hotels/bookings/:id/cancel
 * @access  Private (User)
 */
export const cancelBooking = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { reason } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid booking ID format.",
    });
  }

  const booking = await HotelBooking.findById(id);
  if (!booking) {
    return res.status(404).json({
      success: false,
      message: "Booking not found.",
    });
  }

  if (booking.user.toString() !== req.user._id.toString()) {
    return res.status(403).json({
      success: false,
      message: "You are not authorized to cancel this booking.",
    });
  }

  if (booking.bookingStatus === "cancelled") {
    return res.status(400).json({
      success: false,
      message: "This booking is already cancelled.",
    });
  }

  booking.bookingStatus = "cancelled";
  booking.cancellation = {
    isCancelled: true,
    reason: reason || "Cancelled by user.",
    cancelledAt: new Date(),
    refundAmount: booking.payment.amount * 0.8, // e.g., 80% refund policy
  };

  await booking.save();

  res.status(200).json({
    success: true,
    message: "Booking cancelled successfully.",
    data: booking,
  });
});
