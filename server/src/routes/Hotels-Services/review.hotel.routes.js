import express from "express";
import {
  addHotelReview,
  getHotelReviews,
  updateHotelReview,
  deleteHotelReview,
} from "../../controllers/Hotels-Services/hotelReview.controllers.js";
import { protect } from "../../middlewares/authMiddleware.js";

const router = express.Router();

// Add a review for a hotel
router.post("/:hotelId", protect, addHotelReview);

// Get all reviews for a hotel
router.get("/:hotelId", getHotelReviews);

// Update or delete user's review
router.put("/:reviewId", protect, updateHotelReview);
router.delete("/:reviewId", protect, deleteHotelReview);

export default router;
