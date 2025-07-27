const express = require('express');
const passport = require('passport');
const router = express.Router();
const user = require('../models/User');
const generateToken = require('../utils/generateToken');
const { registerController, logoutController } = require('../controllers/authController');

// Registro (registerController)
router.post('/register', registerController);


// Login (loginController)
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err || !user) return res.status(401).json({ message: info.message });
    const token = generateToken(user);
    res.json({ token });
  })(req, res, next);
});

router.get('/isLoggedIn', (req, res) => {
  res.json({ isLoggedIn: req.isAuthenticated() });
});

router.get('/isAdmin', (req, res) => {
  res.json({ isAdmin: req.user.role === 'admin' });
});

router.get('/isUser', (req, res) => {
  res.json({ isUser: req.user.role === 'user' });
});

router.get('/isGuest', (req, res) => {
  res.json({ isGuest: req.user.role === 'guest' });
});

router.get('/isVerified', (req, res) => {
  res.json({ isVerified: req.user.verified });
});

router.get('/isNotVerified', (req, res) => {
  res.json({ isNotVerified: !req.user.verified });
});

router.get('/isNotAdmin', (req, res) => {
  res.json({ isNotAdmin: req.user.role !== 'admin' });
});

router.get('/isNotUser', (req, res) => {
  res.json({ isNotUser: req.user.role !== 'user' });
});

router.get('/isNotGuest', (req, res) => {
  res.json({ isNotGuest: req.user.role !== 'guest' });
});

module.exports = router;
