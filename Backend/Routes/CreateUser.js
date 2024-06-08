const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const jwtSecret = "Mynameisanthonygonjappa";

// Route for creating a new user
router.post('/createuser', [
  body('email').isEmail(),
  body('name').isLength({ min: 5 }),
  body('password', 'Password must be at least 5 characters long').isLength({ min: 5 })
], async (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    await User.create({
      name: req.body.name,
      password: hashedPassword,
      email: req.body.email,
      location: req.body.location  
    });

    res.json({ success: true });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

// Route for logging in a user
router.post('/loginuser', [
  body('email').isEmail(),
  body('password', 'Password must be at least 5 characters long').isLength({ min: 5 })
], async (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  let email = req.body.email;
  try {
    let userData = await User.findOne({ email });
    if (!userData) {
      return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
    }
   const data = {
         user:{
              id: userData.id
         }
   }
   const authToken = jwt.sign(data,jwtSecret)
   return res.json({ success: true, authToken: authToken });
  } catch (err) {
    console.error(err);
    res.json({ success: false, message: 'Server Error' });
  }
});

module.exports = router;