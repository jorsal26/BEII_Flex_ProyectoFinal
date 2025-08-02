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

  // Añadir un producto al carrito (addToCart)
  async addToCart(id, productId, quantity) {
    const cart = await Cart.findById(id);
    const product = await Cart.findById(productId);

    if (!cart) return null;
    if (!product) return null;

    // Verificar que el producto esté en stock
    if (product.stock < quantity) return null;

    // Verificar que el carrito no tenga el producto ya
    if (cart.items.some(item => item.product.id === productId)) return null;

    // Añadir el producto al carrito
    cart.items.push({ product, quantity });
    cart.total += product.price * quantity;

    return cart.save();
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
