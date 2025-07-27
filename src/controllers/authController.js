const bcrypt = require('bcrypt');
const UserDAO = require('../dao/UserDAO');
const UserDTO = require('../dtos/UserDTO');
const { sendRegistrationEmail } = require('../services/emailService');

// Registro (registerController)
const registerController = async (req, res) => {
  try {
    const { first_name, last_name, email, password, age } = req.body;

    if (!email || !password || !first_name || !last_name) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    const exists = await UserDAO.getByEmail(email);
    if (exists) return res.status(409).json({ error: 'Email ya registrado' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = await UserDAO.create({
      first_name,
      last_name,
      email,
      password: hashedPassword,
      age,
      role: 'user',
      verified: true
    });

    await sendRegistrationEmail(createdUser);

    return res.status(201).json({
      message: '✅ Usuario creado correctamente',
      user: new UserDTO(createdUser)
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Login (loginController)
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserDAO.findByEmail(email);
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ error: 'Credenciales incorrectas' });

    return res.status(200).json({ user: new UserDTO(user) });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Obtener la sesión del usuario logueado (getCurrentSession)
const getCurrentSession = async (req, res) => {
  const sessionData = await sessionDAO.getSessionData(req.user.id);
  if (!sessionData) return res.status(401).json({ message: 'Sesión no válida' });
  res.json(new SessionDTO(sessionData));
};

module.exports = { registerController, loginController, getCurrentSession };
