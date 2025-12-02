const paymentSchema = new mongoose.Schema(
  {
    booking: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
      required: true,
    },

    amount: { type: Number, required: true },

    paymentStatus: {
      type: String,
      enum: ["SUCCESS", "FAILED", "PENDING"],
      default: "PENDING",
    },

    paymentMethod: {
      type: String,
      enum: ["CARD", "UPI", "NET_BANKING", "WALLET"],
      required: true,
    },

    transactionId: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Payment", paymentSchema);
