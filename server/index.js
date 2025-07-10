const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 5000;
const MESSAGES_FILE = path.join(__dirname, 'messages.json');

app.use(cors());
app.use(express.json());

// Get all messages
app.get('/api/messages', (req, res) => {
  fs.readFile(MESSAGES_FILE, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Could not read messages.' });
    }
    res.json(JSON.parse(data || '[]'));
  });
});

// Post a new message
app.post('/api/messages', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  fs.readFile(MESSAGES_FILE, 'utf8', (err, data) => {
    let messages = [];
    if (!err && data) {
      messages = JSON.parse(data);
    }
    const newMessage = { name, email, message, date: new Date().toISOString() };
    messages.push(newMessage);
    fs.writeFile(MESSAGES_FILE, JSON.stringify(messages, null, 2), err => {
      if (err) {
        return res.status(500).json({ error: 'Could not save message.' });
      }
      res.status(201).json({ success: true });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
