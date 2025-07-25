// dao/SessionDAO.js
const User = require('../models/User');
class SessionDAO {
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