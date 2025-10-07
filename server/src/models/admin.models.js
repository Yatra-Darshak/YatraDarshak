import mongoose, { Schema } from "mongoose";

const adminSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    googleId: {
      type: String,
      unique: true,
      sparse: true,
    },
    adminID: {
      type: String,
      unique: true,
      trim: true,
    },
    role: {
      type: String,
      enum: ["SUPER_ADMIN", "OPERATOR_ADMIN", "SUPPORT_STAFF"],
      default: "OPERATOR_ADMIN",
    },
    contactInfo: {
      address: { type: String, trim: true },
      website: { type: String, trim: true },
    },
    operator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BusOperator",
      required: true,
    },
  },
  { timestamps: true }
);

adminSchema.index({ email: 1 });
adminSchema.index({ phoneNumber: 1 });

export default mongoose.model("Admin", adminSchema);
