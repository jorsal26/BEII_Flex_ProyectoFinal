require('dotenv').config();
const mongoose = require('mongoose');

const User = require('../models/User');
const Product = require('../models/Product');
const Cart = require('../models/Cart');
const Order = require('../models/Order');

// Limpiar la base de datos
const resetData = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  await User.deleteMany({});
  await Product.deleteMany({});
  await Cart.deleteMany({});
  await Order.deleteMany({});

  console.log('🧹 Base de datos limpiada');
  mongoose.connection.close();
};

resetData();
