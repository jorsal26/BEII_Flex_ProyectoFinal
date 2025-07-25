const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

// 👇 Solo admin puede listar usuarios
router.get('/', authMiddleware, roleMiddleware(['admin']), userController.getAllUsers);

// 👇 Usuarios logueados pueden editar su propio perfil
router.put('/:id', authMiddleware, roleMiddleware(['admin', 'user']), userController.updateUser);

module.exports = router;