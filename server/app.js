// app.js

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// middlewares
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173"], // change if frontend runs somewhere else
    credentials: true, // allow cookies
  })
);
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// custom middlewares
app.use((req, res, next) => {
  console.log(`Incoming Request: ${req.method} ${req.url}`);
  next();
});

// routes import
import authRoutes from "./src/routes/authUser.routes.js";
import authAdmin from "./src/routes/authAdmin.routes.js";

// bus routes
import busBooking from "./src/routes/booking.routes.js";
import busTrips from "./src/routes/Bus-Service/busTrip.routes.js";

// hotel routes
import hotelBooking from "./src/routes/Hotels-Services/booking.hotel.routes.js";
import hotels from "./src/routes/Hotels-Services/hotel.routes.js";
import hotelRooms from "./src/routes/Hotels-Services/room.hotel.routes.js";
import hotelPayment from "./src/routes/Hotels-Services/payment.hotel.routes.js";
import hotelReview from "./src/routes/Hotels-Services/review.hotel.routes.js";
import hotelLogs from "./src/routes/Hotels-Services/hotelLogs.routes.js";

// routes usage
app.use("/api/auth", authRoutes);
app.use("/api/admin/auth", authAdmin);

// bus service
app.use("/api", busBooking);
app.use("/api", busTrips);

// hotel service
app.use(
  "/api/hotel",
  hotelBooking,
  hotels,
  hotelReview,
  hotelRooms,
  hotelPayment,
  hotelLogs
);

// exporting
export { app };
