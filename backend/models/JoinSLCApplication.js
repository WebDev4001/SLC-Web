const mongoose = require('mongoose');

const JoinSLCApplicationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    unique: true, // Assuming email should be unique for applications
    match: [/.+\@.+\..+/, 'Please fill a valid email address']
  },
  studentId: {
    type: String,
    required: [true, 'Student ID is required'],
    trim: true,
    unique: true // Assuming student ID should be unique
  },
  branch: {
    type: String,
    required: [true, 'Branch is required']
  },
  year: {
    type: String,
    required: [true, 'Year of study is required']
  },
  reasonToJoin: {
    type: String,
    required: [true, 'Reason for wanting to join is required']
  },
  resumePath: { // To store the path to the uploaded resume
    type: String,
    required: [true, 'Resume is required']
  },
  applicationDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('JoinSLCApplication', JoinSLCApplicationSchema);
