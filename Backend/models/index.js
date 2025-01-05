import sequelize from '../database.js';
import Product from './product.js';
import User from './user.js';
import Order from './order.js';
import OrderItem from './order_item.js';


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

OrderItem.belongsTo(Product, { foreignKey: 'productId' });
Product.hasMany(OrderItem, { foreignKey: 'productId' });

export { Product, User, Order, OrderItem, sequelize };
