const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    train: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Train",
      required: true,
    },

    journeyDate: { type: Date, required: true },

    fromStation: { type: String, required: true },
    toStation: { type: String, required: true },

    coachType: {
      type: String,
      enum: ["SL", "3A", "2A", "1A", "CC", "2S"],
      required: true,
    },

    passengers: [passengerSchema],

    totalAmount: { type: Number, required: true },

    bookingStatus: {
      type: String,
      enum: ["CONFIRMED", "PENDING", "CANCELLED", "WAITING"],
      default: "PENDING",
    },

    pnr: {
      type: String,
      unique: true,
    },

    payment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Payment",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
