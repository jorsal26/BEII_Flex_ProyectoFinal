const userDAO = require('../dao/UserDAO');
const UserDTO = require('../dtos/UserDTO');

const getAllUsers = async (req, res) => {
  const users = await userDAO.getAll();
  const dtos = users.map(user => new UserDTO(user));
  res.json(dtos);
};

const updateUser = async (req, res) => {
  const user = await userDAO.update(req.params.id, req.body);
  res.json(new UserDTO(user));
};

module.exports = { getAllUsers, updateUser };