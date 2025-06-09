// routes/tokenRoutes.js
const express = require('express');
const router = express.Router();
const { beliToken } = require('../controllers/tokenController');

router.post('/beli', beliToken);

module.exports = router;