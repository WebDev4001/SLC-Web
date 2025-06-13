const mongoose = require('mongoose');

const BookSuggestionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Book title is required'],
    trim: true
  },
  author: {
    type: String,
    trim: true
  },
  publicationYear: {
    type: Number
  },
  reason: {
    type: String,
    required: [true, 'Reason for suggestion is required']
  },
  suggesterName: {
    type: String,
    trim: true
  },
  suggesterEmail: {
    type: String,
    trim: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address']
  },
  submissionDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('BookSuggestion', BookSuggestionSchema);
