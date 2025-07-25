// controllers/sessionController.js
const sessionDAO = require('../dao/SessionDAO');
const SessionDTO = require('../dtos/SessionDTO');

const getCurrentSession = async (req, res) => {
  const sessionData = await sessionDAO.getSessionData(req.user.id);
  if (!sessionData) return res.status(401).json({ message: 'Sesión no válida' });
  res.json(new SessionDTO(sessionData));
};

module.exports = { getCurrentSession };