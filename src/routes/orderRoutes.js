const express = require('express');
const router = express.Router();
const controller = require('../controllers/orderController');
const auth = require('../middlewares/authMiddleware');
const role = require('../middlewares/roleMiddleware');

// Rutas para el modelo Order
router.get('/',    auth, role(['admin']), controller.getAllOrders); // Obtener todas las ordenes
router.get('/:oid', auth, role(['admin', 'user']), controller.getUserOrders); // Obtener las ordenes de un usuario

router.post('/', auth, role(['user', 'admin']), controller.createOrder); // Crear una nueva orden

router.post('/:oid/confirm', auth, role(['user', 'admin']), controller.confirmOrderController); // Confirmar una orden


module.exports = router;
