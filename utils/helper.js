// utils/helper.js

/**
 * Mengubah angka menjadi format mata uang Rupiah
 * @param {number|string} number
 * @returns {string}
 */
function toRupiah(number) {
  return `Rp ${parseInt(number, 10).toLocaleString('id-ID')}`;
}

/**
 * Validasi nomor HP Indonesia (awalan 08, dan panjang 10–13 digit)
 * @param {string} phone
 * @returns {boolean}
 */
function isValidPhone(phone) {
  return /^08[0-9]{8,11}$/.test(phone);
}

/**
 * Membuat ID pesanan unik berbasis waktu
 * @returns {string}
 */
function generateOrderId() {
  const timestamp = Date.now();
  const random = Math.floor(1000 + Math.random() * 9000); // 4 digit random
  return `DOMPETKU-${timestamp}-${random}`;
}

/**
 * Hitung markup otomatis berdasarkan harga awal
 * @param {number} price
 * @returns {number}
 */
function calculateMarkup(price) {
  if (price <= 15000) {
    return price + 300; // markup 200–500
  } else {
    return price + 1000; // markup tetap 1000
  }
}

module.exports = {
  toRupiah,
  isValidPhone,
  generateOrderId,
  calculateMarkup,
};