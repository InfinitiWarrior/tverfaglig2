// youtube.js
document.addEventListener('DOMContentLoaded', function () {
    const yourVideo = document.getElementById('yourVideo');
    const youtubeVideoId = 'uY4lzNhbPV4'; // Replace with your YouTube video ID

    // Function to fetch video details from the server
    async function fetchVideoDetails(videoId) {
        const apiUrl = `/youtube-api?videoId=${videoId}`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching video details:', error);
            throw error;
        }
    }

    // Function to create YouTube video markup
    function createYouTubeVideoMarkup(videoId) {
        const iframe = document.createElement('iframe');
        iframe.setAttribute('width', '640');
        iframe.setAttribute('height', '360');
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allowfullscreen', '');

        // Fetch video details from the server and set the iframe source
        fetchVideoDetails(videoId)
            .then(videoDetails => {
                iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}`);
                // You can use videoDetails to display additional information on your page if needed
            })
            .catch(error => {
                console.error('Error fetching video details:', error);
            });

        yourVideo.innerHTML = ''; // Clear existing content
        yourVideo.appendChild(iframe);
    }

    // Initial creation of the YouTube video markup
    createYouTubeVideoMarkup(youtubeVideoId);
});
