const express = require('express');
const router = express.Router();
const {
  buatTransaksi,
  getTransaksiUser,
  getSemuaTransaksi
} = require('../controllers/transaksiController');
const { verifyToken } = require('../middlewares/authMiddleware');

// Endpoint untuk user
router.post('/', verifyToken, buatTransaksi);
router.get('/me', verifyToken, getTransaksiUser);

// Endpoint admin (lihat semua transaksi)
router.get('/', getSemuaTransaksi);

module.exports = router;