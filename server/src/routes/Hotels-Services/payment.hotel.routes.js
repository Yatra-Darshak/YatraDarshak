import express from "express";
import {
  initiatePayment,
  verifyPayment,
  refundPayment,
  getPaymentDetails,
} from "../../controllers/Hotels-Services/payment.hotel.controllers.js";
import { protect } from "../../middlewares/authMiddleware.js";

const router = express.Router();

// Create/initiate a payment
router.post("/initiate", protect, initiatePayment);

// Verify payment status (after transaction)
router.post("/verify", protect, verifyPayment);

// Refund a payment
router.post("/:paymentId/refund", protect, refundPayment);

// Get payment details
router.get("/:paymentId", protect, getPaymentDetails);

export default router;
