import RoomType from "../../models/Hotels-Services/roomTypes.hotels.models.js";
import asyncHandler from "express-async-handler";
import mongoose from "mongoose";

/**
 * @desc Create a new room type for a hotel
 * @route POST /api/hotels/rooms/:hotelId
 * @access Admin
 */
export const createRoomType = asyncHandler(async (req, res) => {
  const { hotelId } = req.params;

  const room = await RoomType.create({
    ...req.body,
    hotel: hotelId,
    operatorId: req.user._id,
  });

  res.status(201).json({
    success: true,
    message: "Room type created successfully",
    room,
  });
});

/**
 * @desc Get all room types for a specific hotel
 * @route GET /api/hotels/rooms/:hotelId
 * @access Public
 */
export const getRoomsByHotel = asyncHandler(async (req, res) => {
  const { hotelId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(hotelId)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid hotel ID" });
  }

  const rooms = await RoomType.find({ hotel: hotelId }).populate(
    "hotel",
    "name city"
  );

  res.status(200).json({
    success: true,
    count: rooms.length,
    rooms,
  });
});

/**
 * @desc Update room type details
 * @route PUT /api/hotels/rooms/:roomId
 * @access Admin
 */
export const updateRoomType = asyncHandler(async (req, res) => {
  const { roomId } = req.params;

  let room = await RoomType.findById(roomId);
  if (!room) {
    return res
      .status(404)
      .json({ success: false, message: "Room type not found" });
  }

  room = await RoomType.findByIdAndUpdate(roomId, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    message: "Room type updated successfully",
    room,
  });
});

/**
 * @desc Delete a room type
 * @route DELETE /api/hotels/rooms/:roomId
 * @access Admin
 */
export const deleteRoomType = asyncHandler(async (req, res) => {
  const { roomId } = req.params;

  const room = await RoomType.findById(roomId);
  if (!room) {
    return res
      .status(404)
      .json({ success: false, message: "Room type not found" });
  }

  await room.deleteOne();

  res.status(200).json({
    success: true,
    message: "Room type deleted successfully",
  });
});
