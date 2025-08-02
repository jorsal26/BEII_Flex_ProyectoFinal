const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middlewares/authMiddleware');
const role = require('../middlewares/roleMiddleware');

//Solo admin puede listar usuarios (getAllUsers)
router.get('/',    auth, role(['admin']), userController.getAllUsers); // Obtener todos los usuarios
router.get('/:id', auth, role(['admin', 'user']), userController.getUserById); // Obtener un usuario por ID
router.put('/:id', auth, role(['admin', 'user']), userController.updateUser); // Actualizar un usuario por ID

module.exports = router;
