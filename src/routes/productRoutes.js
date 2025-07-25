const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');
const auth = require('../middlewares/authMiddleware');
const role = require('../middlewares/roleMiddleware');

router.get('/', auth, role(['admin', 'user']), controller.getAllProducts);
router.post('/', auth, role(['admin']), controller.createProduct);

module.exports = router;