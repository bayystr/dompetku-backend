const Produk = require('../models/Produk');

const getAllProduk = async (req, res, next) => {
  try {
    const produk = await Produk.find({});
    res.json({ success: true, data: produk });
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllProduk };