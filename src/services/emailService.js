const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');

const transporter = nodemailer.createTransport({
  //service: 'gmail',
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

//Compilar plantilla Handlebars (compileTemplate)
const compileTemplate = (templateName, data) => {
  const templatePath = path.join(__dirname, `../views/emails/${templateName}.hbs`);
  const source = fs.readFileSync(templatePath, 'utf8');
  const template = handlebars.compile(source);
  return template(data);
};

//Enviar correo con PDF adjunto (sendOrderConfirmation)
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

//Enviar correo con PDF adjunto (sendRegistrationEmail)
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

//Enviar correo con PDF adjunto (sendOrderEmail)
const sendOrderEmail = async (to, orderData) => {
  const html = compileTemplate('orderConfirmation', orderData);

  return await transporter.sendMail({
    from: `"Tienda Pro" <${process.env.SMTP_USER}>`,
    to,
    subject: `📦 Confirmación de orden #${orderData.id}`,
    html,
    attachments: [
      {
        filename: `ticket-${orderData.id}.pdf`,
        path: path.join(__dirname, `../../public/pdfs/ticket-${orderData.id}.pdf`)
      }
    ]
  });
};

module.exports = { sendRegistrationEmail, sendOrderConfirmation, sendOrderEmail  };
