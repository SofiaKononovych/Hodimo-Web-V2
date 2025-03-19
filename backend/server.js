const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS

// MongoDB Connection
mongoose.connect('mongodb+srv://username:password@cluster0.mzvk7.mongodb.net/')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Define a Schema for the form data
const formSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  }
});

const FormData = mongoose.model('FormData', formSchema);

// Route to handle form submissions
app.post('/submit', async (req, res) => {
  try {
    const { email } = req.body;

    // Save the email to the database
    const newData = new FormData({ email });
    await newData.save();

    res.status(201).json({ message: 'Data saved successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong!' });
  }
});

// Start the Express server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
