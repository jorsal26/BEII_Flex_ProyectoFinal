// DTO para el modelo Product
class ProductDTO {
  // Constructor de la clase ProductDTO
  constructor(product) {
    this.id = product._id;
    this.name = product.name;
    this.description = product.description;
    this.price = product.price;
    this.stock = product.stock;
    this.category = product.category;
    this.thumbnail = product.thumbnail;
  }
}

module.exports = ProductDTO;
