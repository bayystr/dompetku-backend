// middlewares/securityMiddleware.js
const rateLimit = require('express-rate-limit');
const TelegramNotifier = require('../utils/telegramNotifier');

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 menit
  max: 100,
  handler: (req, res) => {
    const ip = req.ip;
    TelegramNotifier.send(
      `🚨 Rate limit terpicu dari IP: ${ip}\nPath: ${req.originalUrl}`
    );
    res.status(429).json({ message: 'Terlalu banyak permintaan, coba lagi nanti.' });
  },
});

const detectAttack = (req, res, next) => {
  const ua = req.get('User-Agent') || '';
  const ip = req.ip;
  if (ua.includes('sqlmap') || ua.trim() === '') {
    TelegramNotifier.send(
      `🚨 Akses mencurigakan\nIP: ${ip}\nUA: ${ua}\nPath: ${req.originalUrl}`
    );
    return res.status(403).json({ message: 'Akses ditolak.' });
  }
  next();
};

module.exports = { limiter, detectAttack };