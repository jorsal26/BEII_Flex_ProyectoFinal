const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

//Solo admin puede listar usuarios (getAllUsers)
router.get('/', authMiddleware, roleMiddleware(['admin']), userController.getAllUsers); // Obtener todos los usuarios
router.get('/:id', authMiddleware, roleMiddleware(['admin', 'user']), userController.getUserById); // Obtener un usuario por ID
router.put('/:id', authMiddleware, roleMiddleware(['admin', 'user']), userController.updateUser); // Actualizar un usuario por ID

module.exports = router;
