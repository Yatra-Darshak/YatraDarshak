import mongoose, { mongo, Schema } from "mongoose";

const hotelBookingSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    hotel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hotel",
      required: true, 
    },
    operator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "HotelOperator",
      required: true,
    },
    room: [
      {
        roomId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "HotelRoomType",
          required: true,
        },
        roomType: { type: String, required: true },
        bedType: { type: String },
        pricePerNight: {
          type: Number,
          required: true,
        },
        nights: {
          type: Number,
          required: true,
        },
      },
    ],
    bookingDetails: {
      checkInDate: {
        type: Date,
        required: true,
      },
      checkOutDate: {
        type: Date,
        required: true,
      },
      guests: {
        adults: { type: Number, default: 1, required: true },
        children: { type: Number, default: 0 },
      },
      specialRequests: {
        type: String,
        trim: true,
      },
    },
    bookingStatus: {
      type: String,
      enum: [
        "initiated",
        "confirmed",
        "checked_in",
        "checked_out",
        "cancelled",
        "refunded",
      ],
      default: "initiated",
    },
    payment: {
      method: {
        type: String,
        enum: ["credit_card", "debit_card", "upi", "net_banking", "wallet"],
        required: true,
      },
      transactionId: {
        type: String,
      },
      status: {
        type: String,
        enum: ["pending", "completed", "failed", "refunded"],
        default: "pending",
      },
      amount: {
        type: Number,
        required: true,
      },
      currency: {
        type: String,
        default: "INR",
      },
    },
    cancellation: {
      isCancelled: {
        type: Boolean,
        default: false,
      },
      reason: {
        type: String,
      },
      cancelledAt: {
        type: Date,
      },
      refundAmount: {
        type: Number,
        default: 0,
      },
    },
    meta: {
      bookedAt: { type: Date, default: Date.now },
      updatedAt: { type: Date, default: Date.now },
      bookedBy: {
        type: mongoose.Schema.Types.ObjectId,
        default: "User",
      },
      updatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        default: "Admin",
      },
    },
  },
  { timestamps: true }
);

// ✅ Indexes for performance
hotelBookingSchema.index({ user: 1 });
hotelBookingSchema.index({ bookingStatus: 1 });
hotelBookingSchema.index({ "bookingDetails.checkInDate": 1 });
hotelBookingSchema.index({ "bookingDetails.checkOutDate": 1 });
hotelBookingSchema.index({ "payment.status": 1 });
hotelBookingSchema.index({ "cancellation.isCancelled": 1 });

// ✅ Virtual field for total nights
hotelBookingSchema.virtual("totalNights").get(function () {
  if (this.bookingDetails.checkInDate && this.bookingDetails.checkOutDate) {
    const diff =
      (this.bookingDetails.checkOutDate - this.bookingDetails.checkInDate) /
      (1000 * 60 * 60 * 24);
    return Math.max(1, diff);
  }
  return 1;
});

// ✅ Pre-save hook to update timestamps
hotelBookingSchema.pre("save", function (next) {
  this.meta.updatedAt = new Date();
  next();
});

export default mongoose.model("HotelBooking", hotelBookingSchema);
