import mongoose from "mongoose";

const transactionLogSchema = new mongoose.Schema(
  {
    apiProvider: { type: String },
    endpoint: { type: String },
    request: { type: Object },
    response: { type: Object },
    statusCode: { type: Number },
    responseTime: { type: Number }, // ms
    success: { type: Boolean },
    correlationId: { type: String, index: true }, // for tracing per booking/transaction
  },
  { timestamps: true }
);

export default mongoose.model("TransactionLog", transactionLogSchema);

