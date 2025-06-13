const express = require('express');
const router = express.Router();

// @route   POST /api/chatbot
// @desc    Receive message from chatbot frontend and return a response
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ msg: 'Message is required.' });
    }

    // Simple logic: Echo message or provide a canned response
    let botResponse = \`You said: "\${message}". I am a simple bot. For complex queries, please explore the website or contact SLC directly.\`;

    if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi')) {
      botResponse = 'Hello there! How can I help you today?';
    } else if (message.toLowerCase().includes('library hours')) {
      botResponse = 'The library is open from 9 AM to 8 PM on weekdays and 10 AM to 4 PM on weekends. Please check the official MMMUT website for holiday hours.';
    } else if (message.toLowerCase().includes('join slc')) {
      botResponse = 'You can find information about joining the SLC on the \'Events & Engage\' page under the \'Join the SLC Team!\' section.';
    } else if (message.toLowerCase().includes('suggest book')) {
      botResponse = 'Book suggestions can be made on the \'Events & Engage\' page. Look for the \'Suggest a Book or Resource\' form.';
    }

    res.json({ reply: botResponse });

  } catch (err) {
    console.error('Error in chatbot API:', err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
