import mongoose, { Schema } from "mongoose";

const trainSchema = new Schema(
  {
    operator: {
      type: Schema.Types.ObjectId,
      ref: "TrainOperator",
      required: [true, "Train operator is required"],
      index: true,
    },

    trainNumber: {
      type: String,
      required: [true, "Train number is required"],
      trim: true,
      unique: true,
      immutable: true,
      uppercase: true,
      minlength: 3,
      maxlength: 10,
    },

    trainName: {
      type: String,
      required: [true, "Train name is required"],
      trim: true,
      unique: true,
    },

    trainType: {
      type: String,
      required: true,
      enum: ["EXPRESS", "SUPERFAST", "SHATABDI", "RAJDHANI", "LOCAL"],
      default: "EXPRESS",
      uppercase: true,
    },

    firstStation: {
      type: String,
      required: true,
      uppercase: true,
      trim: true,
    },

    lastStation: {
      type: String,
      required: true,
      uppercase: true,
      trim: true,
    },

    availableClasses: {
      type: [
        {
          type: String,
          enum: ["SL", "3A", "2A", "1A"],
          uppercase: true,
        },
      ],
      default: ["SL"],
    },

    runningDays: {
      type: [
        {
          type: String,
          enum: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
          uppercase: true,
        },
      ],
      required: true,
    },

    status: {
      type: String,
      enum: ["ACTIVE", "CANCELLED", "MAINTENANCE"],
      default: "ACTIVE",
      uppercase: true,
    },
  },
  { timestamps: true }
);

// Fast train lookup
trainSchema.index({ trainNumber: 1 });

// Single text index (MongoDB allows ONLY ONE)
trainSchema.index({
  trainName: "text",
  firstStation: "text",
  lastStation: "text",
});

// Filter by operator + type
trainSchema.index({ operator: 1, trainType: 1 });

// Filter by train status
trainSchema.index({ status: 1 });

// Source → Destination optimized query
trainSchema.index({ firstStation: 1, lastStation: 1 });

// Running days search
trainSchema.index({ runningDays: 1 });

export default mongoose.model("Train", trainSchema);
