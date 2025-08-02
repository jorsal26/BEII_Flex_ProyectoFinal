const express = require('express');
const router = express.Router();
const controller = require('../controllers/cartController');
const auth = require('../middlewares/authMiddleware');
const role = require('../middlewares/roleMiddleware');

// Rutas para el modelo Cart
router.get('/', auth, role(['admin']), controller.getAllCarts); // Obtener todos los carritos
router.get('/', auth, role(['admin']), controller.getCart); // Obtener el carro del usuario logueado

router.post('/', auth, role(['admin', 'user']), controller.createCart); // Crear un nuevo carrito
router.put('/:cartId', auth, role(['admin', 'user']), controller.updateCart); // Actualizar el carro del usuario logueado
router.delete('/:cartId/clear', auth, role(['admin', 'user']), controller.clearCart); // Borrar el carro del usuario logueado

router.post('/:cartId/products/:productId', auth, role(['admin', 'user']), controller.addToCart); // Agregar un producto al carrito
router.delete('/:cartId/products/:productId', auth, role(['admin', 'user']), controller.removeFromCart); // Eliminar un producto del carrito

module.exports = router;
