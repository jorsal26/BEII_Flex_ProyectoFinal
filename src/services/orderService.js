/*
const OrderDAO = require('../dao/OrderDAO');
const UserDAO = require('../dao/UserDAO');

const getUserEmailFromOrder = async (orderId) => {
  const order = await OrderDAO.findById(orderId);
  if (!order) throw new Error('Orden no encontrada');

    const userId = order.userId;
    
    console.log(orderId)  
    console.log('userId:', userId);

  if (!userId) throw new Error('Orden sin usuario asociado');

  const user = await UserDAO.findById(userId);
  if (!user) throw new Error('Usuario no encontrado');

  return user.email;
};

module.exports = { getUserEmailFromOrder };
*/
const path = require('path');
const OrderDAO = require('../dao/OrderDAO');
const UserDAO = require('../dao/UserDAO');
const { generateOrderPDF } = require('../services/pdfService');
const { sendOrderEmail } = require('../services/emailService');

const confirmOrder = async (orderId) => {
  //Buscar la orden
  const order = await OrderDAO.getById(orderId);
  if (!order) throw new Error('Orden no encontrada');

  //Buscar el usuario
  const user = await UserDAO.getById(order.user);
  if (!user) throw new Error('Usuario no encontrado');

  //Generar PDF
  const pdfFileName = `ticket-${order.id}.pdf`;
  const pdfPath = path.join(__dirname, '..', 'public', 'pdfs', pdfFileName);
  await generateOrderPDF({ ...order, customer: user }, pdfPath);

  //Enviar correo
  await sendOrderEmail({ ...order, customer: user }, pdfPath);

  //Retornar resultado
  return {
    pdfUrl: `/pdfs/${pdfFileName}`,
    email: user.email
  };
};

module.exports = { confirmOrder };
