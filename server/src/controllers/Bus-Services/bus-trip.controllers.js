import asyncHandler from "express-async-handler";
import mongoose from "mongoose";
import BusTrip from "../../models/Bus-Service/busTrip.models.js";
import BusOperator from "../../models/Bus-Service/busOperator.models.js";

export const createTrips = asyncHandler(async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const {
      operator,
      routeId,
      providerTripId,
      vehicleRegNumber,
      source,
      destination,
      departureTime,
      arrivalTime,
      durationMinutes,
      busType,
      boardingPoints,
      droppingPoints,
      fare,
      availableSeats,
      seatLayout,
      seatType,
      amenities,
      cancellationPolicy,
      isRefundable,
    } = req.body;

    const createdBy = req.user?._id || null; // ✅ authenticated admin

    // Validate required fields
    if (
      !operator ||
      !routeId ||
      !providerTripId ||
      !vehicleRegNumber ||
      !source ||
      !destination ||
      !departureTime ||
      !arrivalTime ||
      !fare?.baseFare ||
      !fare?.totalAmount ||
      !availableSeats
    ) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    // Check if operator exists
    const existingOperator = await BusOperator.findById(operator).session(
      session
    );
    if (!existingOperator) {
      await session.abortTransaction();
      session.endSession();
      return res.status(404).json({
        success: false,
        message: "Operator not found",
      });
    }

    // Ensure unique routeId & providerTripId
    const existingTrip = await BusTrip.findOne({
      $or: [{ routeId }, { providerTripId }],
    }).session(session);
    if (existingTrip) {
      return res.status(400).json({
        success: false,
        message:
          "A trip with the same routeId or providerTripId already exists",
      });
    }

    // Create trip
    const [trip] = await BusTrip.create(
      [
        {
          operator,
          routeId,
          providerTripId,
          vehicleRegNumber,
          source,
          destination,
          departureTime,
          arrivalTime,
          durationMinutes,
          busType,
          boardingPoints,
          droppingPoints,
          fare,
          availableSeats,
          seatLayout,
          seatType,
          amenities,
          cancellationPolicy,
          isRefundable,
          createdBy,
        },
      ],
      { session }
    );

    await session.commitTransaction();
    session.endSession();

    res.status(201).json({
      success: true,
      message: "Trip created successfully",
      data: trip,
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * @desc    Get all trips (with filters, pagination & sorting)
 * @route   GET /api/v1/trips
 * @access  Public/User
 */
export const getTrips = asyncHandler(async (req, res) => {
  const {
    source,
    destination,
    date,
    busType,
    seatType,
    minFare,
    maxFare,
    sort = "departureTime",
    page = 1,
    limit = 10,
  } = req.query;

  const filters = {};

  // ✅ Location filters (case-insensitive)
  if (source) filters.source = { $regex: source, $options: "i" };
  if (destination) filters.destination = { $regex: destination, $options: "i" };

  // ✅ Bus & seat filters
  if (busType) filters.busType = busType;
  if (seatType) filters.seatType = seatType;

  // ✅ Fare filters
  if (minFare || maxFare) {
    filters["fare.totalAmount"] = {};
    if (minFare) filters["fare.totalAmount"].$gte = Number(minFare);
    if (maxFare) filters["fare.totalAmount"].$lte = Number(maxFare);
  }

  // ✅ Filter by date (same-day window)
  if (date) {
    const start = new Date(date);
    const end = new Date(date);
    end.setHours(23, 59, 59, 999);
    filters.departureTime = { $gte: start, $lte: end };
  }

  // ✅ Pagination safety
  const pageNumber = Math.max(1, Number(page));
  const limitNumber = Math.max(1, Number(limit));
  const skip = (pageNumber - 1) * limitNumber;

  // ✅ Sorting safety
  const sortField = sort.startsWith("-")
    ? { [sort.substring(1)]: -1 }
    : { [sort]: 1 };

  // ✅ Count total for pagination
  const total = await BusTrip.countDocuments(filters);

  // ✅ Query trips with populated operator info
  const trips = await BusTrip.find(filters)
    .populate({
      path: "operator",
      model: BusOperator,
      select:
        "name displayName providerName contactInfo.phone contactInfo.email supportContact.contactNumber rating active",
    })
    .sort(sortField)
    .skip(skip)
    .limit(limitNumber)
    .lean(); // Lean for performance

  // ✅ If no trips found
  if (!trips.length) {
    return res.status(200).json({
      success: true,
      message: "No trips found matching the filters",
      total: 0,
      count: 0,
      currentPage: pageNumber,
      totalPages: 0,
      data: [],
    });
  }

  // ✅ Success response
  res.status(200).json({
    success: true,
    total,
    count: trips.length,
    currentPage: pageNumber,
    totalPages: Math.ceil(total / limitNumber),
    data: trips,
  });
});

/**
 * @desc    Get trip by ID
 * @route   GET /api/v1/trips/:id
 * @access  Public/User
 */
export const getTripsByID = asyncHandler(async (req, res) => {
  const { id } = req.params;

  // ✅ Validate ObjectId format
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid Trip ID format",
    });
  }

  // ✅ Fetch trip with detailed operator info
  const trip = await BusTrip.findById(id)
    .populate(
      "operator",
      "name displayName providerName contactInfo.phone contactInfo.email contactInfo.website supportContact.contactNumber supportContact.email licenseNumber rating active"
    )
    .lean(); // improves performance (returns plain JS object instead of Mongoose doc)

  if (!trip) {
    return res.status(404).json({
      success: false,
      message: "Trip not found",
    });
  }

  res.status(200).json({
    success: true,
    data: trip,
  });
});

/**
 * @desc    Update a trip by ID
 * @route   PATCH /api/v1/trips/:id
 * @access  Operator/Admin
 */
export const modifyTripByID = asyncHandler(async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { id } = req.params;

    // ✅ 1. Validate ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({
        success: false,
        message: "Invalid Trip ID format",
      });
    }

    // ✅ 2. Restrict which fields can be updated
    const allowedUpdates = [
      "fare",
      "availableSeats",
      "boardingPoints",
      "droppingPoints",
      "departureTime",
      "arrivalTime",
      "busType",
      "seatType",
      "status",
      "amenities",
      "durationMinutes",
      "cancellationPolicy",
      "isRefundable",
    ];

    const updates = {};
    for (const key of Object.keys(req.body)) {
      if (allowedUpdates.includes(key)) {
        updates[key] = req.body[key];
      }
    }

    if (Object.keys(updates).length === 0) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({
        success: false,
        message: "No valid fields provided for update",
      });
    }

    // ✅ 3. Update trip using session
    const updatedTrip = await BusTrip.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
      session,
    }).populate(
      "operator",
      "name displayName providerName contactInfo.phone contactInfo.email supportContact.contactNumber supportContact.email licenseNumber"
    );

    // ✅ 4. Handle not found
    if (!updatedTrip) {
      await session.abortTransaction();
      session.endSession();
      return res.status(404).json({
        success: false,
        message: "Trip not found",
      });
    }

    // ✅ 5. Commit transaction
    await session.commitTransaction();
    session.endSession();

    // ✅ 6. Respond
    res.status(200).json({
      success: true,
      message: "Trip updated successfully",
      data: updatedTrip,
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


/**
 * @desc    Delete (cancel) a trip
 * @route   DELETE /api/v1/trips/:id
 * @access  Operator/Admin
 */
export const deleteTrip = asyncHandler(async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { id } = req.params;

    // ✅ 1. Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({
        success: false,
        message: "Invalid Trip ID format",
      });
    }

    // ✅ 2. Find trip
    const trip = await BusTrip.findById(id).session(session);
    if (!trip) {
      await session.abortTransaction();
      session.endSession();
      return res.status(404).json({
        success: false,
        message: "Trip not found",
      });
    }

    // ✅ 3. Soft delete (mark as canceled instead of deleting)
    trip.status = "cancelled";
    await trip.save({ session });

    // ✅ 4. Create trip log entry
    await TripLog.create(
      [
        {
          routeID: trip._id,
          action: "DELETE",
          performedBy: req.user?._id || null, // whoever deleted it
          oldValue: JSON.stringify(trip),
          newValue: "Trip marked as cancelled",
        },
      ],
      { session }
    );

    // ✅ 5. Commit transaction
    await session.commitTransaction();
    session.endSession();

    res.status(200).json({
      success: true,
      message: "Trip cancelled successfully",
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});
