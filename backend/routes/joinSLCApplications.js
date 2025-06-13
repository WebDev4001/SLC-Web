const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const JoinSLCApplication = require('../models/JoinSLCApplication');

// Multer disk storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Ensure 'uploads/' directory exists
  },
  filename: function (req, file, cb) {
    // Create a unique filename: fieldname-timestamp.extension
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// File filter for resumes (e.g., allow only pdf, doc, docx)
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|pdf|doc|docx/;
  const mimetype = allowedTypes.test(file.mimetype);
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());

  if (mimetype && extname) {
    return cb(null, true);
  }
  cb('Error: File type not allowed. Allowed types: jpeg, jpg, png, pdf, doc, docx');
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB file size limit
  fileFilter: fileFilter
}).single('resume'); // 'resume' is the field name in the form

// @route   POST /api/join-slc
// @desc    Submit a new application to join SLC
// @access  Public
router.post('/', (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.error('Multer error:', err);
      return res.status(400).json({ msg: err.message || err });
    }
    if (req.file == undefined) {
      return res.status(400).json({ msg: 'Error: No resume file selected!' });
    }

    try {
      const { fullName, email, studentId, branch, year, reasonToJoin } = req.body;

      // Basic validation
      if (!fullName || !email || !studentId || !branch || !year || !reasonToJoin) {
        return res.status(400).json({ msg: 'Please fill all required fields.' });
      }
      if (!req.file) { // Should be caught by upload logic, but double check
          return res.status(400).json({ msg: 'Resume file is missing.' });
      }

      const newApplication = new JoinSLCApplication({
        fullName,
        email,
        studentId,
        branch,
        year,
        reasonToJoin,
        resumePath: req.file.path // Save the path to the uploaded file
      });

      const application = await newApplication.save();
      res.status(201).json({ msg: 'Application submitted successfully!', application });
    } catch (err) {
      console.error('Error submitting SLC application:', err.message);
      if (err.name === 'ValidationError') {
        return res.status(400).json({ msg: 'Validation Error', errors: err.errors });
      }
      // If it's a duplicate key error (e.g. unique email or studentId)
      if (err.code === 11000) {
        return res.status(400).json({ msg: 'Duplicate value error. Email or Student ID may already exist.', field: err.keyValue });
      }
      res.status(500).send('Server Error');
    }
  });
});

module.exports = router;
