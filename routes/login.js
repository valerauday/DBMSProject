// routes/login.js

const express = require('express');
const router = express.Router();

// GET route for rendering the login form
router.get('/login', (req, res) => {
  res.render('login'); // Assuming you have a login.ejs file in your views directory
});

// POST route for processing login form submission
router.post('/login', (req, res) => {
  // Handle login form submission here
});

module.exports = router;
