const express = require('express');
const router = express.Router();

// Import your controller functions
const { loginUser, registerUser } = require('../controllers/authController');

// Define routes
router.post('/login', loginUser);
router.post('/register', registerUser);

module.exports = router;
