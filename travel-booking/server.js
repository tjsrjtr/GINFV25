const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'data', 'bookings.json');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

function readBookings() {
  if (!fs.existsSync(DATA_FILE)) return [];
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
}
function writeBookings(bookings) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(bookings, null, 2));
}

app.post('/api/bookings', (req, res) => {
  const { name, email, destination, date, passengers } = req.body;
  if (!name || !email || !destination || !date || !passengers)
    return res.status(400).json({ error: 'All fields are required.' });
  const bookings = readBookings();
  const newBooking = { id: Date.now().toString(), name, email, destination, date, passengers: parseInt(passengers), createdAt: new Date().toISOString() };
  bookings.push(newBooking);
  writeBookings(bookings);
  res.status(201).json(newBooking);
});

app.get('/api/bookings', (req, res) => res.json(readBookings()));

app.get('/api/bookings/:id', (req, res) => {
  const b = readBookings().find(b => b.id === req.params.id);
  if (!b) return res.status(404).json({ error: 'Not found.' });
  res.json(b);
});

app.put('/api/bookings/:id', (req, res) => {
  const bookings = readBookings();
  const i = bookings.findIndex(b => b.id === req.params.id);
  if (i === -1) return res.status(404).json({ error: 'Not found.' });
  const { name, email, destination, date, passengers } = req.body;
  bookings[i] = { ...bookings[i], name, email, destination, date, passengers: parseInt(passengers) };
  writeBookings(bookings);
  res.json(bookings[i]);
});

app.delete('/api/bookings/:id', (req, res) => {
  const bookings = readBookings();
  const filtered = bookings.filter(b => b.id !== req.params.id);
  if (filtered.length === bookings.length) return res.status(404).json({ error: 'Not found.' });
  writeBookings(filtered);
  res.json({ message: 'Deleted.' });
});

app.listen(PORT, () => {
  console.log(`✈️  Server running at http://localhost:${PORT}`);
});