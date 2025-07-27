const express = require('express');
const router = express.Router();
const controller = require('../controllers/orderController');
const auth = require('../middlewares/authMiddleware');
const role = require('../middlewares/roleMiddleware');

// Rutas para el modelo Order
router.post('/', auth, role(['user', 'admin']), controller.createOrder); // Crear una nueva orden
router.get('/', auth, role(['user', 'admin']), controller.getUserOrders); // Obtener las órdenes del usuario logueado

module.exports = router;
