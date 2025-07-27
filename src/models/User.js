const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Modelo para el modelo User
const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name:  { type: String, required: true },
  email:      { type: String, required: true, unique: true },
  age:        { type: Number },
  password:   { type: String, required: true },
  cart:       { type: mongoose.Schema.Types.ObjectId, ref: 'Cart' },
  role:       { type: String, default: 'user' }
});

// Hashea la contraseña antes de guardarla
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Verifica si la contraseña es correcta
userSchema.methods.matchPassword = function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
