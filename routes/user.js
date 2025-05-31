const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.post('/register', userController.register);
router.post('/login', userController.login);


// Dummy register handler to test route working
router.post('/register', (req, res) => {
  console.log('Register route hit with body:', req.body);
  res.status(201).json({ message: 'User registered successfully', user: req.body });
});
module.exports = router;
