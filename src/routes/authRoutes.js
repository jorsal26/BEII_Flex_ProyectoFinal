const express = require('express');
const passport = require('passport');
const router = express.Router();
const user = require('../models/User');
const generateToken = require('../utils/generateToken');
const { registerController } = require('../controllers/authController');

// Registro
console.log('router.post');
router.post('/register', registerController);
/*
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = new User({ name, email, password });
    await user.save();
    const token = generateToken(user);
    res.status(201).json({ token });
  } catch (err) {
    res.status(400).json({ message: 'Registro fallido', error: err.message });
  }
});
*/
// Login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err || !user) return res.status(401).json({ message: info.message });
    const token = generateToken(user);
    res.json({ token });
  })(req, res, next);
});

module.exports = router;