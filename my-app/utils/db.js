const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '@dmin909Mysql',
    database: 'fashop'
});

module.exports = pool.promise();
