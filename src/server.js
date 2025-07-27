const mongoose = require('mongoose');
const app = require('./app');

//Validación de entorno (opcional) (envValidator)
require('./config/envValidator');

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

//Conectar a MongoDB
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ Conectado a MongoDB');
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Error al conectar con MongoDB:', err.message);
    process.exit(1);
  });
