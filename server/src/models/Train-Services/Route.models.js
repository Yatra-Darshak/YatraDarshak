import mongoose, { Schema } from "mongoose";

const routeSchema = new Schema(
    {
        train: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Train",
            required: true,
        },
        stationCode: {
            type: String,
            required: true,
            trim: true,
            uppercase: true,
        },
        stationName: {
            type: String,
            required: true,
            uppercase: true,
            trim: true,
        },
        arrivalTime: {
            type: String,
            trim: true,
        },
        departureTime: {
            type: String,
            trim: true
        },
        daysCount: {
            type: Number,
            default: 1,
        },
        distanceFromStrat: {
            type: Number,
        },
    }
)

export default mongoose.model("Routes", routeSchema);

// const routeSchema = new mongoose.Schema({
//   train: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Train",
//     required: true,
//   },

//   stationCode: { type: String, required: true },
//   stationName: { type: String, required: true },

//   arrivalTime: { type: String },   // "10:25"
//   departureTime: { type: String }, // "10:30"
//   dayCount: { type: Number, default: 1 },

//   distanceFromStart: { type: Number }, // KM
//   platform: { type: Number },
//   stopNumber: { type: Number, required: true },
// });

// export default mongoose.model("Route", routeSchema);
