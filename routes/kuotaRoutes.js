const express = require("express");
const router = express.Router();
const { orderKuota } = require("../controllers/kuotaController");

router.post("/order", orderKuota);

module.exports = router;