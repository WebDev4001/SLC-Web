const mongoose = require('mongoose');

const ContactSubmissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address']
  },
  subject: {
    type: String,
    required: [true, 'Subject is required'],
    trim: true
  },
  message: {
    type: String,
    required: [true, 'Message is required']
  },
  submissionDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('ContactSubmission', ContactSubmissionSchema);
