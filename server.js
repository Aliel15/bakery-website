const express = require('express');
const path = require('path');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
const PORT = 5000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // ✅ correct file path
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html')); // ✅ needs to exist in /views
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contact.html')); // ✅ needs to exist in /views
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  const sql = 'INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)';
  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error('❌ Failed to insert data:', err);
      return res.status(500).send('Something went wrong.');
    }

    console.log('✅ Data inserted:', result);
    res.send('<h2>Thank you for contacting us!</h2><a href="/">Go back to home</a>');
  });
});

app.post('/order', (req, res) => {
  const { name, item, quantity } = req.body;

  const sql = 'INSERT INTO orders (name, item, quantity) VALUES (?, ?, ?)';
  db.query(sql, [name, item, quantity], (err, result) => {
    if (err) {
      console.error('❌ Failed to insert order:', err);
      return res.status(500).send('Failed to submit order.');
    }

    console.log('✅ Order inserted:', result);
    res.send('<h2>Thank you! Your order has been placed.</h2><a href="/">Back to Home</a>');
  });
});





// DB Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) throw err;
  console.log('✅ Connected to MySQL!');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
