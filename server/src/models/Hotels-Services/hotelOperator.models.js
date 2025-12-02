import mongoose, { Schema } from "mongoose";

const hotelOperatorSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Operator name is required"],
      trim: true,
    },
    providerName: {
      type: String,
      required: [true, "Provider name is required"],
      enum: ["booking.com", "oyo", "makemytrip", "agoda"],
    },
    operatorId: {
      type: String,
      required: [true, "Operator ID is required"],
      trim: true,
    },
    displayName: {
      type: String,
      trim: true,
    },
    contactInfo: {
      phoneNumber: {
        type: String,
        required: true,
        trim: true,
        match: [/^[0-9]{10,15}$/, "Invalid phone number format"],
      },
      email: {
        type: String,
        required: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
      },
      address: {
        type: String,
        trim: true,
      },
      website: {
        type: String,
        trim: true,
      },
    },
    verified: {
      type: Boolean,
      default: false,
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
      phoneNumber: {
        type: String,
        trim: true,
        required: true,
        match: [/^[0-9]{10,15}$/, "Invalid phone number format"],
      },
      email: {
        type: String,
        trim: true,
        required: true,
        match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
      },
    },
    registrationId: {
      type: String,
      trim: true,
    },
    documents: {
      gstCertificate: { type: String, trim: true },
      licenseProof: { type: String, trim: true },
      idProof: { type: String, trim: true },
    },

    meta: {
      createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
      notes: { type: String, trim: true },
    },
  },
  { timestamps: true }
);

hotelOperatorSchema.index({ operatorId: 1, providerName: 1 }, { unique: true });
hotelOperatorSchema.index({ active: 1 });
hotelOperatorSchema.index({ verified: 1 });
hotelOperatorSchema.index({
  "contactInfo.email": 1,
  "contactInfo.phoneNumber": 1,
});

// Virtuals for cleaner API responses
hotelOperatorSchema.virtual("fullContactEmail").get(function () {
  return this.contactInfo?.email || this.supportContact?.email;
});

// Optional pre-save hooks for normalization
hotelOperatorSchema.pre("save", function (next) {
  if (this.name) this.name = this.name.trim();
  if (this.displayName) this.displayName = this.displayName.trim();
  next();
});

export default mongoose.model("HotelOperator", hotelOperatorSchema);
