const userDAO = require('../dao/UserDAO');
const UserDTO = require('../dtos/UserDTO');

// Obtener todos los usuarios (getAllUsers)
const getAllUsers = async (req, res) => {
  const users = await userDAO.getAll();
  const dtos = users.map(user => new UserDTO(user));
  res.json(dtos);
};

// Actualizar un usuario (updateUser)
const updateUser = async (req, res) => {
  const user = await userDAO.update(req.params.id, req.body);
  res.json(new UserDTO(user));
};

// Obtener un usuario por ID (getUserById)
const getUserById = async (req, res) => {
  const user = await userDAO.getById(req.params.id);
  if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
  res.json(new UserDTO(user));
};

module.exports = { getAllUsers, updateUser, getUserById };
