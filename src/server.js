require('./config/envValidator'); // 👈 Valida antes de levantar Express
require('dotenv').config();  // 👈 Activamos dotenv
const express = require('express');
const connectDB = require('./config/db');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
connectDB();

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});