import Sequelize from 'sequelize';

import sequelize from '../database.js';

const User = sequelize.define('User', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING(60),
    allowNull: false,
  },
  role: {
    type: Sequelize.ENUM('customer', 'admin'),
  },
});

export default User;

