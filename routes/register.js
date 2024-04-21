// routes/register.js

const express = require('express');
const router = express.Router();

// GET request to render the registration form
router.get('/', (req, res) => {
  res.render('register'); // Assuming you have a register.ejs file in your views directory
});

// POST request to handle form submission
router.post('/', (req, res) => {
  // Handle registration logic here
});

module.exports = router;
