exports.generateQrisCode = async (amount) => {
  // Simulasi QR Code sederhana
  const qrisCode = `QRIS-${Math.random().toString(36).substring(2, 10)}-${amount}`;
  return qrisCode;
};