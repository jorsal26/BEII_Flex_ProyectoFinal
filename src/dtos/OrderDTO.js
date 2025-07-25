// dtos/OrderDTO.js
/*
class OrderDTO {
  constructor(order) {
    this.id = order._id;
    this.date = order.createdAt;
    this.total = order.total;
    this.items = order.items;
  }
}
module.exports = OrderDTO;
*/
class OrderDTO {
  constructor(order) {
    this.id = order._id;
    this.user = order.user;
    this.date = order.createdAt;
    this.status = order.status;
    this.items = order.items.map(item => ({
      product: {
        id: item.product._id,
        name: item.product.name,
        price: item.product.price
      },
      quantity: item.quantity
    }));
    this.total = order.total;
  }
}

module.exports = OrderDTO;