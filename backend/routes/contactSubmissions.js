const express = require('express');
const router = express.Router();
const ContactSubmission = require('../models/ContactSubmission');

// @route   POST /api/contact
// @desc    Submit a new contact form message
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ msg: 'Please fill all fields.' });
    }

    const newSubmission = new ContactSubmission({
      name,
      email,
      subject,
      message
    });

    const submission = await newSubmission.save();
    res.status(201).json({ msg: 'Message submitted successfully!', submission });
  } catch (err) {
    console.error('Error submitting contact message:', err.message);
    if (err.name === 'ValidationError') {
      return res.status(400).json({ msg: 'Validation Error', errors: err.errors });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;
