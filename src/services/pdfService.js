const PDFDocument = require('pdfkit');

const generateOrderPDF = (orderData) => {
  const doc = new PDFDocument();
  let buffers = [];

  doc.on('data', buffers.push.bind(buffers));
  doc.on('end', () => {
    const pdfBuffer = Buffer.concat(buffers);
    return pdfBuffer;
  });

  doc.text(`Orden #${orderData.id}`);
  doc.text(`Total: $${orderData.total}`);
  doc.end();
};

module.exports = generateOrderPDF;