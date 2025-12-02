import mongoose, { Schema } from "mongoose";
 
const hotelSchema = new Schema(
  {
    operator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "HotelOperator",
      required: true,
      index: true,
    },

    hotelName: {
      type: String,
      required: [true, "Hotel name is required"],
      trim: true,
    },

    hotelCode: {
      type: String,
      unique: true,
      required: [true, "Hotel code is required"],
      trim: true,
      index: true,
    },

    description: {
      type: String,
      trim: true,
      maxlength: 2000,
    },

    images: [
      {
        url: { type: String, required: true },
        caption: { type: String },
      },
    ],

    contactInfo: {
      phoneNumber: {
        type: String,
        trim: true,
        match: [/^[0-9]{10,15}$/, "Invalid phone number"],
      },
      email: {
        type: String,
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
      },
      managerName: {
        type: String,
        trim: true,
      },
      website: { type: String, trim: true },
    },

    location: {
      address: { type: String, required: true, trim: true },
      city: { type: String, required: true, trim: true },
      state: { type: String, trim: true },
      country: { type: String, default: "India", trim: true },
      pincode: { type: String, trim: true },
      coordinates: {
        lat: { type: Number },
        lng: { type: Number },
      },
      landMark: { type: String, trim: true },
    },

    propertyType: {
      type: String,
      enum: ["hotel", "resort", "villa", "hostel", "apartment", "homestay"],
      default: "hotel",
    },

    amenities: [
      {
        type: String,
        enum: [
          "wifi",
          "parking",
          "ac",
          "restaurant",
          "bar",
          "pool",
          "gym",
          "spa",
          "laundry",
          "room_service",
          "pets_allowed",
          "conference_hall",
        ],
      },
    ],

    policies: {
      checkIn: { type: String, default: "12:00 PM" },
      checkOut: { type: String, default: "11:00 AM" },
      support24X7: { type: Boolean, default: true },
      cancellationPolicy: { type: String, trim: true },
      refundPolicy: { type: String, trim: true },
      smokingAllowed: { type: Boolean, default: false },
      petsAllowed: { type: Boolean, default: false },
      extraBedPolicy: { type: Boolean, default: false },
    },

    rating: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "HotelReview",
      // average: { type: Number, min: 0, max: 5, default: 0 },
      // totalReviews: { type: Number, default: 0 },
    },

    rooms: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "HotelRoom",
      },
    ],

    active: {
      type: Boolean,
      default: true,
      index: true,
    },

    featured: {
      type: Boolean,
      default: false,
    },

    verified: {
      type: Boolean,
      default: false,
    },

    meta: {
      createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
      updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
      lastUpdated: { type: Date, default: Date.now },
    },
  },
  { timestamps: true }
);

// Indexes for better search & filtering
hotelSchema.index({ "location.city": 1 });
hotelSchema.index({ "location.state": 1 });
hotelSchema.index({ name: "text", description: "text" });
hotelSchema.index({ featured: 1, verified: 1 });
hotelSchema.index({ active: 1 });

// Virtual: full location string
hotelSchema.virtual("fullLocation").get(function () {
  return `${
    this.location.address
  }, ${this.location.city}, ${this.location.state || ""}`;
});

// Pre-save hook for consistency
hotelSchema.pre("save", function (next) {
  this.meta.lastUpdated = new Date();
  next();
});

export default mongoose.model("Hotel", hotelSchema);
