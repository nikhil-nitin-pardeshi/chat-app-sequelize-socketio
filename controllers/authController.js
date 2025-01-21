const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

exports.register = async (req, res) => {
    try {
      const { fullName, username, password } = req.body;

      if (!fullName || !username || !password) {
          return res.status(400).json({ message: 'Full Name, Username, and Password are required' });
      }
      
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
  
      const user = await User.create({ fullName, username, password: hashedPassword });
  
      res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
      res.status(500).json({ message: 'Registration failed', error: error.message });
    }
  };

exports.login = async (req, res) => {
    const user = await User.findOne({ where: { username: req.body.username } });
    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token });
};
