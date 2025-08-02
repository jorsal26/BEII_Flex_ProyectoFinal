const Order = require('../models/Order');

// DAO para operaciones CRUD en el modelo Order
class OrderDAO {
  // Obtener las órdenes del usuario logueado
  async getByUser(userId) {
    return Order.find({ user: userId }).populate('items.product');
  }

  async getById(orderId) {
    return Order.findOne({ id: orderId }).populate('items.product');
  }

  
  /*
  // Obtener una órden por ID
  async getById(id) {
    return Order.findById(id).populate('items.product');
  }
*/
  // Crear una nueva órden
  async create(data) {
    return Order.create(data);
  }

  // Obtener todos las ordenes (getAll)
  async getAll() {
    return Order.find();
  } 
  /*
  // Obtener el email del usuario asociado a una orden
  async getUserEmailFromOrder(orderId) {
    // 1. Buscar la orden
    const order = await OrderDAO.getById(orderId);
    if (!order) throw new Error('Orden no encontrada');

    // 2. Extraer el userId
    const userId = order.userId;
    if (!userId) throw new Error('Orden sin usuario asociado');

    // 3. Buscar el usuario
    const user = await UserDAO.findById(userId);
    if (!user) throw new Error('Usuario no encontrado');

    // 4. Retornar el email
    return user.email;
  }
    */
}

module.exports = new OrderDAO();
