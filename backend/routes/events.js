const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// @route   GET /api/events
// @desc    Get all events (sorted by date descending)
// @access  Public
router.get('/', async (req, res) => {
  try {
    const events = await Event.find().sort({ date: -1 }); // Sort by event date, newest first
    res.json(events);
  } catch (err) {
    console.error('Error fetching events:', err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST /api/events (Admin only - for adding new events)
// @desc    Add a new event (Placeholder - needs admin auth)
// @access  Private (should be)
router.post('/', async (req, res) => {
  try {
    const { title, date, type, description, venue, imageUrl, registrationLink } = req.body;
     if (!title || !date || !description) {
        return res.status(400).json({ msg: 'Title, Date, and Description are required.' });
    }
    const newEvent = new Event({ title, date, type, description, venue, imageUrl, registrationLink });
    const event = await newEvent.save();
    res.status(201).json({ msg: 'Event added successfully', event });
  } catch (err) {
    console.error('Error adding event:', err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
