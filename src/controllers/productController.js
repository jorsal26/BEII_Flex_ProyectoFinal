/*
const productDAO = require('../dao/ProductDAO');
const ProductDTO = require('../dtos/ProductDTO');

const getAllProducts = async (req, res) => {
  const products = await productDAO.getAll();
  const dtos = products.map(p => new ProductDTO(p));
  res.json(dtos);
};

const createProduct = async (req, res) => {
  const product = await productDAO.create(req.body);
  res.status(201).json(new ProductDTO(product));
};

module.exports = { getAllProducts, createProduct };
*/
const productDAO = require('../dao/ProductDAO');
const ProductDTO = require('../dtos/ProductDTO');

const getAllProducts = async (req, res) => {
  const products = await productDAO.getAll();
  const dtos = products.map(p => new ProductDTO(p));
  res.json(dtos);
};

const getProductById = async (req, res) => {
  const product = await productDAO.getById(req.params.id);
  if (!product) return res.status(404).json({ message: 'Producto no encontrado' });
  res.json(new ProductDTO(product));
};

const createProduct = async (req, res) => {
  const product = await productDAO.create(req.body);
  res.status(201).json(new ProductDTO(product));
};

module.exports = { getAllProducts, getProductById, createProduct };