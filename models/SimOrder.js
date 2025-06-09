const mongoose = require("mongoose");

const simOrderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  country: { type: String, default: "indonesia" },
  service: { type: String, required: true }, // misal: whatsapp
  number: { type: String, required: true },
  otp: { type: String, default: "" },
  status: { type: String, default: "pending" }, // pending, sukses, gagal
  price: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("SimOrder", simOrderSchema);