const express = require("express");
const router = express.Router();
const db = require("../db");

// POST /api/bookings - save a new booking
router.post("/", async (req, res) => {
  try {
    const {
      user_name,
      email,
      phone,
      package_id,
      destination,
      start_date,
      people,
      message,
    } = req.body;

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
        people,
        message,
      ]
    );

    res.json({ message: "Booking saved" });
  } catch (err) {
    console.error("Error inserting booking:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// GET /api/bookings/admin - fetch all bookings
router.get("/admin", async (req, res) => {
  try {
    const [rows] = await db.execute(
      `SELECT b.*, p.title as package_title 
       FROM bookings b 
       LEFT JOIN packages p ON b.package_id = p.id 
       ORDER BY b.created_at DESC`
    );

    console.log("Bookings fetched:", rows); // ✅ rows is now defined
    res.json(rows);
  } catch (err) {
    console.error("Error fetching bookings:", err);
    res.status(500).json({ message: "Error fetching bookings" });
  }
});

module.exports = router;
