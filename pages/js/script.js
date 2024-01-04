// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Get references to DOM elements
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const content = document.getElementById('content');
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

    // Sample transcript data and related functions
   // Sample transcript data and related functions
const transcript = [
    { start: 0, end: 9, text: 'Daniel: Hello and welcome to our podcast with our guest Christopher and Herman.' },
    { start: 9, end: 12, text: '<br><br>Daniel: Today we\'ll be talking about gaming relations.' },
    { start: 12, end: 14, text: '<br><br>Herman: Yeah, so.' },
    { start: 14, end: 15, text: '<br><br>Daniel: Yeah.' },
    { start: 15, end: 24, text: '<br><br>Daniel: So let\'s just start off with maybe what have you guys seen when it comes to gaming relations?' },
    { start: 24, end: 27, text: '<br><br>Cristoffer: Seen a lot?' },
    { start: 27, end: 29.03, text: '<br><br>Herman: Yeah, seen a.' },
    { start: 29.03, end: 30, text: '<br><br>Cristoffer: Lot of weird, weird shit too.' },
    { start: 32, end: 33, text: '<br><br>Herman: Have a few personal stories here and there.' },
    { start: 33, end: 36, text: '<br><br>Herman: You guys want to share your personal stories?' },
    { start: 36, end: 50, text: '<br><br>Daniel: Yeah, I can share some of mine because I\'ve actually met a few people. Yeah. Yeah so one time in the 10th grade, we were on the trip to Auschwitz.' },
    { start: 50, end: 61, text: '<br><br>Daniel: He lived maybe like 30 minutes away, so I just went and said said hi we it was pretty weird.' },
    { start: 61, end: 64, text: '<br><br>Herman: How long did you have you known him for before you met them?' },
    { start: 65, end: 66, text: '<br><br>Daniel: I think it was like 3 years 3.' },
    { start: 66, end: 68, text: '<br><br>Herman: Years three years online.' },
    { start: 68, end: 72, text: '<br><br>Daniel: And yeah, was in his house.' },
    { start: 72, end: 82, text: '<br><br>Daniel: It was kind of weird because his parents were home and they did not expect a guy from a different country in their house, just randomly.' },
    { start: 82, end: 85, text: '<br><br>Herman: That guy from Norway comes meets their kids.' },
    { start: 85, end: 87, text: '<br><br>Cristoffer: On an Auschwitz tour.' },
    { start: 87, end: 94, text: '<br><br>Daniel: And one time a guy from Germany came and visited me.' },
    { start: 94, end: 96, text: '<br><br>Herman: While your parents were home.' },
    { start: 96, end: 101, text: '<br><br>Daniel: No he lived inside of one of my friend \'s house.' },
    { start: 101, end: 104, text: '<br><br>Daniel: He they just put him in the basement.' },
    { start: 104, end: 106, text: '<br><br>Cristoffer: And did their parents know?' },
    { start: 106, end: 125, text: '<br><br>Daniel: His parents, at least his dad did because he brought him there because he was on a business trip and he bought a single room, so his son didn\'t have any place to be. So he just lived in his friend \'s house which was maybe kind of awkward for the guy.' },
    { start: 125, end: 129, text: '<br><br>Herman: What did the his parents think about it?' },
    { start: 129, end: 133, text: '<br><br>Daniel: The guy that owned the house where he?' },
    { start: 133, end: 134, text: '<br><br>Herman: Lived, yeah, both ways.' },
    { start: 134, end: 144, text: '<br><br>Daniel: Well like OK if you have known them for a while yeah but still it\'s kind of weird just putting your son in some stranger stranger \'s house you have only met through.' },
    { start: 144, end: 145, text: '<br><br>Cristoffer: The web.' },
    { start: 145, end: 154, text: '<br><br>Herman: Yeah, I don\'t think my parents would be very, like, interested in me bringing in some random guy from fucking England over to my house and just sleeping there for like one night and just.' },
    { start: 154, end: 156, text: '<br><br>Daniel: No, it wasn\'t even one night it was 2 weeks.' },
    { start: 156, end: 205, text: '<br><br>Daniel: And well, German laws are very different from ours when it comes to drugs and alcohol, so he was not used to not being able to consume that.' },
    { start: 208, end: 210, text: '<br><br>Cristoffer: He was kind of a drunk.' },
    { start: 218, end: 219, text: '<br><br>Daniel: He wanted to be.' },
    { start: 219, end: 227, text: '<br><br>Herman: Christopher, what would your parents think about you bringing someone home from Internet or you\'re meeting just someone in general?' },
    { start: 227, end: 233, text: '<br><br>Cristoffer: They would ask every and any question they could think of because.' },
    { start: 233, end: 239, text: '<br><br>Herman: How do they think like of you being on like having friends online and being in your room like maybe like few hours a day, you know?' },
    { start: 239, end: 256, text: '<br><br>Cristoffer: When I started like the online presence and you know, chatting with people online and they were like kind of curious of what I did because it\'s silent and then you just hear someone screaming online.' },
    { start: 256, end: 263, text: '<br><br>Herman: Screaming or laughing? it\'s like my parents are always like, why do you always have so much fun? what are you doing? Because you\'re my.' },
    { start: 263, end: 264, text: '<br><br>Cristoffer: And you can\'t tell them oh.' },
    { start: 266, end: 280, text: '<br><br>Herman: It\'s too dark of jokes or whatever because my brother, he\'s very competitive person he plays to win like all games he just plays competitive he doesn\'t have like that type of fun. But like when you play something like a creative Fortnite, you get to talk to them and you know, like a lot of fun, you can like have a laugh and.' },
    { start: 280, end: 290, text: '<br><br>Cristoffer: You you think it\'s makes sense when you\'re talking to them, but well, when your parents hear you, they just hear some random word person they don\'t understand it comes.' },
    { start: 290, end: 294, text: '<br><br>Daniel: We may sound so stupid, yeah, but.' },
    { start: 294, end: 343, text: '<br><br>Cristoffer: But like if i would travel you know i think my parents would ask me the location the address you know the people \'s names and all of that and probably their age too, because, you know, I know people that\'s like 20 yeah and I\'m still talking to them but, you know, it\'s, it\'s, it is like a age group you should be in online you shouldn\'t, like, talk to people that\'s 30 years older.' },
    { start: 343, end: 359, text: '<br><br>Herman: You should still hold you to like your type of range like in your social life in real life as well and like because we\'re 16 under 17 which is still hold us to like maybe under maybe under 18 maybe at least under 20.' },
    { start: 359, end: 367, text: '<br><br>Herman: So like O four is like the last two thousand and four people above that i think you\'re you\'re going a bit too far maybe yeah.' },
    { start: 367, end: 376, text: '<br><br>Daniel: When it comes to like, having changes in your house and knowing their name, the Polish guy, I think he still does not know my name.' },
    { start: 376, end: 381, text: '<br><br>Daniel: His parents asked me what my name was and I introduced myself what\'s it?' },
    { start: 381, end: 382, text: '<br><br>Cristoffer: Like confusing to pronounce.' },
    { start: 382, end: 387, text: '<br><br>Daniel: He just never asked me and he still does not know my real name.' },
    { start: 387, end: 389, text: '<br><br>Herman: He just knows your gamertag, he.' },
    { start: 389, end: 393, text: '<br><br>Daniel: Knows my gamertag that\'s what he referred me to but I knew his name.' },
    { start: 393, end: 398, text: '<br><br>Daniel: One of his friends told me it\'s just on free will.' },
    { start: 398, end: 415, text: '<br><br>Daniel: So yeah, I knew who I was visiting, but he did not know who basically was in his house, which is like you should probably do some research before letting a stranger into your house.' },
    { start: 415, end: 421, text: '<br><br>Cristoffer: One thing is like when I\'m online and talking to people, like I have a like I\'m a part of a like friend group in Brazil or something.' },
    { start: 421, end: 429, text: '<br><br>Herman: Brazil. Brazil.' },
    { start: 429, end: 430, text: '<br><br>Cristoffer: Yeah.' },
    { start: 430, end: 435, text: '<br><br>Daniel: Thank you for listening to our podcast, Thumbs Up.' }
    // Add more entries as needed
];


    // Function to create transcript markup
    function createTranscriptMarkup() {
        const transcriptContainer = document.getElementById('transcript-container');
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
        const transcriptContainer = document.getElementById('transcript-container');
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
});
