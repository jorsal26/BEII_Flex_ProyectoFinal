// dtos/CartDTO.js
/*
class CartDTO {
  constructor(cart) {
    this.id = cart._id;
    this.items = cart.items;
    this.total = cart.total;
  }
}
module.exports = CartDTO;
*/
class CartDTO {
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