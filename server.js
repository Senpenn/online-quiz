const express = require('express');
const cors = require('cors'); // Import CORS
const app = express();
const port = 3001; // Use port 3001

// Dummy user result
const userResult = {
  username: 'User123',
  score: 85,
  quizzesCompleted: 5,
};

// Enable CORS
app.use(cors());

app.get('/api/results', (req, res) => {
  res.json(userResult);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
