import Sequelize from 'sequelize';

import sequelize from '../database.js';

const Order = sequelize.define('Order', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  totalPrice: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('Pending', 'Shipped', 'Delivered', 'Canceled'),
  },
});

export default Order;

