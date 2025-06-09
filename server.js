const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const kuotaRoutes = require("./routes/kuotaRoutes");
const pulsaRoutes = require("./routes/pulsaRoutes");

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Use routes
app.use("/api/kuota", kuotaRoutes);
app.use("/api/pulsa", pulsaRoutes);

// Koneksi MongoDB & Start server
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("Server jalan di port", process.env.PORT || 5000);
    });
  })
  .catch((err) => console.log(err));