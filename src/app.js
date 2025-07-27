require('./config/envValidator'); //Valida antes de levantar Express

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const passport = require('passport');

//Configuración de passport (passport.config)
require('./config/passport.config')(passport);

const app = express();

//Middlewares globales (app.use)
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

//Importación de rutas (app.use)
const authRoutes = require('./routes/authRoutes'); //Rutas de autenticación
const sessionRoutes = require('./routes/sessionRoutes'); //Rutas de sesiones
const userRoutes = require('./routes/userRoutes'); //Rutas de usuarios
const productRoutes = require('./routes/productRoutes'); //Rutas de productos
const cartRoutes = require('./routes/cartRoutes'); //Rutas de carritos
const orderRoutes = require('./routes/orderRoutes'); //Rutas de órdenes

//Rutas base (app.use)
app.use('/api/auth', authRoutes); //Rutas de autenticación
app.use('/api/sessions', sessionRoutes); //Rutas de sesiones
app.use('/api/users', userRoutes); //Rutas de usuarios
app.use('/api/products', productRoutes); //Rutas de productos
app.use('/api/cart', cartRoutes); //Rutas de carritos
app.use('/api/orders', orderRoutes); //Rutas de órdenes

//Error 404 (app.use)
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

//Error 500 (app.use)
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ error: 'Error interno del servidor' });
});

//Ruta raíz (app.get)
app.get('/', (req, res) => {
  res.send('🛍️ Proyecto Final Backend II - Flex en funcionamiento');
});

module.exports = app;
