const mongoose = require("mongoose");

const pulsaSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  provider: { type: String, required: true },
  number: { type: String, required: true },
  nominal: { type: Number, required: true },
  price: { type: Number, required: true },
  status: { type: String, default: "pending" }, // pending, sukses, gagal
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Pulsa", pulsaSchema);