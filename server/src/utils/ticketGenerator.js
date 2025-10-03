import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";

export const generateTicketPDF = async (booking, trip, passengers) => {
  if (!booking || !booking.providerBookingId) {
    throw new Error("Booking ID not found for ticket generation");
  }

  const ticketsDir = path.join(process.cwd(), "public", "tickets");
  if (!fs.existsSync(ticketsDir)) fs.mkdirSync(ticketsDir, { recursive: true });

  const fileName = `${booking.providerBookingId}.pdf`;
  const filePath = path.join(ticketsDir, fileName);

  const doc = new PDFDocument();
  const writeStream = fs.createWriteStream(filePath);
  doc.pipe(writeStream);

  doc.fontSize(18).text("🎟️ Bus Ticket", { align: "center" });
  doc.moveDown();
  doc.text(`PNR: ${booking.providerBookingId}`);
  doc.text(`Trip: ${trip.source} → ${trip.destination}`);
  doc.text(`Departure: ${new Date(trip.departureTime).toLocaleString()}`);
  doc.text(`Arrival: ${new Date(trip.arrivalTime).toLocaleString()}`);
  doc.text(`Seats: ${booking.seats.map((s) => s.seatNumber).join(", ")}`);
  doc.moveDown();
  doc.text("Passengers:");
  passengers.forEach((p, i) => {
    doc.text(
      `${i + 1}. ${p.name} (${p.age}/${p.gender}) - Seat: ${p.seatNumber}`
    );
  });

  doc.end();

  return new Promise((resolve, reject) => {
    writeStream.on("finish", () => resolve(`/tickets/${fileName}`));
    writeStream.on("error", reject);
  });
};

// import PDFDocument from "pdfkit";
// import fs from "fs";
// import path from "path";

// export const generateTicketPDF = async (booking, trip, passengers) => {
//   // Ensure booking object exists
//   if (!booking || !booking.providerBookingId) {
//     throw new Error("Booking ID not found for ticket generation");
//   }

//   // Ensure tickets directory exists
//   const ticketsDir = path.join(process.cwd(), "public", "tickets");
//   if (!fs.existsSync(ticketsDir)) {
//     fs.mkdirSync(ticketsDir, { recursive: true });
//   }

//   // Use providerBookingId as filename
//   const fileName = `${booking.providerBookingId}.pdf`;
//   const filePath = path.join(ticketsDir, fileName);

//   const doc = new PDFDocument();
//   const writeStream = fs.createWriteStream(filePath);
//   doc.pipe(writeStream);

//   // Ticket content
//   doc.fontSize(18).text("🎟️ Bus Ticket", { align: "center" });
//   doc.moveDown();
//   doc.text(`PNR: ${booking.providerBookingId}`);
//   doc.text(`Trip: ${trip.source} → ${trip.destination}`);
//   doc.text(`Departure: ${new Date(trip.departureTime).toLocaleString()}`);
//   doc.text(`Arrival: ${new Date(trip.arrivalTime).toLocaleString()}`);
//   doc.text(`Seats: ${booking.seats.map(s => s.seatNumber).join(", ")}`);
//   doc.moveDown();
//   doc.text("Passengers:");
//   passengers.forEach((p, i) => {
//     doc.text(`${i + 1}. ${p.name} (${p.age}/${p.gender}) - Seat: ${p.seatNumber}`);
//   });

//   doc.end();

//   // Return a promise that resolves when writing is finished
//   return new Promise((resolve, reject) => {
//     writeStream.on("finish", () => {
//       resolve(`/tickets/${fileName}`); // relative URL for frontend
//     });
//     writeStream.on("error", reject);
//   });
// };
