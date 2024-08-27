// Define the array of song objects
let arr = [
  {
    songName: "Over the Rainbow",
    url: "./Assets/song/Somewhere Over the Rainbow - The Wizard of Oz (1_8) Movie CLIP (1939) HD.mp3",
    img: "./Assets/Img/OIP.jpg",
  },
  {
    songName: "As Time Goes By",
    url: "./Assets/song/Casablanca - As Time Goes By - Original Song by Sam (Dooley Wilson).mp3",
    img: "./Assets/Img/R.jpg",
  },
  {
    songName: "Singin' in the Rain",
    url: "./Assets/song/Singin in the Rain (Full Song_Dance - 52) - Gene Kelly - Musical Romantic Comedies - 1950s Movies.mp3",
    img: "./Assets/Img/R (1).jpg",
  },
  {
    songName: "The Sound of Music",
    url: "./Assets/song/The Sound of Music  - THE SOUND OF MUSIC (1965).mp3",
    img: "./Assets/Img/OIP (1).jpg",
  },
];

// Initialize an empty string for HTML content
let clutter = "";

// Iterate over the array and construct HTML for each song
arr.forEach((song) => {
  clutter += `
    <div class="card">
        <div class="firstp">
            <img src="${song.img}" alt="Album cover of ${song.songName}">
            <h2>${song.songName}</h2>
        </div>
        <h6>2:43</h6> 
    </div>`;
});

// Insert the HTML content into the DOM
document.querySelector("#reco").innerHTML = clutter;

Let  audio = document.getElementById("audio");
// const playPauseBtn = document.getElementById("playPauseBtn");
// const stopBtn = document.getElementById("stopBtn");

let volumeControl = document.getElementById("volumeControl");
let progressControl = document.getElementById("progressControl");

// playPauseBtn.addEventListener('click', () => {
//     if (audio.paused) {
//         audio.play();
//         playPauseBtn.textContent = 'Pause';
//     } else {
//         audio.pause();
//         playPauseBtn.textContent = 'Play';
//     }
// });

// stopBtn.addEventListener('click', () => {
//     audio.pause();
//     audio.currentTime = 0;
//     playPauseBtn.textContent = 'Play';
// });

volumeControl.addEventListener("input", () => {
  audio.volume = volumeControl.value;
});

progressControl.addEventListener("input", () => {
  audio.currentTime = (progressControl.value / 100) * audio.duration;
});

audio.addEventListener("timeupdate", () => {
  progressControl.value = (audio.currentTime / audio.duration) * 100;
});

// unused

// Select the elements
// const playButton = document.getElementById('play');
// const pauseButton = document.getElementById('pause');
// const forwardButton = document.getElementById('forward');
// const backwardButton = document.getElementById('backward');

// Assume there is an audio element in your actual project
// const audioElement = new Audio();
// This line should be replaced with actual audio setup

// function to handle playing an audio track
// function playAudio() {
// Set audio source (replace with your audio file)
//   audioElement.src = 'path/to/your/audio/file.mp3'; // Replace with your audio file path
//   audioElement.play();
// }

//  function to handle pausing an audio track
// function pauseAudio() {
//   audioElement.pause();
// }

// //  function to handle skipping forward
// function skipForward() {
//   audioElement.currentTime += 10; // Skip forward by 10 seconds
// }

// function to handle skipping backward
// function skipBackward() {
//   audioElement.currentTime -= 10; // Skip backward by 10 seconds
// }

// Add event listeners to buttons
// playButton.addEventListener('click', playAudio);
// pauseButton.addEventListener('click', pauseAudio);
// forwardButton.addEventListener('click', skipForward);
// backwardButton.addEventListener('click', skipBackward);
