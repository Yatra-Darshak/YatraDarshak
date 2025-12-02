const passengerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: {
    type: String,
    enum: ["MALE", "FEMALE", "OTHER"],
    required: true,
  },
  seatNumber: { type: String },
  coachNumber: { type: String },
});
