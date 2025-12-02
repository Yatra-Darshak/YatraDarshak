const coachSchema = new mongoose.Schema({
  train: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Train",
    required: true,
  },

  coachType: {
    type: String,
    enum: ["SL", "3A", "2A", "1A", "CC", "2S"],
    required: true,
  },

  coachNumber: { type: String, required: true }, // Ex: "S5", "A1", "B3"

  totalSeats: { type: Number, required: true },
  availableSeats: { type: Number, required: true },
});

export default mongoose.model("Coach", coachSchema);

// const seatSchema = new mongoose.Schema({
//   coach: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Coach",
//     required: true,
//   },

//   seatNumber: { type: String, required: true }, // Ex: "12", "15A"
//   status: {
//     type: String,
//     enum: ["AVAILABLE", "BOOKED"],
//     default: "AVAILABLE",
//   },
// });

// export default mongoose.model("Seat", seatSchema);
