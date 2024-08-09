const image = document.getElementById("cover"),
  background = document.getElementById("bg-img"),
  title = document.getElementById("song__title"),
  artist = document.getElementById("song__artist"),
  currentTimeEl = document.getElementById("current-time"),
  durationEl = document.getElementById("duration"),
  progress = document.getElementById("progress"),
  playerProgress = document.getElementById("progress-bar"),
  prevBtn = document.getElementById("prev"),
  playBtn = document.getElementById("play"),
  nextBtn = document.getElementById("next");

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

function changeMusic(direction) {
  musicIndex = (musicIndex + direction + songs.length) % songs.length;
  loadMusic(songs[musicIndex]);
  playMusic();
}
/*
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}*/

function updateProgressBar() {
  const { duration, currentTime } = music;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;

  const formatTime = (time) => String(Math.floor(time)).padStart(2, "0");

  durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(
    duration % 60
  )}`;
  console.log(durationEl);
  currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(
    currentTime % 60
  )}`;
  console.log(durationEl);
  /*
  durationEl.textContent = formatTime(duration);
  currentTimeEl.textContent = formatTime(currentTime);*/
}

function setProgressBar(e) {
  const width = playerProgress.clientWidth;
  const clickX = e.clientX - playerProgress.getBoundingClientRect().left;
  music.currentTime = (clickX / width) * music.duration;
}

playBtn.addEventListener("click", togglePlay);
prevBtn.addEventListener("click", () => changeMusic(-1));
nextBtn.addEventListener("click", () => changeMusic(1));
music.addEventListener("ended", () => changeMusic(1));
music.addEventListener("timeupdate", updateProgressBar);
playerProgress.addEventListener("click", setProgressBar);

loadMusic(songs[musicIndex]);
