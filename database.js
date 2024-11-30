import mysql from 'mysql2/promise';
import Sequelize from 'sequelize';
import 'process';
import 'dotenv/config'

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3306;
const user = process.env.USER || 'root';
const password = process.env.PASSWORD || 'root';
const database = process.env.DATABASE || 'Shop';

// connecting to the database
const connection = await mysql.createConnection({
  host: host,
  port: port,
  user: user,
  password: password,
});

await connection.query(`CREATE DATABASE IF NOT EXISTS ${database};`);
const sequelize = new Sequelize(`mysql://root:root@localhost:3306/${database}`);

export default sequelize;
