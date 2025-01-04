import express from 'express';
import bodyParser from 'body-parser';
import { sequelize } from './models/index.js';
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


await sequelize.sync();

app.listen(8080);
