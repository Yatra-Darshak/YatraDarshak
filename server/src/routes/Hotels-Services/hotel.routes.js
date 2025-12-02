import express from "express";
import {
  createHotel,
  getAllHotels,
  getHotelById,
  updateHotel,
  deleteHotel,
  getHotelsByCity,
} from "../../controllers/Hotels-Services/hotels.controllers.js";
import { protect, adminOnly } from "../../middlewares/authMiddleware.js";

const router = express.Router();

// Create new hotel (Admin/Operator)
router.post("/", protect, adminOnly, createHotel);

// Get all hotels or filter by city
router.get("/", getAllHotels);
router.get("/city/:city", getHotelsByCity);

// Get, update, delete a specific hotel
router.get("/:id", getHotelById);
router.put("/:id", protect, adminOnly, updateHotel);
router.delete("/:id", protect, adminOnly, deleteHotel);

export default router;
