const express = require('express');
const router = express.Router();

// User routes
router.get('/', (req, res) => {
  res.send('List of users');
});

router.post('/', (req, res) => {
  res.send('Create a new user');
});

router.get('/:id', (req, res) => {
  res.send(`User with ID ${req.params.id}`);
});

router.put('/:id', (req, res) => {
  res.send(`Update user with ID ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
  res.send(`Delete user with ID ${req.params.id}`);
});

module.exports = router;
