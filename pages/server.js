const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Define a route for the articles page
app.get('/articles', (req, res) => {
  res.sendFile(path.join(__dirname, 'articles.html'));
});

// Define a route for the podcast page
app.get('/podcast', (req, res) => {
  res.sendFile(path.join(__dirname, 'podcast.html'));
});

// Define a route for the podcast2 page
app.get('/podcast2', (req, res) => {
  res.sendFile(path.join(__dirname, 'podcast.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
