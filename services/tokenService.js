// services/tokenService.js
const axios = require('axios');

const beliTokenPLN = async (nomorMeter, nominal) => {
  const apiKey = process.env.TOKEN_API_KEY; // Simpan API key di .env
  const apiUrl = 'https://api.pulsa-online.com/pln/token'; // Ganti sesuai provider

  try {
    const response = await axios.post(apiUrl, {
      meter_number: nomorMeter,
      amount: nominal
    }, {
      headers: { 'Authorization': `Bearer ${apiKey}` }
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Gagal membeli token PLN');
  }
};

module.exports = { beliTokenPLN };