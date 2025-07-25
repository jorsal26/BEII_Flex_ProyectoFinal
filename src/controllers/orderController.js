/*
const orderDAO = require('../dao/OrderDAO');
const OrderDTO = require('../dtos/OrderDTO');
const pdfService = require('../services/pdfService');
const sendEmail = require('../services/emailService');

const createOrder = async (req, res) => {
  const order = await orderDAO.create({
    user: req.user.id,
    items: req.body.items,
    total: req.body.total
  });

  const pdf = await pdfService(order);
  await sendEmail(req.user.email, pdf);

  res.status(201).json(new OrderDTO(order));
};

module.exports = { createOrder };
*/
const orderDAO = require('../dao/OrderDAO');
const OrderDTO = require('../dtos/OrderDTO');
const pdfService = require('../services/pdfService');
const sendEmail = require('../services/emailService');

const createOrder = async (req, res) => {
  const order = await orderDAO.create({
    user: req.user.id,
    items: req.body.items,
    total: req.body.total
  });

  const pdf = await pdfService(order);
  await sendEmail(req.user.email, pdf);

  res.status(201).json(new OrderDTO(order));
};

const getUserOrders = async (req, res) => {
  const orders = await orderDAO.getByUser(req.user.id);
  const dtos = orders.map(order => new OrderDTO(order));
  res.json(dtos);
};

module.exports = { createOrder, getUserOrders };