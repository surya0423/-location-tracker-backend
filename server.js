const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/collect', (req, res) => {
  const { latitude, longitude } = req.body;
  console.log('Received Location:', latitude, longitude);
  res.send({ status: 'Location received' });
});

app.get('/', (req, res) => {
  res.send('Location Tracker Backend is running.');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
