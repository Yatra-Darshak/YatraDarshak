export const generateCancellationPDF = async (booking, refundAmount, cancellationCharge) => {
  const filePath = path.join("public/tickets", `${booking.providerBookingId}_CANCELLED.pdf`);
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream(filePath));

  doc.fontSize(18).text("❌ Booking Cancellation Slip", { align: "center" });
  doc.moveDown();
  doc.text(`PNR: ${booking.providerBookingId}`);
  doc.text(`Trip: ${booking.trip?.destination || "N/A"}`);
  doc.text(`Cancelled At: ${new Date().toLocaleString()}`);
  doc.text(`Refund Amount: ₹${refundAmount}`);
  doc.text(`Cancellation Charge: ₹${cancellationCharge}`);
  doc.text(`Status: Cancelled`);

  doc.end();
  return filePath;
};
