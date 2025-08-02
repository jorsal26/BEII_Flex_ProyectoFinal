const orderDAO = require('../dao/OrderDAO');
const OrderDTO = require('../dtos/OrderDTO');
const pdfService = require('../services/pdfService');
const sendEmail = require('../services/emailService');
const path = require('path');
const fs = require('fs');
const { generateOrderPDF } = require('../services/pdfService');
const { sendOrderEmail } = require('../services/emailService');
const UserDAO = require('../dao/UserDAO');
const { getUserEmailFromOrder } = require('../services/orderService');
const { confirmOrder } = require('../services/orderService');



// Crear nueva orden (createOrder)
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

// Obtener las órdenes del usuario logueado (getUserOrders)
const getUserOrders = async (req, res) => {
  const orders = await orderDAO.getByUser(req.user.id);
  const dtos = orders.map(order => new OrderDTO(order));
  res.json(dtos);
};

const getUserOrdersById = async (req, res) => {
  const order = await orderDAO.getById(req.params.id);
  if (!order) return res.status(404).json({ message: 'Orden no encontrada' });
  res.json(new OrderDTO(order));
};
/*
const getOrderEmail = async (req, res) => {
  try {
    const { orderId } = req.params;
    const email = await getUserEmailFromOrder(orderId);
    return res.json({ email });
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};
*/
// Obtener todos las órdenes (getAllOrders)
const getAllOrders = async (req, res) => {
  const orders = await orderDAO.getAll();
  const dtos = orders.map(order => new OrderDTO(order));
  res.json(dtos);
};

const confirmOrderold = async (req, res) => {
  try {
    const orderId = req.params.oid;
    const order = await orderDAO.findById(orderId);

    console.log('req.params.oid:', req.params.oid);
    console.log('orderId:', orderId);

    const email = await getUserEmailFromOrder(orderId);

    // Usás el email para enviar el ticket
    console.log('Email del usuario:', email);


    //Validaciones
    if (!order) return res.status(404).json({ message: 'Orden no encontrada' });

    if (order.status !== 'pendiente') return res.status(400).json({ message: 'La orden ya fue confirmada' });

    if (order.email !== req.user.email) return res.status(403).json({ message: 'No puedes confirmar una orden que no sea tuya' });

    if (order.items.some(item => item.quantity < 1)) return res.status(400).json({ message: 'No puedes confirmar una orden con productos sin cantidad' });

    if (order.items.some(item => item.product.stock < item.quantity)) return res.status(400).json({ message: 'No puedes confirmar una orden con productos sin stock suficiente' });

    //Generar PDF
    const pdfPath = path.join(__dirname, '..', 'public', 'pdfs', `ticket-${order.id}.pdf`);
    await generateOrderPDF(order, pdfPath);

    //Enviar correo con PDF adjunto
    await sendOrderEmail(order, pdfPath);

    //Respuesta exitosa
    return res.status(200).json({
      message: 'Orden confirmada y correo enviado',
      pdfUrl: `/pdfs/ticket-${order.id}.pdf`
    });

  } catch (error) {
    console.error('Error al confirmar orden:', error);
    return res.status(500).json({ error: 'Error interno al confirmar la orden' });
  }
};

  const confirmOrderController = async (req, res) => {
  try {
    const orderId = req.params.id;
    const result = await confirmOrder(orderId);

    return res.status(200).json({
      message: 'Orden confirmada y correo enviado',
      pdfUrl: result.pdfUrl,
      email: result.email
    });
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = { createOrder, getUserOrders, getUserOrdersById, getAllOrders, confirmOrderold, confirmOrderController };
