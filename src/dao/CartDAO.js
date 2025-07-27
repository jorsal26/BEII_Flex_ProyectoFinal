const Cart = require('../models/Cart');

// DAO para operaciones CRUD en el modelo Cart
class CartDAO {
  // Obtener el carrito del usuario logueado (getByUserId)
  async getByUserId(userId) {
    return Cart.findOne({ user: userId }).populate('items.product');
  }

  // Crear un nuevo carrito (create)
  async create(data) {
    return Cart.create(data);
  }

  // Actualizar un carrito (update)
  async update(id, data) {
    return Cart.findByIdAndUpdate(id, data, { new: true });
  }

  // Limpiar el carrito (clear)
  async clear(id) {
    return Cart.findByIdAndUpdate(id, { items: [], total: 0 }, { new: true });
  }

  // Obtener todos los carritos (getAll)
  async getAll() {
    return Cart.find();
  } 
}

module.exports = new CartDAO();
