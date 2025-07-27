const express = require('express');
const router = express.Router();
const controller = require('../controllers/cartController');
const auth = require('../middlewares/authMiddleware');

// Rutas para el modelo Cart
router.get('/', auth, controller.getCart); // Obtener el carro del usuario logueado
router.put('/:id', auth, controller.updateCart); // Actualizar el carro del usuario logueado
router.delete('/:id', auth, controller.clearCart); // Limpiar el carro del usuario logueado

//Solo admin puede listar carritos (getAllCarts)
router.get('/all', auth, controller.getAllCarts);

module.exports = router;
