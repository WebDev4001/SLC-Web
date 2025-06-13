const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  date: { type: Date, required: true },
  type: { type: String, enum: ['workshop', 'fair', 'seminar', 'competition', 'guest-lecture', 'other'], default: 'other' },
  description: { type: String, required: true },
  venue: { type: String },
  imageUrl: { type: String },
  registrationLink: { type: String }, // Optional link for event registration
  postedDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Event', EventSchema);
