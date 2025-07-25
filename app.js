// src/app.js

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const passport = require('passport');

// 🔐 Configuración de passport
require('./config/passport')(passport);

const app = express();

// 🌐 Middlewares globales
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

console.log('app.use');
// 📦 Importación de rutas
const authRoutes = require('./src/routes/authRoutes');
const sessionRoutes = require('./src/routes/sessionRoutes');
const userRoutes = require('./src/routes/userRoutes');
const productRoutes = require('./src/routes/productRoutes');
const cartRoutes = require('./src/routes/cartRoutes');
const orderRoutes = require('./src/routes/orderRoutes');

// 🚀 Rutas base
app.use('/api/auth', authRoutes);
app.use('/api/sessions', sessionRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);

// 🧠 Ruta raíz
app.get('/', (req, res) => {
  res.send('🛍️ API eCommerce Backend Modular en funcionamiento');
});

module.exports = app;
