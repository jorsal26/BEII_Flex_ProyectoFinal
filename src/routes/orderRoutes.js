const express = require('express');
const router = express.Router();
const controller = require('../controllers/orderController');
const auth = require('../middlewares/authMiddleware');
const role = require('../middlewares/roleMiddleware');

router.post('/', auth, role(['user', 'admin']), controller.createOrder);

module.exports = router;