const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const mainRouter = require('./routes/index');


const app = express();
const PORT = process.env.PORT || 3000;

// Generate a unique secret key for sessions
const secretKey = uuidv4();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
    secret: secretKey,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));

// Set EJS as the view engine
app.set('view engine', 'ejs');
// Set the views directory
app.set('views', 'C:/Users/udayv/OneDrive/Desktop/ElectionNew/views');

// Static files
app.use(express.static('public'));

// Routes
app.use('/', mainRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
