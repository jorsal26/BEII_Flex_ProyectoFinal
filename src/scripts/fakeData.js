require('dotenv').config();
//import dotenv from 'dotenv';
//dotenv.config();

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('../models/User');
const Product = require('../models/Product');
const Cart = require('../models/Cart');
const Order = require('../models/Order');

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
};

const seedData = async () => {
  await connectDB();

  // 🧍 Usuarios
  const hashedPass = await bcrypt.hash('123456', 10);
  const users = await User.insertMany([
    { first_name: 'Juan', last_name: 'Pérez', email: 'juan@mail.com', age: 28, password: hashedPass, role: 'user' },
    { first_name: 'Ana', last_name: 'Gómez', email: 'ana@mail.com', age: 35, password: hashedPass, role: 'admin' },
  ]);

  // 📦 Productos
  const products = await Product.insertMany([
    { name: 'Zapatillas', description: 'Deportivas', price: 120, stock: 30, category: 'calzado' },
    { name: 'Mochila', description: 'Resistente al agua', price: 80, stock: 20, category: 'accesorios' },
    { name: 'Remera', description: '100% algodón', price: 35, stock: 50, category: 'ropa' }
  ]);

  // 🛒 Carritos
  const carts = await Cart.insertMany([
    {
      user: users[0]._id,
      items: [
        { product: products[0]._id, quantity: 1 },
        { product: products[2]._id, quantity: 2 }
      ],
      total: 190
    }
  ]);

  await User.findByIdAndUpdate(users[0]._id, { cart: carts[0]._id });

  // 🧾 Órdenes
  await Order.create({
    user: users[0]._id,
    items: [
      { product: products[0]._id, quantity: 1 },
      { product: products[2]._id, quantity: 2 }
    ],
    total: 190,
    status: 'pagado'
  });

  console.log('✅ Datos ficticios insertados correctamente');
  mongoose.connection.close();
};

seedData();