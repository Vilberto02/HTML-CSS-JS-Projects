const image = document.getElementById("cover"),
  background = document.getElementById("bg-img"),
  title = document.getElementById("song__title"),
  artist = document.getElementById("song__artist"),
  currentTimeEl = document.getElementById("curent-time"),
  durationEl = document.getElementById("duration"),
  progress = document.getElementById("progress"),
  playerProgress = document.getElementById("progress-bar"),
  prevBtn = document.getElementById("prev"),
  playBtn = document.getElementById("play"),
  nextBtn = document.getElementById("mnxt");

const music = new Audio();

let songs = [
  {
    id: 1,
    cover: "media/1-thumbail.jpg",
    title: "Pumped Up Kicks",
    artist: "Foster The People",
    path: "media/1-FosterThePeople_PumpedUpKicks.mp3",
  },
  {
    id: 2,
    cover: "media/2-thumbail.jpg",
    title: "Grateful",
    artist: "NEFFEX",
    path: "media/2-Grateful_NEFFEX.mp3",
  },
];

let musicIndex = 0,
  isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
}

function playMusic() {
  isPlaying = true;

  playBtn.classList.replace("bx-play", "bx-pause");

  playBtn.setAttribute("title", "Pause");
  music.play();
}

function pauseMusic() {
  isPlaying = false;

  playBtn.classList.replace("bx-pause", "bx-play");

  playBtn.setAttribute("title", "Play");
  music.pause();
}

function loadMusic(song) {
  music.src = song.path;
  title.textContent = song.title;
  artist.textContent = song.artist;
  image.src = song.cover;
  background.src = song.cover;
}

playBtn.addEventListener("click", togglePlay);
loadMusic(songs[1]);
