const axios = require('axios');
require('dotenv').config();

const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

/**
 * Mengirim pesan ke Telegram
 * @param {string} message - Isi pesan yang akan dikirim
 */
const sendTelegramNotification = async (message) => {
  try {
    await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      chat_id: TELEGRAM_CHAT_ID,
      text: `📢 *Dompetku Notification*\n\n${message}`,
      parse_mode: 'Markdown'
    });
  } catch (error) {
    console.error('Gagal mengirim notifikasi ke Telegram:', error.message);
  }
};

module.exports = sendTelegramNotification;