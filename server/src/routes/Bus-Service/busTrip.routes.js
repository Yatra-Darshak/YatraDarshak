import express from "express";
import {
  createTrips,
  getTrips,
  getTripsByID,
  modifyTripByID,
  deleteTrip,
} from "../../controllers/Bus-Services/bus-trip.controllers.js";
import isAuthenticated from "../../middlewares/isAuthenticated.js";
import authorizeRoles from "../../middlewares/authorizeRoles.js";

const router = express.Router();

// Protect all booking routes (user must be logged in)
router.use(isAuthenticated);

router
  .route("/trips")
  .post(isAuthenticated, authorizeRoles("operator", "admin"), createTrips)
  .get(getTrips);

router
  .route("/trips/:id")
  .get(getTripsByID)
  .patch(isAuthenticated, authorizeRoles("operator", "admin"), modifyTripByID)
  .delete(isAuthenticated, authorizeRoles("operator", "admin"), deleteTrip);

export default router;
