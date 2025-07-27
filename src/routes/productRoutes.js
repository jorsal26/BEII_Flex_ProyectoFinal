const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');
const auth = require('../middlewares/authMiddleware');
const role = require('../middlewares/roleMiddleware');

// Rutas para el modelo Product
router.get('/', auth, role(['admin', 'user']), controller.getAllProducts); // Obtener todos los productos
router.post('/', auth, role(['admin']), controller.createProduct); // Crear un nuevo producto
router.get('/:id', auth, role(['admin', 'user']), controller.getProductById); // Obtener un producto por ID
router.put('/:id', auth, role(['admin']), controller.updateProduct); // Actualizar un producto
router.delete('/:id', auth, role(['admin']), controller.deleteProduct); // Eliminar un producto por ID

module.exports = router;
