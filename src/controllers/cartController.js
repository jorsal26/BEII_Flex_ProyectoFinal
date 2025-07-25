/*
const cartDAO = require('../dao/CartDAO');
const CartDTO = require('../dtos/CartDTO');

const getCart = async (req, res) => {
  const cart = await cartDAO.getByUserId(req.user.id);
  if (!cart) return res.status(404).json({ message: 'Carrito no encontrado' });
  res.json(new CartDTO(cart));
};

const updateCart = async (req, res) => {
  const cart = await cartDAO.update(req.params.id, req.body);
  res.json(new CartDTO(cart));
};

module.exports = { getCart, updateCart };
*/
const cartDAO = require('../dao/CartDAO');
const CartDTO = require('../dtos/CartDTO');

const getCart = async (req, res) => {
  const cart = await cartDAO.getByUserId(req.user.id);
  if (!cart) return res.status(404).json({ message: 'Carrito no encontrado' });
  res.json(new CartDTO(cart));
};

const updateCart = async (req, res) => {
  const cart = await cartDAO.update(req.params.id, req.body);
  res.json(new CartDTO(cart));
};

const clearCart = async (req, res) => {
  const cart = await cartDAO.clear(req.params.id);
  res.json(new CartDTO(cart));
};

module.exports = { getCart, updateCart, clearCart };