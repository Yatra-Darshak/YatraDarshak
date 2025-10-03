import mongoose, { Schema } from "mongoose";
 
const busTripSchema = new Schema( 
    {
        operator: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "BusOperator",
            required: true
        },
        routeId: {
            type: String,
            required: true,
            index: true,
            unique: true,
        },
        providerTripId: {
            type: String,
            required: true,
            index: true,
            unique: true,
        }, 
        vehicleRegNumber: {
            type: String,
            required: true
        },
        source: {
            type: String,
            required: true,
            index: true
        },
        destination: {
            type: String,
            required: true,
            index: true
        },
        departureTime: {
            type: Date,
            required: true,
            index: true
        },
        arrivalTime: {
            type: Date,
            required: true
        },
        durationMinutes: {
            type: Number
        },
        busType: {
            type: String,
            trim: true,
            enum: ["AC", "Non-AC", "Sleeper", "Seater"]
        },
        boardingPoints: [{
            location: String,
            time: Date,
            landmark: String
        }],
        droppingPoints: [
            {
                location: String,
                time: Date,
                landmark: String
            }
        ],
        fare: {
            currency: {
                type: String,
                default: "INR"
            },
            baseFare: {
                type: Number,
                required: true,
            },
            serviceCharge: {
                type: Number,
                default: 0,
            },
            tax: {
                type: Number,
                default: 0,
            },
            totalAmount: {
                type: Number,
                required: true
            },
        },
        availableSeats: {
            type: Number,
            required: true,
        },
        seatLayout: {
            type: Object // JSON blob for seat map (rows, columns, status)
        }, 
        seatType: {
            type: String,
            enum: ["upper_deck", "lower_deck", "AC Sleeper", "Non-AC Sleeper", "seater"],
        },
        amenities: [{
            type: String,
            // e.g. "WiFi", "Charging Point", "Blanket", "Water Bottle"
        }],
        cancellationPolicy: {
            type: String // can hold provider policy text or JSON
        },
        active: {
            type: Boolean,
            default: true
        },
        isRefundable: {
            type: Boolean,
            default: false
        }
    },
    {timestamps: true}
)

busTripSchema.index({ source: 1, destination: 1, departureTime: 1 })

export default mongoose.model("BusTrip", busTripSchema);
