// db.js
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Franks@123!', // use your password
  database: 'mydb'
});

db.connect((err) => {
  if (err) {
    console.log('❌ MySQL connection failed:', err);
  } else {
    console.log('✅ MySQL connected');
  }
});

module.exports = db;
