import express from "express";
import {
  createRoomType,
  getRoomsByHotel,
  updateRoomType,
  deleteRoomType,
} from "../../controllers/Hotels-Services/roomTypes.hotel.controllers.js";
import { protect, adminOnly } from "../../middlewares/authMiddleware.js";

const router = express.Router();

// Create room type for a hotel
router.post("/room", protect, adminOnly, createRoomType);

// Get all room types for a hotel
router.get("/room", getRoomsByHotel);

// Update or delete a room type
router.put("/:roomId", protect, adminOnly, updateRoomType);
router.delete("/:roomId", protect, adminOnly, deleteRoomType);

export default router;
