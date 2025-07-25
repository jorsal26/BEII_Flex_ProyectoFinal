// dao/OrderDAO.js
/*
const Order = require('../models/Order');
class OrderDAO {
  create(data) { return Order.create(data); }
  getByUser(userId) { return Order.find({ user: userId }); }
  getById(id) { return Order.findById(id); }
}
module.exports = new OrderDAO();
*/
const Order = require('../models/Order');

class OrderDAO {
  getByUser(userId) {
    return Order.find({ user: userId }).populate('items.product');
  }

  getById(id) {
    return Order.findById(id).populate('items.product');
  }

  create(data) {
    return Order.create(data);
  }
}

module.exports = new OrderDAO();