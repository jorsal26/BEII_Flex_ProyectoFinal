// routes/sessionRoutes.js
const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/sessionController');
const authMiddleware = require('../middlewares/authMiddleware');

// Rutas para el modelo Session
router.get('/current', authMiddleware, sessionController.getCurrentSession); // Obtener la sesión del usuario logueado

module.exports = router;
