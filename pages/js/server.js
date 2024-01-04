// server.js
const express = require('express');
const fetch = import('node-fetch').then((module) => module.default);
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/youtube-api', async (req, res) => {
    const apiKey = 'YOUR_API_KEY'; // Replace with your YouTube API key
    const videoId = req.query.videoId;
    const url = `https://www.youtube.com/youtubei/v1/log_event?alt=json&key=${apiKey}&videoId=${videoId}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching video details:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
