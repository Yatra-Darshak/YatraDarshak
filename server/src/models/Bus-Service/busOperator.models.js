import mongoose, { Schema } from "mongoose";

const busOperatorSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    providerName: {
      type: String,
      required: true,
      enum: ["redbus", "abhibus", "busbud", "trawex"],
    },
    operatorId: {
      type: String,
      required: true,
      trim: true,
    },
    displayName: {
      type: String,
      trim: true,
    },
    contactInfo: {
      phone: { type: String, trim: true },
      email: { type: String, trim: true },
      address: { type: String, trim: true },
      website: { type: String, trim: true },
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    active: {
      type: Boolean,
      default: true,
    },
    supportContact: {
      contactNumber: {
        type: String,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        trim: true,
      }
    },
    licenseNumber: {
      type: String,
      required: true
    },
    registrationId: {
      type: String
    }
  },
  { timestamps: true }
);

// ✅ Unique index: prevent duplicate operator per provider
busOperatorSchema.index({ providerName: 1, operatorId: 1 }, { unique: true });
busOperatorSchema.index({ name: 1 });
busOperatorSchema.index({ active: 1 });

export default mongoose.model("BusOperator", busOperatorSchema);
