const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');
const auth = require('../middlewares/authMiddleware');
const role = require('../middlewares/roleMiddleware');

// Rutas para el modelo Product
router.get('/', auth, role(['admin', 'user']), controller.getAllProducts); // Obtener todos los productos
router.get('/:pid', auth, role(['admin', 'user']), controller.getProductById); // Obtener un producto por ID

router.post('/', auth, role(['admin']), controller.createProduct); // Crear un nuevo producto
router.put('/:pid', auth, role(['admin']), controller.updateProduct); // Actualizar un producto por ID
router.delete('/:pid', auth, role(['admin']), controller.deleteProduct); // Eliminar un producto por ID

module.exports = router;

