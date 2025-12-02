import mongoose from "mongoose";
import HotelOperator from "../../models/Hotels-Services/hotelOperator.models.js";
import { asyncHandler } from "../../middlewares/asyncHandler.js";

/**
 * @desc    Register a new hotel operator
 * @route   POST /api/hotels/operators
 * @access  Private (Admin)
 */
export const registerOperator = asyncHandler(async (req, res) => {
  const {
    name,
    providerName,
    operatorId,
    contactInfo,
    supportContact,
    registrationId,
    documents,
    displayName,
    meta,
  } = req.body;

  // Validate required fields
  if (!name || !providerName || !operatorId || !contactInfo?.email || !contactInfo?.phoneNumber) {
    return res.status(400).json({
      success: false,
      message: "Missing required fields: name, providerName, operatorId, or contact info.",
    });
  }

  // Check for duplicate operator
  const existingOperator = await HotelOperator.findOne({ operatorId, providerName });
  if (existingOperator) {
    return res.status(409).json({
      success: false,
      message: `Operator already registered under ${providerName}.`,
    });
  }

  const operator = await HotelOperator.create({
    name,
    providerName,
    operatorId,
    contactInfo,
    supportContact,
    registrationId,
    documents,
    displayName,
    meta: {
      createdBy: req.user?._id || null,
      notes: meta?.notes || "",
    },
  });

  res.status(201).json({
    success: true,
    message: "Operator registered successfully.",
    data: operator,
  });
});

/**
 * @desc    Get all operators with filtering & pagination
 * @route   GET /api/hotels/operators
 * @access  Private (Admin)
 */
export const getAllOperators = asyncHandler(async (req, res) => {
  const {
    verified,
    active,
    providerName,
    search,
    page = 1,
    limit = 10,
    sortBy = "createdAt",
    order = "desc",
  } = req.query;

  const filter = {};
  if (verified !== undefined) filter.verified = verified === "true";
  if (active !== undefined) filter.active = active === "true";
  if (providerName) filter.providerName = providerName;
  if (search) {
    filter.$or = [
      { name: { $regex: search, $options: "i" } },
      { displayName: { $regex: search, $options: "i" } },
      { "contactInfo.email": { $regex: search, $options: "i" } },
    ];
  }

  const pageNumber = parseInt(page, 10);
  const pageSize = parseInt(limit, 10);
  const skip = (pageNumber - 1) * pageSize;
  const sortOrder = order === "asc" ? 1 : -1;

  const [operators, total] = await Promise.all([
    HotelOperator.find(filter)
      .sort({ [sortBy]: sortOrder })
      .skip(skip)
      .limit(pageSize)
      .lean(),
    HotelOperator.countDocuments(filter),
  ]);

  res.status(200).json({
    success: true,
    total,
    page: pageNumber,
    totalPages: Math.ceil(total / pageSize),
    data: operators,
  });
});

/**
 * @desc    Get operator by ID
 * @route   GET /api/hotels/operators/:id
 * @access  Private (Admin / Operator)
 */
export const getOperatorById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid operator ID.",
    });
  }

  const operator = await HotelOperator.findById(id).lean();
  if (!operator) {
    return res.status(404).json({
      success: false,
      message: "Operator not found.",
    });
  }

  res.status(200).json({
    success: true,
    data: operator,
  });
});

/**
 * @desc    Update operator details
 * @route   PUT /api/hotels/operators/:id
 * @access  Private (Admin)
 */
export const updateOperator = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid operator ID.",
    });
  }

  const updatedOperator = await HotelOperator.findByIdAndUpdate(
    id,
    { ...req.body, "meta.updatedAt": Date.now() },
    { new: true, runValidators: true }
  );

  if (!updatedOperator) {
    return res.status(404).json({
      success: false,
      message: "Operator not found.",
    });
  }

  res.status(200).json({
    success: true,
    message: "Operator updated successfully.",
    data: updatedOperator,
  });
});

/**
 * @desc    Delete or deactivate operator
 * @route   DELETE /api/hotels/operators/:id
 * @access  Private (Admin)
 */
export const deleteOperator = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { permanent } = req.query;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid operator ID.",
    });
  }

  const operator = await HotelOperator.findById(id);
  if (!operator) {
    return res.status(404).json({
      success: false,
      message: "Operator not found.",
    });
  }

  if (permanent === "true") {
    await operator.deleteOne();
  } else {
    operator.active = false;
    await operator.save();
  }

  res.status(200).json({
    success: true,
    message: permanent === "true" ? "Operator deleted permanently." : "Operator deactivated.",
  });
});
