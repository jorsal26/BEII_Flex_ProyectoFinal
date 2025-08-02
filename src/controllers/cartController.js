
const cartDAO = require('../dao/CartDAO');
const CartDTO = require('../dtos/CartDTO');

const createCart = async (req, res) => {
  const cart = await cartDAO.create(req.user.id);
  res.json(new CartDTO(cart));
};

const addToCart = async (req, res) => {
  const cart = await cartDAO.addToCart(req.params.cartId, req.params.productId, req.body.quantity);
  res.json(new CartDTO(cart));
};

const removeFromCart = async (req, res) => {
  const cart = await cartDAO.removeFromCart(req.params.cartId, req.params.productId, req.body.quantity);
  res.json(new CartDTO(cart));
};

// Obtener el carro del usuario logueado (getCart)
const getCart = async (req, res) => {
  const cart = await cartDAO.getByUserId(req.user.id);
  if (!cart) return res.status(404).json({ message: 'Carrito no encontrado' });
  res.json(new CartDTO(cart));
};

// Actualizar el carro del usuario logueado (updateCart)
const updateCart = async (req, res) => {
  const cart = await cartDAO.update(req.params.id, req.body);
  res.json(new CartDTO(cart));
};

// Limpiar el carro del usuario logueado (clearCart)
const clearCart = async (req, res) => {
  const cart = await cartDAO.clear(req.params.id);
  res.json(new CartDTO(cart));
};

// Obtener todos los carritos (getAllCarts)
const getAllCarts = async (req, res) => {
  const carts = await cartDAO.getAll();
  const dtos = carts.map(cart => new CartDTO(cart));
  res.json(dtos);
};

module.exports = { createCart, addToCart, removeFromCart, getCart, updateCart, clearCart, getAllCarts };
