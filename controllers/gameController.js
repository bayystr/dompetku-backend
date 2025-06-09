const axios = require('axios');
require('dotenv').config();

const { GAME_API_KEY } = process.env;

exports.topUpGame = async (req, res) => {
  try {
    const { gameId, userId, zoneId, nominal } = req.body;

    if (!gameId || !userId || !nominal) {
      return res.status(400).json({ success: false, message: 'gameId, userId, dan nominal wajib diisi.' });
    }

    const payload = {
      game_id: gameId,
      user_id: userId,
      zone_id: zoneId || '', // opsional tergantung game
      nominal: nominal,
      api_key: GAME_API_KEY,
    };

    const response = await axios.post('https://api.topupgameservice.com/v1/order', payload);

    res.json({
      success: true,
      data: response.data,
    });
  } catch (err) {
    console.error('Top Up Game Error:', err.message);
    res.status(500).json({ success: false, message: 'Gagal melakukan top-up game.' });
  }
};