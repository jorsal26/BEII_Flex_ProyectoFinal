const Order = require('../models/Order');

// DAO para operaciones CRUD en el modelo Order
class OrderDAO {
  // Obtener las órdenes del usuario logueado
  getByUser(userId) {
    return Order.find({ user: userId }).populate('items.product');
  }

  // Obtener una órden por ID
  getById(id) {
    return Order.findById(id).populate('items.product');
  }

  // Crear una nueva órden
  create(data) {
    return Order.create(data);
  }
}

module.exports = new OrderDAO();
