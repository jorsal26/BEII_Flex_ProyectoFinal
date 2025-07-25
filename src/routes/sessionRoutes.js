// routes/sessionRoutes.js
const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/sessionController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/current', authMiddleware, sessionController.getCurrentSession);

module.exports = router;