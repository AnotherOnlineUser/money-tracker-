const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const Transaction = require('./models/transaction.js');

app.use(cors());
app.use(cors({ origin: "http://localhost:3000" }));

app.use(express.json());

app.get('/api/test', (req, res) => {
  res.json('test ok');
});

app.post('/api/transaction', async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    const { name, description, datetime, price } = req.body;
    const transaction = await Transaction.create({ name, description, datetime, price });
    res.json(transaction);  // Return the created transaction
  } catch (error) {
    res.status(500).json({ error: 'Error creating transaction' });
  }
});

app.get('/api/transactions', async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching transactions' });
  }
});

app.listen(4000, () => {
  console.log('Server running on port 4000');
});
