const express = require("express");
const router = express.Router();
const { orderPulsa } = require("../controllers/pulsaController");

// Endpoint: POST /api/pulsa/order
router.post("/order", orderPulsa);

module.exports = router;