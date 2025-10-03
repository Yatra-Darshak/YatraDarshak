import mongoose, { Schema } from "mongoose";

const cancellationSchema = new Schema(
  {
    booking: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
      required: true,
    },
    status: {
      type: String,
      enum: ["not_requested", "requested", "processed"],
      default: "not_requested",
    },
    reason: {
      type: String,
      required: function () {
        return this.status !== "not_requested"; // required only when user requests
      },
    },
    refundAmount: {
      type: Number,
    },
    refundTransactionId: {
      type: String,
    },
    requestedAt: {
      type: Date,
    },
    processedAt: {
      type: Date,
    },
    processedBy: {
      type: String,
      enum: ["system", "admin", "user"],
      default: "user",
    },
    cancellationCharge: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

cancellationSchema.index({ booking: 1 });

export default mongoose.model("Cancellation", cancellationSchema);
