import mongoose from "mongoose";
import Payment from "../../models/Hotels-Services/payment.hotels.models.js";
import HotelBooking from "../../models/Hotels-Services/booking.hotels.models.js";
import asyncHandler from "express-async-handler";

/**
 * @desc Initiate a payment for a hotel booking
 * @route POST /api/hotels/payments/initiate
 * @access Private
 */
export const initiatePayment = asyncHandler(async (req, res) => {
  const { bookingId, amount, method, currency = "INR", provider } = req.body;

  if (!mongoose.Types.ObjectId.isValid(bookingId)) {
    return res.status(400).json({ success: false, message: "Invalid booking ID." });
  }

  if (!amount || !method) {
    return res.status(400).json({ success: false, message: "Amount and payment method are required." });
  }

  // Create a new payment record
  const payment = await Payment.create({
    booking: bookingId,
    user: req.user._id,
    amount,
    currency,
    method,
    status: "initiated",
    provider,
  });

  res.status(201).json({
    success: true,
    message: "Payment initiated successfully.",
    payment,
  });
});

/**
 * @desc Verify payment status from provider (Razorpay/Stripe webhook)
 * @route POST /api/hotels/payments/verify
 * @access Private
 */
export const verifyPayment = asyncHandler(async (req, res) => {
  const { paymentId, orderId, signature, status } = req.body;

  const payment = await Payment.findOne({ "provider.orderId": orderId });
  if (!payment) {
    return res.status(404).json({ success: false, message: "Payment not found." });
  }

  // Normally, here you'd verify signature (gateway integration)
  if (status === "success") {
    payment.status = "success";
  } else if (status === "failed") {
    payment.status = "failed";
  } else {
    payment.status = "pending";
  }

  payment.provider.paymentId = paymentId;
  payment.provider.signature = signature;

  await payment.save();

  res.status(200).json({
    success: true,
    message: "Payment verification complete.",
    payment,
  });
});

/**
 * @desc Refund a completed payment
 * @route POST /api/hotels/payments/:paymentId/refund
 * @access Private
 */
export const refundPayment = asyncHandler(async (req, res) => {
  const { paymentId } = req.params;
  const { refundAmount, reason } = req.body;

  const payment = await Payment.findById(paymentId);
  if (!payment) {
    return res.status(404).json({ success: false, message: "Payment not found." });
  }

  if (payment.status !== "success") {
    return res.status(400).json({ success: false, message: "Only successful payments can be refunded." });
  }

  payment.status = "refunded";
  payment.refund = {
    refunded: true,
    refundTransactionId: `REF-${Date.now()}`,
    refundAmount: refundAmount || payment.amount,
    refundReason: reason || "Customer requested refund",
    refundedAt: new Date(),
  };

  await payment.save();

  res.status(200).json({
    success: true,
    message: "Refund processed successfully.",
    refund: payment.refund,
  });
});

/**
 * @desc Get payment details by ID
 * @route GET /api/hotels/payments/:paymentId
 * @access Private
 */
export const getPaymentDetails = asyncHandler(async (req, res) => {
  const { paymentId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(paymentId)) {
    return res.status(400).json({ success: false, message: "Invalid payment ID." });
  }

  const payment = await Payment.findById(paymentId)
    .populate("user", "name email")
    .populate("booking", "hotel checkInDate checkOutDate totalPrice");

  if (!payment) {
    return res.status(404).json({ success: false, message: "Payment not found." });
  }

  res.status(200).json({
    success: true,
    message: "Payment details fetched successfully.",
    payment,
  });
});
