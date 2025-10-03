import express from "express";
import {
  createBooking,
  getBooking,
  getBookingByID,
  cancelBooking,
} from "../controllers/booking.controllers.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

// Protect all booking routes (user must be logged in)
router.use(isAuthenticated);

router.route("/bookings")
    .post(createBooking)
    .get(getBooking);
router.get("/bookings/:id", getBookingByID);
router.patch("/bookings/:id/cancel", cancelBooking);

export default router;
