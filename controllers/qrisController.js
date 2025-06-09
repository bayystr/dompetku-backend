const axios = require('axios');
const crypto = require('crypto');

const { QRIS_API_KEY, QRIS_MERCHANT_ID } = process.env;

exports.generateQRIS = async (req, res) => {
  try {
    const { amount, orderId } = req.body;

    if (!amount || !orderId) {
      return res.status(400).json({ message: 'amount dan orderId wajib diisi.' });
    }

    const payload = {
      amount,
      merchant_id: QRIS_MERCHANT_ID,
      order_id: orderId,
    };

    // Misal signature menggunakan SHA256
    const sign = crypto.createHash('sha256')
      .update(`${QRIS_API_KEY}${orderId}${amount}`)
      .digest('hex');

    const response = await axios.post('https://api.qrisprovider.com/qris/generate', payload, {
      headers: {
        'Authorization': `Bearer ${QRIS_API_KEY}`,
        'X-Signature': sign,
        'Content-Type': 'application/json',
      },
    });

    res.json({
      success: true,
      data: response.data,
    });
  } catch (error) {
    console.error('QRIS error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Gagal membuat QRIS',
    });
  }
};