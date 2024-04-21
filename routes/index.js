const express = require('express');
const router = express.Router();

// Import sub-routers
const userRouter = require('./user');
const candidateRouter = require('./candidate');
const adminRouter = require('./admin');
const loginRouter = require('./login'); // Import the login router
const registerRouter = require('./register');

// Root route
router.get('/', (req, res) => {
  res.redirect('/login');
});

// Use sub-routers
router.use('/users', userRouter);
router.use('/candidates', candidateRouter);
router.use('/admins', adminRouter);
router.use('/', loginRouter); // Use the login router
router.use('/register', registerRouter);

module.exports = router;
