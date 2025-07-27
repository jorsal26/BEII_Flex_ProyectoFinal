const mongoose = require('mongoose');

// Modelo para el modelo Product
const productSchema = new mongoose.Schema({
  name:       { type: String, required: true },
  description:{ type: String },
  price:      { type: Number, required: true },
  stock:      { type: Number, default: 0 },
  category:   { type: String },
  thumbnail:  { type: String } // URL imagen opcional
});

module.exports = mongoose.model('Product', productSchema);
