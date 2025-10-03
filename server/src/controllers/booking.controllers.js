import asyncHandler from "express-async-handler";
import mongoose from "mongoose";
import Booking from "../models/Bus-Service/booking.bus.models.js";
import BusTrip from "../models/Bus-Service/busTrip.models.js";
import Passenger from "../models/Bus-Service/passengers.bus.models.js";
import Payment from "../models/Bus-Service/payment.bus.models.js";
import Cancellation from "../models/Bus-Service/cancellation.bus.models.js";
import BookingLog from "../models/Bus-Service/bookingLog.bus.models.js";
import { nanoid } from "nanoid"; // for unique booking reference
import path from "path";
import fs from "fs";

import { generateTicketPDF } from "../utils/ticketGenerator.js";
import { sendEmail, sendSMS } from "../utils/notification.js";

import { generateCancellationPDF } from "../utils/generateCancellationPDF.js";

// ================= CREATE BOOKING =================
export const createBooking = asyncHandler(async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { trip, passengers, seats, boardingPoint, droppingPoint, payment } =
      req.body;

    if (!trip || !seats || !boardingPoint || !droppingPoint) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields" });
    }

    // check if the trip exists
    const tripDoc = await BusTrip.findById(trip).session(session);
    if (!tripDoc) {
      await session.abortTransaction();
      session.endSession();
      return res
        .status(404)
        .json({ success: false, message: "Bus trip not found" });
    }

    // Seat availability check
    if (seats.length > tripDoc.availableSeats) {
      await session.abortTransaction();
      session.endSession();
      return res
        .status(400)
        .json({ success: false, message: "Not enough seats available" });
    }

    // Duplicate seat check
    const alreadyBookedSeats = await Booking.findOne({
      trip,
      "seats.seatNumber": { $in: seats.map((s) => s.seatNumber) },
      status: { $in: ["initiated", "confirmed"] },
    }).session(session);

    if (alreadyBookedSeats) {
      await session.abortTransaction();
      session.endSession();
      return res
        .status(400)
        .json({ success: false, message: "Some seats are already booked" });
    }

    // Calculate total fare
    const finalFare = seats.reduce(
      (sum, seat) => sum + (seat.fare || tripDoc.fare.baseFare),
      0
    );

    // Generate unique booking reference
    const bookingReference = `PNR-${nanoid(8).toUpperCase()}`;

    // Create Booking
    const bookingArr = await Booking.create(
      [
        {
          user: req.user._id,
          trip,
          seats,
          boardingPoint,
          droppingPoint,
          status: "initiated",
          bookedAt: new Date(),
          totalFare: { finalFare, discount: 0 },
          paymentStatus: "pending",
          providerBookingId: bookingReference,
        },
      ],
      { session }
    );
    const booking = bookingArr[0];

    // Save passengers with unique ticketNumber
    if (passengers && passengers.length) {
      await Passenger.insertMany(
        passengers.map((p) => ({
          ...p,
          booking: booking._id,
          fare: p.fare || tripDoc.fare.baseFare,
          seatNumber: p.seatNumber,
          ticketNumber: `TICKET-${nanoid(6).toUpperCase()}`, // unique ticket number
        })),
        { session }
      );
    }

    // Create Payment
    let paymentDoc = null;
    if (payment) {
      paymentDoc = (
        await Payment.create(
          [
            {
              booking: booking._id,
              amount: finalFare,
              currency: "INR",
              method: payment.method,
              status: "pending",
              transactionId: payment.transactionId || `TXN-${Date.now()}`,
            },
          ],
          { session }
        )
      )[0];

      // Update booking latestPayment
      booking.latestPayment = paymentDoc._id;
      await booking.save({ session });
    }

    // Update trip availableSeats
    tripDoc.availableSeats -= seats.length;
    await tripDoc.save({ session });

    // Create booking log
    await BookingLog.create(
      [
        {
          booking: booking._id,
          prevStatus: "not_confirmed",
          nextStatus: "initiated",
          message: "Booking initiated",
          changedBy: req.user._id,
          source: "user",
        },
      ],
      { session }
    );

    // Generate ticket PDF (async util)
    const ticketURL = await generateTicketPDF(booking, tripDoc, passengers);
    // const ticketURL = await generateTicketPDF({
    //   booking,
    //   trip: tripDoc,
    //   passengers,
    //   user: req.user,
    // });

    booking.ticketURL = ticketURL;
    booking.status = "confirmed";
    await booking.save({ session });

    await session.commitTransaction();
    session.endSession();

    // Send notifications
    const emailMsg = `
      Dear ${req.user.fullname || "Passenger"},
      Your booking (${bookingReference}) is confirmed.
      Trip: ${tripDoc.source} → ${tripDoc.destination}
      Date: ${new Date(tripDoc.departureTime).toLocaleString()}
      Seats: ${seats.map((s) => s.seatNumber).join(", ")}
      Download Ticket: ${ticketURL}
    `;

    const smsMsg = `Booking ${bookingReference} confirmed. Trip: ${
      tripDoc.source
    }→${tripDoc.destination}, Seats: ${seats
      .map((s) => s.seatNumber)
      .join(", ")}. Ticket: ${ticketURL}`;

    await sendEmail(req.user.email, "Booking Confirmation", emailMsg);
    await sendSMS(req.user.phonenumber, smsMsg);

    // Populate booking for response
    const populatedBooking = await Booking.findById(booking._id)
      .populate("trip")
      .populate("passengers")
      .populate("latestPayment")
      .populate("cancellation");

    res.status(201).json({
      success: true,
      message: "Booking confirmed & ticket sent",
      data: populatedBooking,
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    res.status(500).json({ success: false, message: error.message });
  }
});

// ================= GET BOOKINGS =================
export const getBooking = asyncHandler(async (req, res) => {
  const { status, page = 1, limit = 10, trip } = req.query;

  const query = { user: req.user._id };
  if (status) query.status = status;
  if (trip) query.trip = trip;

  const total = await Booking.countDocuments(query);

  const bookings = await Booking.find(query)
    .populate("trip")
    .populate("passengers")
    .populate("latestPayment")
    .populate("cancellation")
    .skip((parseInt(page, 10) - 1) * parseInt(limit, 10))
    .limit(parseInt(limit, 10))
    .sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    total,
    page: parseInt(page, 10),
    pages: Math.ceil(total / parseInt(limit, 10)),
    count: bookings.length,
    data: bookings,
  });
});

// ================= GET BOOKING BY ID =================
export const getBookingByID = asyncHandler(async (req, res) => {
  const includeLogs = req.query.includeLogs === "true";
  const bookingId = req.params.id; // ✅ match route param

  let bookingQuery = Booking.findOne({
    _id: bookingId,
    user: req.user._id,
  })
    .populate("trip")
    .populate("passengers") // will work with virtual
    .populate("latestPayment")
    .populate("cancellation");

  if (includeLogs) bookingQuery = bookingQuery.populate("logs");

  const booking = await bookingQuery;

  if (!booking) {
    return res
      .status(404)
      .json({ success: false, message: "Booking not found" });
  }

  res.status(200).json({ success: true, data: booking });
});

// ================= CANCEL BOOKING =================
const processRefund = async (paymentId, amount) => {
  console.log(
    `Refund requested for paymentId: ${paymentId}, amount: ${amount}`
  );
  return { success: true, refundTransactionId: `REF-${Date.now()}` };
};

// ================= CANCEL BOOKING WITH REFUND & NOTIFICATION =================
export const cancelBooking = asyncHandler(async (req, res) => {
  const bookingId = req.params.id; // ✅ match route param
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const booking = await Booking.findOne({
      _id: bookingId,
      user: req.user._id,
    })
      .populate("trip")
      .populate("latestPayment")
      .session(session);

    if (!booking) {
      await session.abortTransaction();
      session.endSession();
      return res
        .status(404)
        .json({ success: false, message: "Booking not found" });
    }

    if (!["initiated", "confirmed"].includes(booking.status)) {
      await session.abortTransaction();
      session.endSession();
      return res
        .status(400)
        .json({ success: false, message: "Booking cannot be cancelled" });
    }

    let refundAmount = 0;
    let cancellationCharge = 0;

    if (booking.trip?.isRefundable && booking.latestPayment?.status === "success") {
      cancellationCharge = (booking.totalFare.finalFare * 10) / 100;
      refundAmount = booking.totalFare.finalFare - cancellationCharge;

      const refundResult = await processRefund(
        booking.latestPayment._id,
        refundAmount
      );
      if (refundResult.success) {
        booking.latestPayment.status = "refunded";
        booking.latestPayment.refundTransactionId =
          refundResult.refundTransactionId;
        await booking.latestPayment.save({ session });
      }
    }

    const reason = req.body?.reason || req.query.reason || "User requested cancellation";

    const cancellation = await Cancellation.create(
      [
        {
          booking: booking._id,
          status: "processed",
          reason,
          refundAmount,
          cancellationCharge,
          requestedAt: new Date(),
          processedAt: new Date(),
          processedBy: "system",
        },
      ],
      { session }
    );

    booking.status = "cancelled";
    booking.cancellation = cancellation[0]._id;

    if (booking.trip) {
      booking.trip.availableSeats += booking.seats.length;
      await booking.trip.save({ session });
    }

    await booking.save({ session });

    await BookingLog.create(
      [
        {
          booking: booking._id,
          prevStatus: "confirmed",
          nextStatus: "cancelled",
          message: "Booking cancelled and refund processed",
          changedBy: req.user._id,
          source: "user",
          action: "CANCELLATION_PROCESSED",
        },
      ],
      { session }
    );

    await session.commitTransaction();
    session.endSession();

    // Notifications
    const userEmail = req.user.email || "user@example.com";
    const userPhone = req.user.phonenumber || "0000000000";
    const msg = `Your booking ${booking.providerBookingId} has been cancelled. Refund Amount: ₹${refundAmount}`;
    await sendEmail(userEmail, "Booking Cancelled & Refund Processed", msg);
    await sendSMS(userPhone, msg);

    const populatedBooking = await Booking.findById(booking._id)
      .populate("trip")
      .populate("passengers")
      .populate("latestPayment")
      .populate("cancellation");

    res.status(200).json({ success: true, data: populatedBooking });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    res.status(500).json({ success: false, message: error.message });
  }
});

