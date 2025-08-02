const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

//Generar PDF (generateOrderPDF)
const generateOrderPDF = (orderData, outputPath) => {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument();
      const stream = fs.createWriteStream(outputPath);
      doc.pipe(stream);

      doc.fontSize(20).text('📦 Confirmación de Pedido', { align: 'center' });
      doc.moveDown();
      doc.fontSize(12).text(`ID de Orden: ${orderData.id}`);
//      doc.text(`Fecha: ${orderData.date.toLocaleDateString()}`);

      //doc.text(`Fecha: ${new Date(orderData.Date).toLocaleString()}`);
      doc.text(`------------------------`);

      doc.text(`Cliente: ${orderData.customer.name}`);
      doc.text(`Dirección: ${orderData.customer.address}`);
      doc.text(`Email: ${orderData.customer.email}`);
      doc.text(`Teléfono: ${orderData.customer.phone}`);
      doc.moveDown();

      doc.text('Productos:', { underline: true });

      //orderData.items.forEach(item => {
      //  doc.text(`- ${item.name} x${item.quantity} ($${item.price})`);
      //});

      doc.moveDown();
      doc.text(`Total: $${orderData.total}`, { align: 'right' });

      doc.end();

      stream.on('finish', () => resolve(outputPath));
      stream.on('error', (err) => reject(err));
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { generateOrderPDF };
