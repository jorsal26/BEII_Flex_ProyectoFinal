const User = require('../models/User');

class UserDAO {
  getById(id) { return User.findById(id); }
  getByEmail(email) { return User.findOne({ email }); }
  create(data) { return User.create(data); }
  update(id, data) { return User.findByIdAndUpdate(id, data, { new: true }); }
  delete(id) { return User.findByIdAndDelete(id); }
  getAll() { return User.find(); }
}

module.exports = new UserDAO();