import mongoose, { Schema } from "mongoose";

const hotelReviewSchema = new Schema(
  {
    hotel: {
      type: Schema.Types.ObjectId,
      ref: "Hotel",
      required: true,
      index: true,
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    booking: {
      type: Schema.Types.ObjectId,
      ref: "HotelBooking", // Optional: verify that user stayed before review
    },

    rating: {
      overall: { type: Number, required: true, min: 1, max: 5 },
      cleanliness: { type: Number, min: 1, max: 5 },
      comfort: { type: Number, min: 1, max: 5 },
      amenities: { type: Number, min: 1, max: 5 },
      location: { type: Number, min: 1, max: 5 },
      valueForMoney: { type: Number, min: 1, max: 5 },
    },

    title: {
      type: String,
      trim: true,
    },

    comment: {
      type: String,
      trim: true,
      required: true,
      maxlength: 2000,
    },

    images: [
      {
        url: String,
        caption: String,
      },
    ],

    helpfulVotes: {
      type: Number,
      default: 0,
    },

    verifiedStay: {
      type: Boolean,
      default: false,
    },

    status: {
      type: String,
      enum: ["visible", "hidden", "reported"],
      default: "visible",
    },

    reportedBy: [
      {
        user: { type: Schema.Types.ObjectId, ref: "User" },
        reason: String,
        reportedAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

// ✅ One review per user per booking (optional but recommended)
hotelReviewSchema.index({ user: 1, hotel: 1 }, { unique: true });

// ✅ Indexing for faster queries
hotelReviewSchema.index({ rating: -1 });
hotelReviewSchema.index({ createdAt: -1 });
hotelReviewSchema.index({ verifiedStay: 1 });

// ✅ Auto-calculate average rating hook (optional)
hotelReviewSchema.post("save", async function (doc, next) {
  const Review = this.constructor;
  const stats = await Review.aggregate([
    { $match: { hotel: doc.hotel } },
    { $group: { _id: "$hotel", avgRating: { $avg: "$rating.overall" }, totalReviews: { $sum: 1 } } },
  ]);

  if (stats.length > 0) {
    await mongoose.model("Hotel").findByIdAndUpdate(doc.hotel, {
      $set: {
        "ratings.average": stats[0].avgRating,
        "ratings.totalReviews": stats[0].totalReviews,
      },
    });
  }
  next();
});

export default mongoose.model("HotelReview", hotelReviewSchema);
