const mongoose = require("mongoose");

const qrisSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  nominal: { type: Number, required: true },
  qrisImageUrl: { type: String, required: true },
  referenceId: { type: String, required: true },
  expiredAt: { type: Date, required: true },
  status: { type: String, default: "pending" }, // pending, paid, expired
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Qris", qrisSchema);