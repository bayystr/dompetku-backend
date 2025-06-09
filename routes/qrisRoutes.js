const express = require('express');
const router = express.Router();
const { generateQris, checkQrisStatus } = require('../controllers/qrisController');
const auth = require('../middlewares/authMiddleware');

router.post('/generate', auth, generateQris);
router.get('/status/:id', auth, checkQrisStatus);

module.exports = router;