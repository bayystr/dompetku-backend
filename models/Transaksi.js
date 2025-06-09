const mongoose = require('mongoose');

const transaksiSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  produkId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Produk', 
    required: true 
  },
  tujuan: { 
    type: String, 
    required: true 
  },
  harga: { 
    type: Number, 
    required: true 
  },
  status: { 
    type: String, 
    enum: ['pending', 'berhasil', 'gagal'], 
    default: 'pending' 
  },
  tanggal: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model('Transaksi', transaksiSchema);