// services/PulsaService.js

const axios = require('axios');
const crypto = require('crypto');
require('dotenv').config();

const { API_KEY, API_ID, API_SIGN } = process.env;

/**
 * Membuat signature MD5 sesuai aturan VIP-RESELLER
 * @param {string} order_id
 * @returns {string} signature MD5
 */
function generateSignature(order_id) {
  return crypto
    .createHash('md5')
    .update(API_ID + API_KEY + order_id + API_SIGN)
    .digest('hex');
}

/**
 * Memesan produk seperti pulsa, kuota, atau token PLN
 * @param {string} serviceCode - Kode produk (misal: pulsa10000)
 * @param {string} phoneNumber - Nomor tujuan
 * @returns {Promise<Object>} - Hasil dari API VIP-RESELLER
 */
async function orderProduct(serviceCode, phoneNumber) {
  const order_id = `DOMPETKU-${Date.now()}`;
  const sign = generateSignature(order_id);

  const payload = {
    key: API_KEY,
    action: 'order',
    service: serviceCode,
    phone: phoneNumber,
    order_id,
    sign,
  };

  try {
    const response = await axios.post(
      'https://vip-reseller.co.id/api/game-feature',
      payload
    );
    return response.data;
  } catch (error) {
    return {
      success: false,
      message: 'Gagal terhubung ke API',
      error: error.message,
    };
  }
}

module.exports = {
  orderProduct,
};