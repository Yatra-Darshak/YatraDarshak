import express from "express";
import {
  createBooking,
  getBookings,
  getBookingByID,
  cancelBooking,
} from "../controllers/booking.controllers";
import isAuthenticated from "../middlewares/isAuthenticated";

const router = express.Router();

// Protect all booking routes (user must be logged in)
router.use(isAuthenticated);

router.route("/bookings")
    .post(createBooking)
    .get(getBookings);
router.get("/bookings/:id", getBookingByID);
router.patch("/bookings/:id/cancel", cancelBooking);

export default router;
