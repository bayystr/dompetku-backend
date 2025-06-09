const { requestSimNumber, getOtpCode } = require('../services/esimApiService');
const Markup = require('../services/markupService'); // untuk markup otomatis

exports.getNewSim = async (req, res) => {
  try {
    const data = await requestSimNumber();

    // Tambahkan markup otomatis berdasarkan harga dasar
    const price = Markup.applyMarkup(data.price);

    res.json({
      number: data.number,
      requestId: data.request_id,
      price
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getOtp = async (req, res) => {
  try {
    const { requestId } = req.query;
    const data = await getOtpCode(requestId);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};