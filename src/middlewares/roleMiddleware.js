// Middleware para verificar el rol (roleMiddleware)
const roleMiddleware = (allowedRoles) => {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Acceso no autorizado' });
    }
    next();
  };
};

module.exports = roleMiddleware;
