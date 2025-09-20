// backend/routes/bookings.js
const express = require('express');
const router = express.Router();
const db = require('../db'); // make sure this exports a valid mysql2/promise connection
const { authenticateToken, requireAdmin } = require('../middleware/auth');

// POST /api/bookings
router.post('/', async (req, res) => {
  try {
    const {
      user_name,
      email,
      phone,
      package_id,
      destination,
      start_date,
      people,
      message
    } = req.body;

    console.log('Booking request received:', req.body); // debug incoming data

    // Ensure 'people' is a number
    const peopleCount = Number(people) || 1;

    await db.execute(
      `INSERT INTO bookings 
       (user_name, email, phone, package_id, destination, start_date, people, message) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        user_name,
        email,
        phone,
        package_id || null,
        destination,
        start_date,
        peopleCount,
        message
      ]
    );

    res.status(200).json({ message: 'Booking saved successfully!' });
  } catch (err) {
    console.error('Booking error:', err); // log server errors
    res.status(500).json({ message: 'Server error. Booking failed.' });
  }
});

// GET /api/bookings/admin (admin only)
router.get('/admin', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const [rows] = await db.execute(
      `SELECT b.*, p.title AS package_title 
       FROM bookings b 
       LEFT JOIN packages p ON b.package_id = p.id 
       ORDER BY b.created_at DESC`
    );
    res.status(200).json(rows);
  } catch (err) {
    console.error('Admin bookings fetch error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
