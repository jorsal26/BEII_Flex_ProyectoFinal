// dtos/ProductDTO.js
/*
class ProductDTO {
  constructor(product) {
    this.id = product._id;
    this.name = product.name;
    this.price = product.price;
    this.stock = product.stock;
    this.category = product.category;
  }
}
module.exports = ProductDTO;
*/

class ProductDTO {
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