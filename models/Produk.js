const mongoose = require('mongoose');

const produkSchema = new mongoose.Schema({
  nama: { type: String, required: true },
  kategori: { type: String, required: true }, // pulsa, token, game, dll
  hargaDasar: { type: Number, required: true },
  hargaJual: { type: Number, required: true },
  kode: { type: String }, // kode unik dari provider, opsional
  aktif: { type: Boolean, default: true },
});

module.exports = mongoose.model('Produk', produkSchema);