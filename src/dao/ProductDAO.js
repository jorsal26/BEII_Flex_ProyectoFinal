// dao/ProductDAO.js
/*
const Product = require('../models/Product');
class ProductDAO {
  getAll() { return Product.find(); }
  getById(id) { return Product.findById(id); }
  create(data) { return Product.create(data); }
  update(id, data) { return Product.findByIdAndUpdate(id, data, { new: true }); }
  delete(id) { return Product.findByIdAndDelete(id); }
}
module.exports = new ProductDAO();
*/
const Product = require('../models/Product');

class ProductDAO {
  getAll() { return Product.find(); }
  getById(id) { return Product.findById(id); }
  create(data) { return Product.create(data); }
  update(id, data) { return Product.findByIdAndUpdate(id, data, { new: true }); }
  delete(id) { return Product.findByIdAndDelete(id); }
}

module.exports = new ProductDAO();
