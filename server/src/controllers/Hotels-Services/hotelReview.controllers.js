import HotelReview from "../../models/Hotels-Services/hotelReview.models.js";
import Hotel from "../../models/Hotels-Services/hotels.models.js";
import asyncHandler from "express-async-handler";
import mongoose from "mongoose";

/**
 * @desc Add a review for a hotel
 * @route POST /api/hotels/reviews
 * @access Private
 */
export const addHotelReview = asyncHandler(async (req, res) => {
  const { hotelId, rating, title, comment, images } = req.body;

  if (!mongoose.Types.ObjectId.isValid(hotelId)) {
    return res.status(400).json({ success: false, message: "Invalid hotel ID." });
  }

  // Ensure rating is provided correctly
  if (!rating?.overall) {
    return res.status(400).json({ success: false, message: "Overall rating is required." });
  }

  // Create the review
  const review = await HotelReview.create({
    hotel: hotelId,
    user: req.user._id,
    rating,
    title,
    comment,
    images,
  });

  res.status(201).json({
    success: true,
    message: "Review added successfully.",
    review,
  });
});

/**
 * @desc Get all reviews for a specific hotel
 * @route GET /api/hotels/reviews/:hotelId
 * @access Public
 */
export const getHotelReviews = asyncHandler(async (req, res) => {
  const { hotelId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(hotelId)) {
    return res.status(400).json({ success: false, message: "Invalid hotel ID." });
  }

  const reviews = await HotelReview.find({ hotel: hotelId, status: "visible" })
    .populate("user", "name email")
    .sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    count: reviews.length,
    reviews,
  });
});

/**
 * @desc Update a review (user only)
 * @route PUT /api/hotels/reviews/:id
 * @access Private
 */
export const updateHotelReview = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const review = await HotelReview.findById(id);

  if (!review) {
    return res.status(404).json({ success: false, message: "Review not found." });
  }

  if (review.user.toString() !== req.user._id.toString()) {
    return res.status(403).json({ success: false, message: "Not authorized to edit this review." });
  }

  const updated = await HotelReview.findByIdAndUpdate(
    id,
    { ...req.body },
    { new: true, runValidators: true }
  );

  res.status(200).json({
    success: true,
    message: "Review updated successfully.",
    updated,
  });
});

/**
 * @desc Delete a review (user or admin)
 * @route DELETE /api/hotels/reviews/:id
 * @access Private
 */
export const deleteHotelReview = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const review = await HotelReview.findById(id);
  if (!review) {
    return res.status(404).json({ success: false, message: "Review not found." });
  }

  if (review.user.toString() !== req.user._id.toString() && req.user.role !== "admin") {
    return res.status(403).json({ success: false, message: "Not authorized to delete this review." });
  }

  await review.deleteOne();

  res.status(200).json({
    success: true,
    message: "Review deleted successfully.",
  });
});

/**
 * @desc Report a review (user)
 * @route POST /api/hotels/reviews/report/:id
 * @access Private
 */
export const reportReview = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { reason } = req.body;

  const review = await HotelReview.findById(id);
  if (!review) {
    return res.status(404).json({ success: false, message: "Review not found." });
  }

  review.status = "reported";
  review.reportedBy.push({ user: req.user._id, reason });
  await review.save();

  res.status(200).json({
    success: true,
    message: "Review reported successfully.",
  });
});

/**
 * @desc Admin - Get all reviews (with filters)
 * @route GET /api/admin/hotels/reviews
 * @access Admin
 */
export const getAllReviews = asyncHandler(async (req, res) => {
  const { status, hotelId } = req.query;

  const filter = {};
  if (status) filter.status = status;
  if (hotelId && mongoose.Types.ObjectId.isValid(hotelId)) filter.hotel = hotelId;

  const reviews = await HotelReview.find(filter)
    .populate("hotel", "hotelName")
    .populate("user", "name email")
    .sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    count: reviews.length,
    reviews,
  });
});
