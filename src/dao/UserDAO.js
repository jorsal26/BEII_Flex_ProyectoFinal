const User = require('../models/User');

// DAO para operaciones CRUD en el modelo User
class UserDAO {
  getById(id) { return User.findById(id); } // Obtener un usuario por ID
  getByEmail(email) { return User.findOne({ email }); } // Obtener un usuario por email
  create(data) { return User.create(data); } // Crear un usuario
  update(id, data) { return User.findByIdAndUpdate(id, data, { new: true }); } // Actualizar un usuario
  delete(id) { return User.findByIdAndDelete(id); } // Eliminar un usuario
  getAll() { return User.find(); } // Obtener todos los usuarios
}

module.exports = new UserDAO();
