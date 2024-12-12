const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// MySQL connection setup
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',  // Replace with your MySQL password
  database: 'company'        // Replace with your database name
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL!");
});

// Route to display index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Endpoint to add an employee to the database
app.post('/add-employee', (req, res) => {
  const { name, email, address, salary, experience, position } = req.body;

  const sql = `INSERT INTO employees (name, email, address, salary, experience, position) 
               VALUES (?, ?, ?, ?, ?, ?)`;

  const values = [name, email, address, parseFloat(salary), parseInt(experience), position];

  con.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error inserting employee:", err);
      return res.status(500).send("Error inserting employee");
    }
    console.log("Employee added successfully.");
    res.redirect('/');
  });
});

// Endpoint to get the list of employees in JSON format
app.get('/employees', (req, res) => {
  const sql = 'SELECT * FROM employees';

  con.query(sql, (err, results) => {
    if (err) {
      console.error("Error retrieving employees:", err);
      return res.status(500).send("Error retrieving employees");
    }
    res.json(results);
  });
});

// Start the server
app.listen(8080, () => {
  console.log('Server started on http://localhost:8080');
});
