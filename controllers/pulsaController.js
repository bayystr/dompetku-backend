const Pulsa = require("../models/Pulsa");
const axios = require("axios");

// Atur markup otomatis
const markup = (hargaAsli) => {
  if (hargaAsli <= 15000) return hargaAsli + Math.floor(Math.random() * 301 + 200); // +200–500
  return hargaAsli + Math.floor(Math.random() * 501 + 500); // +500–1000
};

exports.orderPulsa = async (req, res) => {
  try {
    const { userId, provider, number, nominal } = req.body;

    // 1. Hit API pihak ketiga (simulasi)
    const hargaAsli = nominal * 100; // misalnya: 10 = 1000 (contoh saja)
    const hargaFinal = markup(hargaAsli);

    // 2. Simpan ke database
    const newOrder = await Pulsa.create({
      userId,
      provider,
      number,
      nominal,
      price: hargaFinal,
      status: "pending"
    });

    // 3. Kirim respons
    res.status(201).json({
      success: true,
      message: "Transaksi pulsa berhasil dibuat",
      data: newOrder
    });
  } catch (error) {
    console.error("Gagal order pulsa:", error);
    res.status(500).json({ success: false, message: "Terjadi kesalahan saat order pulsa" });
  }
};