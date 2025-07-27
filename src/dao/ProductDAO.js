const Product = require('../models/Product');

// DAO para operaciones CRUD en el modelo Product
class ProductDAO {
  getAll() { return Product.find(); } // Obtener todos los productos
  getById(id) { return Product.findById(id); } // Obtener un producto por ID
  create(data) { return Product.create(data); } // Crear un producto
  update(id, data) { return Product.findByIdAndUpdate(id, data, { new: true }); } // Actualizar un producto
  delete(id) { return Product.findByIdAndDelete(id); } // Eliminar un producto
}

module.exports = new ProductDAO();
