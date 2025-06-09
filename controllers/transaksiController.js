const Transaksi = require('../models/Transaksi');
const Produk = require('../models/Produk');
const { hitungMarkup } = require('../services/markupService');

const buatTransaksi = async (req, res, next) => {
  try {
    const { produkId, tujuan } = req.body;
    const produk = await Produk.findById(produkId);
    if (!produk) return res.status(404).json({ success: false, message: 'Produk tidak ditemukan' });

    const hargaJual = hitungMarkup(produk.hargaDasar);
    const transaksiBaru = new Transaksi({
      userId: req.user.id,
      produkId,
      tujuan,
      harga: hargaJual,
      status: 'pending'
    });

    await transaksiBaru.save();
    // Proses otomatis bisa dipicu dari sini nanti (misal call ke service API)
    res.status(201).json({ success: true, data: transaksiBaru });
  } catch (err) {
    next(err);
  }
};

const getTransaksiUser = async (req, res, next) => {
  try {
    const transaksi = await Transaksi.find({ userId: req.user.id }).populate('produkId');
    res.json({ success: true, data: transaksi });
  } catch (err) {
    next(err);
  }
};

const getSemuaTransaksi = async (req, res, next) => {
  try {
    const transaksi = await Transaksi.find().populate('produkId');
    res.json({ success: true, data: transaksi });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  buatTransaksi,
  getTransaksiUser,
  getSemuaTransaksi
};