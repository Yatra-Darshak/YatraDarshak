import asyncHandler from "express-async-handler";
import mongoose from "mongoose";
import Hotel from "../../models/Hotels-Services/hotels.models.js";
import { format } from "path";
import { error } from "console";

// @desc    Create a new hotel
// @route   POST /api/hotels
// @access  Private (Operator/Admin)
export const createHotel = asyncHandler(async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const {
      hotelName,
      hotelCode,
      description,
      images,
      contactInfo,
      location,
      propertyType,
      amenities,
      policies,
      rooms,
      featured,
      verified,
    } = req.body;

    // Validate required fields
    if (!hotelName && !hotelCode && !location?.address && !location?.city) {
      throw new Error("Hotel name, code, address, and city are required.");
    }

    // Check for duplicate hotel code
    const existingHotel = await Hotel.findOne({ hotelCode }).session(session);
    if (existingHotel) {
      throw new Error("Hotel with this code already exists.");
    }

    // Get operator from logged-in user
    // Assuming req.user is set by auth middleware
    const operatorId = req.user?._id;
    if (!operatorId) {
      throw new Error("Unauthorized access: Operator not found.");
    }

    // Create new hotel
    const newHotel = await Hotel.create([
      {
        operator: operatorId,
        hotelName,
        hotelCode,
        description,
        images: images || [],
        contactInfo: contactInfo || {},
        location,
        propertyType: propertyType || "hotel",
        amenities: amenities || [],
        policies: {
          ...policies,
          checkIn: policies?.checkIn || "12:00 PM",
          checkOut: policies?.checkOut || "11:00 AM",
          support24X7: policies?.support24X7 ?? true,
        },
        rooms: rooms || [],
        featured: featured || false,
        verified: verified || false,
        meta: { createdBy: operatorId, updatedBy: operatorId },
      },
      { session },
    ]);

    await session.commitTransaction();
    session.endSession();

    return res.status(201).json({
      success: true,
      message: "Hotel created successfully.",
      data: newHotel[0],
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.error("Error creating hotel:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to create hotel.",
    });
  }
});

// @desc    Get all hotels (with filters, pagination, search)
// @route   GET /api/hotels
// @access  Public or Private (depending on design)
export const getAllHotels = asyncHandler(async (req, res) => {
  try {
    const {
      city,
      state,
      propertyType,
      featured,
      verified,
      active,
      search,
      sortBy = "createdAt",
      order = "desc",
      page = 1,
      limit = 10,
    } = req.query;

    // Filters
    const filter = {};
    if (city) filter["location.city"] = new RegExp(city, "i");
    if (state) filter["location.state"] = new RegExp(state, "i");
    if (propertyType) filter.propertyType = propertyType;
    if (featured !== undefined) filter.featured = featured === "true";
    if (verified !== undefined) filter.verified = verified === "true";
    if (active !== undefined) filter.active = active === "true";

    // Search by name or description (text index)
    if (search) {
      filter.$text = { $search: search };
    }

    // Pagination
    const pageNumber = parseInt(page, 10);
    const pageSize = parseInt(limit, 10);
    const skip = (pageNumber - 1) * pageSize;

    // Sorting
    const sortOrder = order === "asc" ? 1 : -1;
    const sortOptions = { [sortBy]: sortOrder };

    // Query hotels
    const hotels = await Hotel.find(filter)
      .populate("operator", "name providerName") // populate limited fields
      .populate("rooms") // optionally populate room data
      .sort(sortOptions)
      .skip(skip)
      .limit(pageSize)
      .lean(); // use lean for faster read performance

    // Count total for pagination
    const totalHotels = await Hotel.countDocuments(filter);

    res.status(200).json({
      success: true,
      message: "Hotels fetched successfully.",
      pagination: {
        total: totalHotels,
        page: pageNumber,
        limit: pageSize,
        totalPages: Math.ceil(totalHotels / pageSize),
      },
      data: hotels,
    });
  } catch (error) {
    console.error("Error fetching hotels:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch hotels.",
    });
  }
});

// @desc    Get single hotel by ID
// @route   GET /api/hotels/:id
// @access  Public (or Private if restricted)
export const getHotelById = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid hotel ID format.",
      });
    }

    // Fetch hotel with populated fields
    const hotel = await Hotel.findById(id)
      .populate("operator", "name providerName")
      .populate("rooms")
      .populate({
        path: "rating",
        select: "average totalReviews",
      })
      .lean();

    if (!hotel) {
      return res.status(404).json({
        success: false,
        message: "Hotel not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Hotel fetched successfully.",
      data: hotel,
    });
  } catch (error) {
    console.error("Error fetching hotel by ID:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch hotel details.",
    });
  }
});

// @desc    Update hotel details
// @route   PUT /api/hotels/:id
// @access  Private (Operator/Admin)
export const updateHotel = asyncHandler(async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { id } = req.params;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid hotel ID format.",
      });
    }

    const existingHotel = await Hotel.findById(id).session(session);
    if (!existingHotel) {
      return res.status(404).json({
        success: false,
        message: "Hotel not found.",
      });
    }

    // Optional: Authorization check — only allow same operator or admin
    if (
      req.user.role !== "admin" &&
      existingHotel.operator.toString() !== req.user._id.toString()
    ) {
      return res.status(403).json({
        success: false,
        message: "Access denied. You are not authorized to update this hotel.",
      });
    }

    const updateData = { ...req.body };

    // Update meta information
    updateData["meta"] = {
      ...existingHotel.meta,
      updatedBy: req.user._id,
      lastUpdated: new Date(),
    };

    // Prevent accidental overwrite of operator or hotelCode
    delete updateData.operator;
    delete updateData.hotelCode;

    const updatedHotel = await Hotel.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
      session,
    })
      .populate("operator", "name providerName")
      .populate("rooms")
      .lean();

    await session.commitTransaction();
    session.endSession();

    res.status(200).json({
      success: true,
      message: "Hotel updated successfully.",
      data: updatedHotel,
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.error("Error updating hotel:", error);

    res.status(500).json({
      success: false,
      message: error.message || "Failed to update hotel.",
    });
  }
});

// @desc    Delete hotel (soft or hard)
// @route   DELETE /api/hotels/:id
// @access  Private (Operator/Admin)
export const deleteHotel = asyncHandler(async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { id } = req.params;
    const { hardDelete = false } = req.query; // ?hardDelete=true for permanent delete

    // Validate ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid hotel ID format.",
      });
    }

    const hotel = await Hotel.findById(id).session(session);
    if (!hotel) {
      return res.status(404).json({
        success: false,
        message: "Hotel not found.",
      });
    }

    // Authorization: Only the hotel operator or admin can delete
    if (
      req.user.role !== "admin" &&
      hotel.operator.toString() !== req.user._id.toString()
    ) {
      return res.status(403).json({
        success: false,
        message: "Access denied. You are not authorized to delete this hotel.",
      });
    }

    if (hardDelete === "true" && req.user.role === "admin") {
      // Hard delete — permanently remove hotel
      await Hotel.findByIdAndDelete(id, { session });
      await session.commitTransaction();
      session.endSession();

      return res.status(200).json({
        success: true,
        message: "Hotel permanently deleted from the database.",
      });
    } else {
      // Soft delete — mark hotel as inactive
      hotel.active = false;
      hotel.meta = {
        ...hotel.meta,
        updatedBy: req.user._id,
        lastUpdated: new Date(),
      };

      await hotel.save({ session });

      await session.commitTransaction();
      session.endSession();

      return res.status(200).json({
        success: true,
        message: "Hotel marked as inactive (soft deleted).",
        data: { _id: hotel._id, active: hotel.active },
      });
    }
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.error("Error deleting hotel:", error);

    res.status(500).json({
      success: false,
      message: error.message || "Failed to delete hotel.",
    });
  }
});

// @desc    Get all hotels in a specific city
// @route   GET /api/hotels/city/:city
// @access  Public
export const getHotelsByCity = asyncHandler(async (req, res) => {
  try {
    const { city } = req.params;
    const {
      state,
      propertyType,
      featured,
      verified,
      sortBy = "createdAt",
      order = "desc",
      page = 1,
      limit = 10,
    } = req.query;

    // Validate city param
    if (!city || typeof city !== "string") {
      return res.status(400).json({
        success: false,
        message: "City parameter is required.",
      });
    }

    // Build filter query
    const filter = {
      "location.city": { $regex: new RegExp(city, "i") }, // case-insensitive match
      active: true, // Only fetch active hotels
    };

    if (state) filter["location.state"] = new RegExp(state, "i");
    if (propertyType) filter.propertyType = propertyType;
    if (featured !== undefined) filter.featured = featured === "true";
    if (verified !== undefined) filter.verified = verified === "true";

    // Pagination
    const pageNumber = parseInt(page, 10);
    const pageSize = parseInt(limit, 10);
    const skip = (pageNumber - 1) * pageSize;

    // Sorting
    const sortOrder = order === "asc" ? 1 : -1;
    const sortOptions = { [sortBy]: sortOrder };

    // Query hotels
    const hotels = await Hotel.find(filter)
      .populate("operator", "name providerName")
      .populate("rooms")
      .sort(sortOptions)
      .skip(skip)
      .limit(pageSize)
      .lean();

    const totalHotels = await Hotel.countDocuments(filter);

    if (!hotels.length) {
      return res.status(404).json({
        success: false,
        message: `No hotels found in ${city}.`,
      });
    }

    res.status(200).json({
      success: true,
      message: `Hotels in ${city} fetched successfully.`,
      pagination: {
        total: totalHotels,
        page: pageNumber,
        limit: pageSize,
        totalPages: Math.ceil(totalHotels / pageSize),
      },
      data: hotels,
    });
  } catch (error) {
    console.error("Error fetching hotels by city:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch hotels by city.",
    });
  }
});

