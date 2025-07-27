const productDAO = require('../dao/ProductDAO');
const ProductDTO = require('../dtos/ProductDTO');

// Obtener todos los productos (getAllProducts)
const getAllProducts = async (req, res) => {
  const products = await productDAO.getAll();
  const dtos = products.map(p => new ProductDTO(p));
  res.json(dtos);
};

// Obtener un producto por ID (getProductById)
const getProductById = async (req, res) => {
  const product = await productDAO.getById(req.params.id);
  if (!product) return res.status(404).json({ message: 'Producto no encontrado' });
  res.json(new ProductDTO(product));
};

// Crear un producto (createProduct)
const createProduct = async (req, res) => {
  const product = await productDAO.create(req.body);
  res.status(201).json(new ProductDTO(product));
};

// Actualizar un producto (updateProduct)
const updateProduct = async (req, res) => {
  const product = await productDAO.update(req.params.id, req.body);
  res.json(new ProductDTO(product));
};

// Eliminar un producto (deleteProduct)
const deleteProduct = async (req, res) => {
  const product = await productDAO.delete(req.params.id);
  res.json(new ProductDTO(product));
};

module.exports = { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };
