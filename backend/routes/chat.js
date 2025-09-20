const express = require('express');
const router = express.Router();

const answers = [
  { q: 'hello', a: 'Hello! How can I help with your travel plans today?' },
  { q: 'price', a: 'Prices vary by package — check our Packages page or tell me the destination.' },
  { q: 'book', a: 'To book, go to Packages and click Book Now on a package or use the Booking form.' },
  { q: 'cab', a: 'We provide cab booking as an add-on in many packages.' }
];

router.post('/', (req, res) => {
  const { message } = req.body;
  if (!message) return res.json({ reply: 'Please send a message.' });

  const lower = message.toLowerCase();
  for (const item of answers) {
    if (lower.includes(item.q)) return res.json({ reply: item.a });
  }
  res.json({ reply: 'Sorry I did not understand. You can ask about packages, prices, or booking.' });
});

module.exports = router;
