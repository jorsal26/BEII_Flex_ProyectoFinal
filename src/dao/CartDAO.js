// dao/CartDAO.js
/*
const Cart = require('../models/Cart');
class CartDAO {
  getByUserId(userId) { return Cart.findOne({ user: userId }); }
  create(cartData) { return Cart.create(cartData); }
  update(id, data) { return Cart.findByIdAndUpdate(id, data, { new: true }); }
}
module.exports = new CartDAO();
*/
const Cart = require('../models/Cart');

class CartDAO {
  async getByUserId(userId) {
    return Cart.findOne({ user: userId }).populate('items.product');
  }

  async create(data) {
    return Cart.create(data);
  }

  async update(id, data) {
    return Cart.findByIdAndUpdate(id, data, { new: true });
  }

  async clear(id) {
    return Cart.findByIdAndUpdate(id, { items: [], total: 0 }, { new: true });
  }
}

module.exports = new CartDAO();