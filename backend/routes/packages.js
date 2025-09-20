const express = require('express');
const router = express.Router();
const db = require('../db');
const { authenticateToken, requireAdmin } = require('../middleware/auth');

// GET /api/packages
router.get('/', async (req, res) => {
  const [rows] = await db.execute('SELECT * FROM packages ORDER BY id DESC');
  res.json(rows);
});

// GET /api/packages/:id
router.get('/:id', async (req, res) => {
  const [rows] = await db.execute('SELECT * FROM packages WHERE id = ?', [req.params.id]);
  if (!rows.length) return res.status(404).json({ message: 'Not found' });
  res.json(rows[0]);
});

// POST /api/packages (admin only)
router.post('/', authenticateToken, requireAdmin, async (req, res) => {
  const { title, description, price, duration, image } = req.body;
  const [result] = await db.execute('INSERT INTO packages (title, description, price, duration, image) VALUES (?, ?, ?, ?, ?)', [title, description, price, duration, image]);
  res.json({ id: result.insertId });
});

module.exports = router;
