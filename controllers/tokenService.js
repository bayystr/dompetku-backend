// controllers/tokenController.js
const { beliTokenPLN } = require('../services/tokenService');
const MarkupService = require('../services/markupService');
const Transaksi = require('../models/transaksi');

const beliToken = async (req, res) => {
  try {
    const { nomorMeter, nominal, userId } = req.body;

    const hargaJual = MarkupService.hitungMarkup(nominal);

    const result = await beliTokenPLN(nomorMeter, nominal);

    await Transaksi.create({
      userId,
      jenis: 'token_pln',
      data: {
        nomorMeter,
        nominal,
        hargaJual,
        token: result.token || null
      },
      status: result.status || 'pending'
    });

    res.json({ success: true, result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { beliToken };