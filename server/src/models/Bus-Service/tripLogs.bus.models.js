import mongoose, { Schema } from "mongoose";

const tripLogSchema = new Schema(
  {
    trip: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BusTrip",
      required: true,
    },
    action: {
      type: String,
      enum: ["CREATE", "UPDATE", "DELETE"],
      required: true,
    },
    performedBy: {
      type: mongoose.Schema.Types.ObjectId,
      // ref: "Admin",
      ref: "User",
      required: true,
    },
    oldValue: {
      type: Schema.Types.Mixed, // This field can hold any type of data (ie., can hold object or string) 
      default: null,
    },
    newValue: {
      type: Schema.Types.Mixed,
      default: null,
    },
  },
  { timestamps: true }
);

export default mongoose.model("TripLog", tripLogSchema);
