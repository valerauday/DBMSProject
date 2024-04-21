// db.js

const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost', // Change this to your database host
  user: 'root', // Change this to your database username
  password: '1234', // Change this to your database password
  database: 'OnlineVotingSystem', // Change this to your database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Export the pool to be used throughout the application
module.exports = pool.promise();
