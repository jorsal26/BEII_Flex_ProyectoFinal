// DTO para el modelo Cart
class CartDTO {
  // Constructor de la clase CartDTO
  constructor(cart) {
    this.id = cart._id;
    this.user = cart.user;
    this.items = cart.items.map(item => ({
      product: {
        id: item.product._id,
        name: item.product.name,
        price: item.product.price
      },
      quantity: item.quantity
    }));
    this.total = cart.total;
  }
}

module.exports = CartDTO;
