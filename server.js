const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');

const app = express();
app.use(express.json());

app.get('/api/users', async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

app.post('/api/users', async (req, res) => {
  const newUser = new User(req.body);
  const result = await newUser.save();
  res.json(result);
});

app.listen(3001, () => console.log('Server is running on http://localhost:3001'));
