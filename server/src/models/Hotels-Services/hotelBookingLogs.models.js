import mongoose, { Schema } from "mongoose";

const hotelBookingLogSchema = new Schema(
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
    },

    operator: {
      type: Schema.Types.ObjectId,
      ref: "HotelOperator",
    },

    action: {
      type: String,
      required: true,
      enum: [
        "created",
        "updated",
        "cancelled",
        "checked_in",
        "checked_out",
        "refunded",
        "payment_failed",
        "payment_success",
        "system_update",
        "admin_update",
      ],
    },

    details: {
      type: String,
      trim: true,
      default: "",
    },

    meta: {
      ipAddress: {
        type: String,
      },
      userAgent: {
        type: String,
      },
      performedBy: {
        type: Schema.Types.ObjectId,
        refPath: "meta.performedByModel", // dynamic ref (User or Admin)
      },
      performedByModel: {
        type: String,
        enum: ["User", "Admin"],
      },
    },

    previousData: {
      type: Object, // store snapshot before change
    },

    newData: {
      type: Object, // store updated snapshot
    },

    timestamp: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// ✅ Index for efficient audit trail queries
hotelBookingLogSchema.index({ action: 1, timestamp: -1 });
hotelBookingLogSchema.index({ "meta.performedBy": 1 });

// ✅ Auto-add timestamp and structured message
hotelBookingLogSchema.pre("save", function (next) {
  if (!this.timestamp) this.timestamp = new Date();
  next();
});

export default mongoose.model("HotelBookingLog", hotelBookingLogSchema);
