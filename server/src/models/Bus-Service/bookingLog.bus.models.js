import mongoose, { Schema } from "mongoose";

const bookingLogSchema = new Schema(
  {
    booking: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
      required: true,
    },
    // status: String,
    prevStatus: {
      type: String,
      default: "initiated",
    },
    nextStatus: {
      type: String,
      enum: ["initiated", "confirmed", "cancelled", "failed"],
      default: "initiated",
    },
    message: String,
    action: {
      type: String, // e.g. "BOOKING_CREATED", "CANCELLATION_PROCESSED"
    },
    changedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    }, // system or admin
    source: {
      type: String,
      enum: ["system", "user", "admin", "provider"],
      default: "system",
    },
  },
  { timestamps: true }
);

export default mongoose.model("BookingLogs", bookingLogSchema);