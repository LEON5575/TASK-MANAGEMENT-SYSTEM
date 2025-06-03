const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

//^ http://localhost:3000/api/users/register + add username,email and passwords +copy jwt token
router.post('/register', userController.register);

//! http://localhost:3000/api/users/login + email and password +in headers jwt token
router.post('/login', userController.login);



// Dummy register handler to test route working
// router.post('/register', (req, res) => {
//   console.log('Register route hit with body:', req.body);
//   res.status(201).json({ message: 'User registered successfully', user: req.body });
// });
module.exports = router;
