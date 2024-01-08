const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use('/public', express.static('public'));

// Define a route for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Define a generic route to handle other HTML pages
app.get('/:page', (req, res) => {
  const page = req.params.page;

  // Check if the requested file has a valid HTML extension
  if (path.extname(page) !== '.html') {
    // Invalid request, send 404
    res.status(404).send('Page not found');
    return;
  }

  const filePath = path.join(__dirname, page);

  console.log('Attempting to serve:', filePath);

  if (fs.existsSync(filePath)) {
    console.log('File exists. Sending...');
    res.sendFile(filePath);
  } else {
    console.log('File does not exist.');
    res.status(404).send('Page not found');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
