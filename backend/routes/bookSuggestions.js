const express = require('express');
const router = express.Router();
const BookSuggestion = require('../models/BookSuggestion');

// @route   POST /api/suggest-book
// @desc    Submit a new book suggestion
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { title, author, publicationYear, reason, suggesterName, suggesterEmail } = req.body;

    // Basic validation (more comprehensive validation can be added)
    if (!title || !reason) {
      return res.status(400).json({ msg: 'Please provide title and reason for suggestion.' });
    }

    const newSuggestion = new BookSuggestion({
      title,
      author,
      publicationYear,
      reason,
      suggesterName,
      suggesterEmail
    });

    const suggestion = await newSuggestion.save();
    res.status(201).json({ msg: 'Book suggestion submitted successfully!', suggestion });
  } catch (err) {
    console.error('Error submitting book suggestion:', err.message);
    if (err.name === 'ValidationError') {
      return res.status(400).json({ msg: 'Validation Error', errors: err.errors });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;
