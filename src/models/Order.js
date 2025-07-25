const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: Number
    }
  ],
  total: Number,
  createdAt: { type: Date, default: Date.now },
  status: { type: String, default: 'pendiente' }
});

module.exports = mongoose.model('Order', orderSchema);