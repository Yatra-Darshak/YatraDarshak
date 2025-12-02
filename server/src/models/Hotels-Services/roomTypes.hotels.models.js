import { stat } from "fs";
import mongoose, { mongo, Schema } from "mongoose";
import { availableMemory } from "process";

const roomTypesSchema = new Schema(
  {
    hotel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hotel",
      required: true,
      trim: true,
    },

    operatorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "HotelOperator",
      required: true,
    },

    roomNumber: {
      type: String,
      trim: true,
      required: true,
    },

    roomType: {
      type: String,
      enum: [
        "single",
        "double",
        "twin",
        "suite",
        "deluxe",
        "family",
        "penthouse",
      ],
      required: true,
    },

    bedType: {
      type: String,
      enum: ["single", "double", "queen", "king", "twin", "bunk"],
      default: "double",
    },

    price: {
      basePrice: { type: String, required: true, trim: true },
      currency: { type: String, required: true, default: "INR" },
      discountedPrice: { type: Number, default: 0 },
      dynamicPricing: {
        enabled: { type: Boolean, default: false },
        seasonalFactor: { type: Number, default: 1 },
      },
    },

    capacity: {
      adults: { type: Number, default: false },
      children: { type: Number, default: 0 },
    },

    availability: {
      totalRoom: { type: Number, required: true },
      bookedRoom: { type: Number, default: 0 },
      isAvailable: { type: Boolean, default: true },
    },

    amenities: {
      type: String,
      enum: [
        "wifi",
        "ac",
        "tv",
        "minibar",
        "balcony",
        "bathtub",
        "room_service",
        "breakfast_included",
        "parking",
        "pet_friendly",
        "gym_access",
      ],
    },

    images: [
      {
        url: { type: String, required: true },
        publicID: { type: String }, // for cloudinary or s3 storage
      },
    ],

    description: {
      type: String,
      trim: true,
      maxLength: 500,
    },

    status: {
      type: String,
      enum: ["available", "maintenance", "booked", "unlisted"],
      default: "available",
    },

    ratings: {
      average: { type: Number, min: 0, max: 5, default: 0 },
      totalReviews: { type: Number, default: 0 },
    },

    meta: {
      createdBy: { type: Schema.Types.ObjectId, ref: "Admin" },
      updatedBy: { type: Schema.Types.ObjectId, ref: "Admin" },
      lastUpdated: { type: Date, default: Date.now },
    },
  },
  { timestamps: true }
);

roomTypesSchema.index({ hotel: 1, roomType: 1 }, { unique: true });
roomTypesSchema.index({ "price.basePrice": 1 });
roomTypesSchema.index({ status: 1 });
roomTypesSchema.index({ "availability.isAvailable": 1 });

// 🧩 Virtual field for computed values
roomTypesSchema.virtual("availableCount").get(function () {
  return this.availability.totalRooms - this.availability.bookedRooms;
});

export default mongoose.model("HotelRoomType", roomTypesSchema);
