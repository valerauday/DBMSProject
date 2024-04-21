// userControllers.js

// Import necessary modules
const bcrypt = require('bcrypt');
const User = require('../models/user');

// Controller functions
const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if user with provided username exists
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if provided password matches the hashed password in the database
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // If username and password are valid, send success response
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const registerUser = async (req, res) => {
    const { username, password, email } = req.body;

    try {
        // Check if user with provided username or email already exists
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password before saving it to the database
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user instance
        const newUser = new User({
            username,
            password: hashedPassword,
            email
        });

        // Save the user to the database
        await newUser.save();

        // Send success response
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getUserDashboard = async (req, res) => {
    // Logic to retrieve user dashboard data
    res.send('User dashboard');
};

module.exports = {
    loginUser,
    registerUser,
    getUserDashboard
};
