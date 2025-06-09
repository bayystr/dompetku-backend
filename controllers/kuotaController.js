const axios = require("axios");

const orderKuota = async (req, res) => {
  const { phoneNumber, productCode } = req.body;

  if (!phoneNumber || !productCode) {
    return res.status(400).json({ message: "phoneNumber dan productCode wajib diisi" });
  }

  try {
    const API_KEY = "wYCo8ip5TcGMT6zxiPhJrrOBoHet18N83wweL";
    const API_ID = "ST03wYna";
    const SIGN = "f455c34e7b836e666851e5c01c0179fc";

    const response = await axios.post("https://vip-reseller.co.id/api/pulsa", null, {
      params: {
        key: API_KEY,
        action: "order",
        id: API_ID,
        service: productCode,
        phone: phoneNumber,
        sign: SIGN
      }
    });

    const result = response.data;

    if (result.result === false) {
      return res.status(400).json({ message: result.message || "Gagal melakukan pemesanan" });
    }

    res.status(200).json({
      message: "Pemesanan berhasil",
      data: result
    });
  } catch (error) {
    console.error("Gagal order kuota:", error.response?.data || error.message);
    res.status(500).json({ message: "Gagal memproses permintaan", error: error.response?.data || error.message });
  }
};

module.exports = { orderKuota };