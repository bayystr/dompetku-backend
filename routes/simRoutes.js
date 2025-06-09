const express = require('express');
const router = express.Router();
const { getNewSim, getOtp } = require('../controllers/simController');

router.get('/get-number', getNewSim); // /api/sim/get-number
router.get('/get-otp', getOtp);       // /api/sim/get-otp

module.exports = router;