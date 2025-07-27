const jwt = require('jsonwebtoken');

//Generar token (generateToken)
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role }, // 👈 Incluimos el rol
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
};

module.exports = generateToken;
