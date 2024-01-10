// this file only exists because it was lazy to make the transcript and video change without breaking
// When the DOM content is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get references to DOM elements
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const content = document.getElementById('content');
    const transcriptContainer = document.getElementById('transcript-container');
    const yourVideo = document.getElementById('yourVideo');

    // Retrieve font size and dark mode status from local storage or use defaults
    let currentFontSize = localStorage.getItem('fontSize') || 16;
    let isDarkModeEnabled = localStorage.getItem('darkMode') === 'enabled';

    // Set initial font size
    content.style.fontSize = currentFontSize + 'px';

    // Enable dark mode if it was previously enabled
    if (isDarkModeEnabled) {
        enableDarkMode();
        darkModeToggle.checked = true;
    }

    // Event listener for dark mode toggle
    darkModeToggle.addEventListener('change', function () {
        // Toggle dark mode when the switch changes
        if (darkModeToggle.checked) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });

    // Function to enable dark mode
    function enableDarkMode() {
        body.style.backgroundColor = '#333';
        body.style.color = '#fff';
        content.style.fontSize = currentFontSize + 'px';
        localStorage.setItem('darkMode', 'enabled');
    }

    // Function to disable dark mode
    function disableDarkMode() {
        body.style.backgroundColor = '';
        body.style.color = '';
        content.style.fontSize = currentFontSize + 'px';
        localStorage.setItem('darkMode', null);
    }

    // Event listener for increasing font size
    document.getElementById('biggerText').addEventListener('click', function () {
        currentFontSize = parseInt(currentFontSize) + 1;
        content.style.fontSize = currentFontSize + 'px';
        localStorage.setItem('fontSize', currentFontSize);
    });

    // Event listener for decreasing font size
    document.getElementById('smallerText').addEventListener('click', function () {
        currentFontSize = parseInt(currentFontSize) - 1;
        content.style.fontSize = currentFontSize + 'px';
        localStorage.setItem('fontSize', currentFontSize);
    });

   // Sample transcript data
const transcript = [
    { start: 0, end: 18, text: 'Daniel: Okay, so welcome back to the podcast. This time well be having about scams. This time we dont have Herman, but we have only Christopher. So do you know anything about phishing scams? Because that is the topic of today.<br><br>'},
    { start: 18, end: 19, text: 'Cristoffer: Not really.'  },
    { start: 19, end: 80, text: 'Daniel: Okay, so phishing scams is when you believe something is true, like, lets say a news article, and you click it and it says login to read more. And by that, I would have access to your username and password. Well, thats one of the things phishing scams is. There is an actual definition, which is more universal, but I dont know it by any memory. Yeah, but the way it works is social engineering. You have trust in a prestigious news article, and youre like, oh, I need to log in. I got logged out. Okay, Im going to log in. And that happens<br><br>' },
    { start: 80, end: 88, text: '<br><br>Cristoffer: What kind of protections can you use for social engineering?' },
    { start: 88, end: 111, text: '<br><br>Daniel: Well, you can use two fa. Its two factor authorization. So if you even do get my username and password, you still have to put in a six digit code most of the time to even log in. Theres also some backup codes and that stuff, but thats more for account recovery.' },
    { start: 111, end: 115, text: '<br><br>Cristoffer: Yeah!' },
    { start: 115, end: 122, text: '<br><br>Daniel: Well, by knowing the definition of phishing. Now, have you ever seen anything like that?' },
    { start: 122, end: 169, text: '<br><br>Cristoffer: Ive heard about it, but I havent experienced it. One friend of mine talked a lot about it. He helped a friend gain access or to his computer after he clicked on the link. That seemed like professional and reasonable, like to gym. But then computer got hacked because the link took him to a different website.' },
    { start: 169, end: 243, text: '<br><br>Daniel: Yeah, so that usually happens. Its a redirect. One time I found out how to access peoples webcams on their laptop through Google search engine. And some of them are redirects to more adult websites, which is, well, kind of annoying when you just get redirected, like ten times. And one of them just. Is that the easiest ones to access are the public ones. Because public cams are public. They have little to no security, and you just have access. If you know where it is and what type it is, you can just search it up and find it. So one time we were watching a security camera in Rome, which is just a normal bright day in Rome with cars driving by.' },
    { start: 243, end: 256, text: '<br><br>Cristoffer: Whats the worst thing that could happen if you were to bite on a phishing scam, though? Like click the link?' },
    { start: 256, end: 301, text: '<br><br>Daniel: Well, the worst ones are probably bank related stuff, so you lose money sometimes when its like, at least in norwegian things to pay taxes and stuff, you have to put in your Social Security number and everything. So identity theft. And, well, identity theft is a big problem because somebody could commit a crime under your identity. You go to the police station, somebody stole my identity. They dont believe you. You go to jail. You also need proof of them stealing your identity, because if you report it after a crime has happened, it could be suspicious. Like youre trying to dodge a crime by just lying.' },
    { start: 301, end: 309, text: '<br><br>Cristoffer: Do you know if there are any laws that is about phishing scams or to prevent them?' },
    { start: 309, end: 325, text: '<br><br>Daniel: Lots of laws for all cyber attacks. Most of them are either a fine for, like, more money than you stole and sometimes even jail time.' },
    { start: 325, end: 331, text: '<br><br>Cristoffer: Yeah.' },
    { start: 331, end: 381, text: '<br><br>Daniel: Like, one of the biggest phishing scams that could have happened was a program called Pegasus, which I thought was very interesting. It was developed by a group called NSO, and it was a spyware that spies on your phone and looks at what you do. And that stuff, if they were to do anything with the passwords and that stuff they got would be a very big data reach. But the way it spread was every time, or its a no interaction file. So it corrupts like, other files, and you send it to other people and it spreads. It was very big. One of the other ways you could get it is by spam mail.' },
    { start: 381, end: 385, text: '<br><br>Cristoffer: How did they prevent it?' },
    { start: 385, end: 401, text: '<br><br>Daniel: In the end, somebody found it, then they shut their lines. No, I think they either made a pay for the license or shut the license off. I think the license for operating it was like $16,000 a month or more.' },
    { start: 401, end: 402, text: '<br><br>Cristoffer: Yeah.' },
    { start: 402, end: 455, text: '<br><br>Daniel: So they had a hefty fine for what they did. Its a hacking organization. I dont even think they got. They know who is in there. But you could make, like, a spyware or keylogger that spreads through a botnet with no interaction. Would have to be very experienced, but thats a possibility, and you cant stop it. Big targets are more likely for them to happen. But if somebody were to, like, want vengeance or something, they could have accomplished it.' },
    { start: 455, end: 462, text: '<br><br>Cristoffer: Have you ever helped someone that gotten into phishing scam?' },
    { start: 462, end: 512, text: '<br><br>Daniel: Yeah, one of them wanted. Well, when I was younger, one of my friends wanted free Robux. So he wrote in his username and password. Then they changed his email. They told him, if you want to get it back, heres a tutorial on how to do it. So they sent him a file. He got it. He got a military grade encryption on his pc with a ransomware, which also drive jumped his pc. A few years later, something similar happens, and I managed to decrypt it, but he had to repair his pc because, well, his hardware was destroyed due to the virus. Any other questions?' },
    { start: 512, end: 515, text: '<br><br>Cristoffer: No, Not Really' },
    { start: 515, end: 529, text: '<br><br>Daniel: Yeah, so thats all we have for today. Thank you for joining us on this podcast, and see you later. Bye.' },
    // Add more entries as needed
];

    // Function to create transcript markup
    function createTranscriptMarkup() {
        transcript.forEach((entry, index) => {
            const span = document.createElement('span');
            span.innerHTML = entry.text;
            span.setAttribute('data-start', entry.start);
            span.classList.add('transcript-word');
            span.addEventListener('click', () => seekTo(entry.start));
            transcriptContainer.appendChild(span);

            if (index < transcript.length - 1) {
                const space = document.createTextNode(' ');
                transcriptContainer.appendChild(space);
            }
        });
    }

    // Function to seek to a specific time in the video
    function seekTo(time) {
        yourVideo.currentTime = time;
    }

    // Function to update the transcript based on the current video time
    function updateTranscript() {
        const currentTime = yourVideo.currentTime;
        const entry = findTranscriptEntry(currentTime);

        // Clear and recreate transcript markup
        if (transcriptContainer) {
            transcriptContainer.innerHTML = '';
            createTranscriptMarkup();
        }

        // Highlight the current transcript entry
        highlightTranscriptEntry(entry);
    }

    // Function to find the transcript entry for the current time
    function findTranscriptEntry(currentTime) {
        for (const entry of transcript) {
            if (entry.start <= currentTime && currentTime <= entry.end) {
                return entry;
            }
        }
        // Return the last entry if no match is found
        return transcript[transcript.length - 1];
    }

    // Function to highlight the current transcript entry
    function highlightTranscriptEntry(entry) {
        const transcriptWords = document.querySelectorAll('.transcript-word');
        transcriptWords.forEach(word => {
            word.style.backgroundColor = ''; // Reset background color
        });

        // Highlight the current entry if it exists
        if (entry) {
            const transcriptWord = document.querySelector(`[data-start="${entry.start}"]`);
            if (transcriptWord) {
                // Set background color with slight transparency
                transcriptWord.style.backgroundColor = 'rgba(102, 178, 255, 0.5)';
            }
        }
    }

    // Event listener for video time update
    yourVideo.addEventListener('timeupdate', updateTranscript);

    // Initial creation and update of the transcript
    createTranscriptMarkup();
    updateTranscript();

    // Initial creation of the YouTube video markup
    createYouTubeVideoMarkup();

    // YouTube API script
    function onYouTubeIframeAPIReady() {
        // Create an instance of the YouTube player
        player = new YT.Player('yourVideo', {
            events: {
                'onStateChange': onPlayerStateChange
            }
        });
    }

});
