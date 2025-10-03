export const sendEmail = async (to, subject, message, attachmentPath) => {
  console.log(`📧 Email sent to ${to}: ${subject}`);
  if (attachmentPath) console.log(`Attached PDF: ${attachmentPath}`);
  // integrate nodemailer/sendgrid here
};

export const sendSMS = async (to, message) => {
  console.log(`📱 SMS sent to ${to}: ${message}`);
  // integrate Twilio or MSG91 here
};
