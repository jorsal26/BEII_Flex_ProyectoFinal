// DTO para el modelo Order
class OrderDTO {
  // Constructor de la clase OrderDTO
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
