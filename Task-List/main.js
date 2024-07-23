/*const startBtn = document.querySelector(".title__important");
const startIcon = document.getElementById("important1");

startBtn.addEventListener("click", importantFunction);

function importantFunction() {
  console.log("Importante");
  startIcon.src = "Assets/start-stufed.svg";
}*/

const startBtn = document.querySelector(".title__important");
const startIcon = document.getElementById("important1");
let isIconStuffed = true;

startBtn.addEventListener("click", importantFunction);

function importantFunction() {
  console.log("Importante");

  if (isIconStuffed) {
    startIcon.src = "Assets/start-line.svg";
    isIconStuffed = false;
  } else {
    startIcon.src = "Assets/start-stufed.svg";
    isIconStuffed = true;
  }
}
