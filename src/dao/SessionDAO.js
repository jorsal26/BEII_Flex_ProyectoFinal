const User = require('../models/User');

// DAO para operaciones CRUD en el modelo Session
class SessionDAO {
  // Obtener los datos de la sesión (getSessionData)
  async getSessionData(userId) {
    const user = await User.findById(userId);
    if (!user) return null;
    return {
      id: user._id,
      email: user.email,
      name: user.name,
      role: user.role
    };
  }
}
module.exports = new SessionDAO();
