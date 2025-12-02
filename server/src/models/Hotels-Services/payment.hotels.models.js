import mongoose, { Schema } from "mongoose";

const hotelPaymentSchema = new Schema(
  {
    booking: {
      type: Schema.Types.ObjectId,
      ref: "HotelBooking",
      required: true,
      index: true,
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    amount: {
      type: Number,
      required: true,
      min: 0,
    },

    currency: {
      type: String,
      default: "INR",
      enum: ["INR", "USD", "EUR", "GBP"],
    },

    method: {
      type: String,
      required: true,
      enum: ["card", "upi", "wallet", "netbanking", "paypal"],
    },

    status: {
      type: String,
      enum: ["initiated", "pending", "success", "failed", "refunded"],
      default: "initiated",
      index: true,
    },

    provider: {
      name: { type: String, trim: true }, // Razorpay, Stripe, etc.
      paymentId: { type: String, trim: true }, // Gateway reference
      orderId: { type: String, trim: true },
      signature: { type: String, trim: true },
    },

    refund: {
      refunded: { type: Boolean, default: false },
      refundTransactionId: { type: String, trim: true },
      refundAmount: { type: Number },
      refundReason: { type: String, trim: true },
      refundedAt: { type: Date },
    },

    receiptUrl: {
      type: String,
      trim: true, // PDF or webpage link
    },

    metadata: {
      type: Map,
      of: String, // For extra info like payment gateway response
    },
  },
  { timestamps: true }
);

// ✅ Indexes for faster lookups
hotelPaymentSchema.index({ status: 1, createdAt: -1 });
hotelPaymentSchema.index({ "provider.paymentId": 1 });

// ✅ Optional: Auto-update booking paymentStatus
hotelPaymentSchema.post("save", async function (doc, next) {
  try {
    const Booking = mongoose.model("HotelBooking");
    if (["success", "failed", "refunded"].includes(doc.status)) {
      await Booking.findByIdAndUpdate(doc.booking, {
        paymentStatus: doc.status,
      });
    }
    next();
  } catch (err) {
    next(err);
  }
});

export default mongoose.model("HotelPayment", hotelPaymentSchema);
