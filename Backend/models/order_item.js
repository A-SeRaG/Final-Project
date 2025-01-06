import Sequelize from 'sequelize';

import sequelize from '../database.js';

const OrderItem = sequelize.define('OrderItem', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  quantity: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
});

export default OrderItem;
