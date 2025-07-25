const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendOrderConfirmation = async (to, pdfBuffer) => {
  await transporter.sendMail({
    from: `"eCommerce App" <${process.env.EMAIL_USER}>`,
    to,
    subject: 'Confirmación de pedido',
    text: 'Gracias por tu compra',
    attachments: [
      {
        filename: 'orden.pdf',
        content: pdfBuffer
      }
    ]
  });
};

const sendRegistrationEmail = async (user) => {
  const message = {
    from: `"eCommerce App" <${process.env.EMAIL_USER}>`,
    to: user.email,
    subject: '🎉 ¡Registro exitoso!',
    html: `
      <h2>Hola ${user.first_name},</h2>
      <p>Tu cuenta fue registrada correctamente en <strong>eCommerce App</strong>.</p>
      <p>Ya podés iniciar sesión y comenzar a explorar nuestros productos.</p>
      <hr/>
      <p>Gracias por confiar en nosotros.</p>
    `
  };

  await transporter.sendMail(message);
};

module.exports = { sendRegistrationEmail, sendOrderConfirmation };