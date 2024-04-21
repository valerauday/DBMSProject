const express = require('express');
const router = express.Router();

// Controller imports
const { loginUser, registerUser, getUserDashboard } = require('../controllers/userControllers');

// Routes
router.post('/login', loginUser);
router.post('/register', registerUser);
router.get('/dashboard', getUserDashboard);

module.exports = router;
