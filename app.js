const express = require('express');
const mysql = require('mysql2');

const app = express();

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'Welcome@12345',
  database: 'cdw_wallet_oct_6',
};


const pool = mysql.createPool(dbConfig);
pool.getConnection((err, connection) => {
  if (err) {
    console.error(`Error connecting to MySQL: ${err.stack}`);
    return;
  }

  console.log(`Connected to MySQL database on ${dbConfig.host}/${dbConfig.database}`);

  connection.release();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
