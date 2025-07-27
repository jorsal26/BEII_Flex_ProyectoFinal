const jwt = require('jsonwebtoken');

// Middleware para verificar el token (authMiddleware)
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Token no proporcionado' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Agregar al objeto de la petición el usuario logueado (decoded) para acceder a sus datos en las rutas posteriores
    next();
  } catch (error) {
    res.status(403).json({ message: 'Token inválido o expirado' });
  }
};

module.exports = authMiddleware;
