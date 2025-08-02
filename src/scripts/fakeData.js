require('dotenv').config();

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('../models/User');
const Product = require('../models/Product');
const Cart = require('../models/Cart');
const Order = require('../models/Order');

// Conectar a MongoDB
const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
};

// Datos ficticios para probar el API
const seedData = async () => {
  await connectDB();

   //Usuarios (con password hashado) y rol
  const hashedPassAdm = await bcrypt.hash('Admin123', 10);
  const hashedPass = await bcrypt.hash('123456', 10);
  const users = await User.insertMany([
    { first_name: 'Juan', last_name: 'Pérez', email: 'juan@mail.com', age: 28, password: hashedPassAdm, role: 'admin' },
    { first_name: 'Ana', last_name: 'Gómez', email: 'ana@mail.com', age: 35, password: hashedPass, role: 'user' },
    { first_name: "Ramiro", last_name: "Sanchez", email: "rsanchez@mail.com", age: 30, password: hashedPass, role: "user" }
  ]);

  //Productos (con stock y categoria)
  const products = await Product.insertMany([
    { name: 'Zapatillas', description: 'Deportivas', price: 120, stock: 30, category: 'calzado' },
    { name: 'Mochila', description: 'Resistente al agua', price: 80, stock: 20, category: 'accesorios' },
    { name: 'Remera', description: '100% algodón', price: 35, stock: 50, category: 'ropa' }
  ]);

  //Carritos (con items y total)
  const carts = await Cart.insertMany([
    {
      user: users[0]._id,
      items: [
        { product: products[0]._id, quantity: 1 },
        { product: products[2]._id, quantity: 2 }
      ],
      total: 190
    }
  ]);

  //Actualizar el carrito del usuario logueado
  await User.findByIdAndUpdate(users[0]._id, { cart: carts[0]._id });

  //Ordenes de compra (con items y total)
  await Order.create({
    user: users[0]._id,
    items: [
      { product: products[0]._id, quantity: 1 },
      { product: products[2]._id, quantity: 2 }
    ],
    total: 190,
    status: 'pagado'
  });

  // Crear orden para el usuario con carrito
  await Order.create({
    user: users[0]._id,
    items: carts.items,
    total: 8990 * 2 + 7490,
    coupon: "DESCUENTO10",
    createdAt: new Date(),
    status: 'pendiente'
  });
  
  console.log('✅ Datos ficticios insertados correctamente');
  mongoose.connection.close();
};

seedData();
