import mongoose, { Schema } from "mongoose";

const passengerSchema = new Schema(
  {
    booking: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
      required: true,
    },
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true, enum: ["M", "F", "O"] },
    contact: { type: String, required: true },
    idType: { type: String }, // optional
    idNumber: { type: String },
    seatNumber: { type: String, required: true }, // linked seat
    fare: { type: Number },
    ticketNumber: { type: String, unique: true, index: true, sparse: true },
    isPrimary: { type: Boolean, default: false },
  },
  { timestamps: true }
);

passengerSchema.index({ booking: 1, seatNumber: 1 });

export default mongoose.model("Passengers", passengerSchema);
