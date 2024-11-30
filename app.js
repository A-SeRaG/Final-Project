import express from 'express';
import bodyParser from 'body-parser';

import sequelize from './database.js';

import Product from './models/product.js';
import User from './models/user.js';
import Order from './models/order.js';
import OrderItem from './models/order_item.js';

import productRoutes from './routes/product.js';
import userRoutes from './routes/user.js';
import orderRoutes from './routes/order.js';
import orderItemRoutes from './routes/order_item.js';


const app = express();


app.use(bodyParser.json());

// configure cors
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

// initialize routes
app.use('/api/v1', productRoutes);
app.use('/api/v1', userRoutes);
app.use('/api/v1', orderRoutes);
app.use('/api/v1', orderItemRoutes);

// error handling
app.use((err, req, res, next) => {
  const stat = err.statusCode || 500;
  return res.status(stat).json({ error: err.message })
});

// initialize relations
User.hasMany(Order, {
  foreignKey: {
    name: 'userId',
    allowNull: false,
  },
  onDelete: 'CASCADE',
});

Order.belongsToMany(Product, { through: { model: OrderItem, unique: false }, foreignKey: 'orderId' });
Product.belongsToMany(Order, { through: { model: OrderItem, unique: false }, foreignKey: 'productId' });

await sequelize.sync();

app.listen(8080);
