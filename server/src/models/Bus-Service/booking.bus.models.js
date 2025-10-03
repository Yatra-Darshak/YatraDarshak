import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    trip: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BusTrip",
      required: true,
      index: true,
    },
    providerBookingId: {
      type: String,
      index: true,
      unique: true,
      sparse: true,
    },
    seats: [
      {
        seatNumber: Number,
        seatID: String,
        fare: Number, // store actual paid fare per seat
      },
    ],
    boardingPoint: {
      location: { type: String, required: true },
      time: { type: Date, required: true },
      landmark: { type: String },
    },
    droppingPoint: {
      location: { type: String, required: true },
      time: { type: Date },
      landmark: { type: String },
    },
    status: {
      type: String,
      enum: ["initiated", "confirmed", "cancelled", "failed"],
      default: "initiated",
    },
    bookedAt: { type: Date, default: Date.now },
    ticketURL: { type: String }, // PDF/e-ticket link
    totalFare: {
      finalFare: { type: Number, default: 0 },
      discount: { type: Number, default: 0 },
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending",
    },
    latestPayment: { type: mongoose.Schema.Types.ObjectId, ref: "Payment" },
    cancellation: { type: mongoose.Schema.Types.ObjectId, ref: "Cancellation" },
  },
  { timestamps: true }
);

// In Booking model
bookingSchema.virtual("passengers", {
  ref: "Passengers", // name of the Passenger model
  localField: "_id",
  foreignField: "booking",
});
bookingSchema.set("toObject", { virtuals: true });
bookingSchema.set("toJSON", { virtuals: true });


bookingSchema.index({ user: 1, trip: 1, providerBookingId: 1 });

export default mongoose.model("Booking", bookingSchema);
