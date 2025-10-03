import mongoose from "mongoose";

const paymentSchema = new Schema(
  {
    booking: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
      required: true,
    },
    amount: Number,
    currency: { type: String, default: "INR" },
    status: {
      type: String,
      enum: ["pending", "success", "failed", "refunded"],
      default: "pending",
    },
    transactionId: String,
    method: String,
    providerPaymentId: {
      type: String,
      index: true,
    },
    paymentGateway: {
      type: String,
      enum: ["Razorpay", "Stripe", "Paytm", "CashFree", "Other"],
      default: "Other",
    },
    paidAt: {
      type: Date,
    },
    refundTransactionId: String,
  },
  { timestamps: true }
);

paymentSchema.index({ booking: 1, transactionId: 1 });

export default mongoose.model("Payment", paymentSchema);
