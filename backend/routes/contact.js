const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    await db.execute('INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)', [name, email, subject, message]);
    res.json({ message: 'Thank you, we will contact you soon.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
