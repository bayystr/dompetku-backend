const axios = require('axios');

const API_KEY = 'AvHWpmzBRJe3PlShQZj6dIyNiYF8cX';
const BASE_URL = 'https://api.virtualsim.id'; // ganti jika endpoint berbeda

exports.requestSimNumber = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/request?service=whatsapp&apikey=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw new Error('Gagal meminta nomor virtual SIM: ' + error.message);
  }
};

exports.getOtpCode = async (requestId) => {
  try {
    const response = await axios.get(`${BASE_URL}/otp?request_id=${requestId}&apikey=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw new Error('Gagal mengambil OTP: ' + error.message);
  }
};