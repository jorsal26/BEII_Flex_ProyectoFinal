const express = require('express');
const router = express.Router();
const controller = require('../controllers/cartController');
const auth = require('../middlewares/authMiddleware');

router.get('/', auth, controller.getCart);
router.put('/:id', auth, controller.updateCart);

module.exports = router;