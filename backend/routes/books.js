const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// @route   GET /api/library/books
// @desc    Get all books (with optional query params for filtering/pagination)
// @access  Public
router.get('/', async (req, res) => {
  try {
    // Basic find, can be extended with req.query for filters, sort, pagination
    const books = await Book.find().sort({ addedDate: -1 }); // Sort by most recently added
    res.json(books);
  } catch (err) {
    console.error('Error fetching books:', err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST /api/library/books (Admin only - for adding new books)
// @desc    Add a new book (Placeholder - needs admin auth in a real app)
// @access  Private (should be)
router.post('/', async (req, res) => {
  try {
    // For now, simple creation. In a real app, add validation and ensure user is admin.
    const { title, author, isbn, category, publisher, publicationYear, copiesAvailable, description, coverImageUrl } = req.body;
    if (!title || !author) {
        return res.status(400).json({ msg: 'Title and Author are required.' });
    }
    const newBook = new Book({ title, author, isbn, category, publisher, publicationYear, copiesAvailable, description, coverImageUrl });
    const book = await newBook.save();
    res.status(201).json({ msg: 'Book added successfully', book });
  } catch (err) {
    console.error('Error adding book:', err.message);
    if (err.code === 11000) { // Duplicate key error (e.g. ISBN)
        return res.status(400).json({ msg: 'Book with this ISBN already exists.' });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;
