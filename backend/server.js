const express = require('express');
const mongoose = require('mongoose');
const path = require('path'); // Required for serving static files if needed for uploads

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to parse URL-encoded bodies (for form data, not directly used by JSON APIs but good practice)
app.use(express.urlencoded({ extended: false }));

// Make 'uploads' directory static to serve uploaded files if needed (optional)
// For security, it's often better to have a separate route to download files that checks permissions.
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Placeholder for MongoDB connection string
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/slcDB';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully.'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Hello from the SLC backend!');
});

// API Routes
app.use('/api/suggest-book', require('./routes/bookSuggestions'));
app.use('/api/join-slc', require('./routes/joinSLCApplications'));
app.use('/api/contact', require('./routes/contactSubmissions'));

// Dynamic Content API Routes
app.use('/api/library/books', require('./routes/books'));
app.use('/api/events', require('./routes/events'));
app.use('/api/chatbot', require('./routes/chatbot'));

app.listen(port, () => {
  console.log(\`Backend server listening at http://localhost:\${port}\`);
});
