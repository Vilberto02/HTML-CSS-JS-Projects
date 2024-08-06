const generateBtn = document.getElementById("generate");
const inputBox = document.getElementById("input-box");
const qrImg = document.getElementById("qr-img");
const containerImg = document.querySelector(".container__qr");
const apiURL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

generateBtn.addEventListener("click", () => {
  generateQR();
});

function generateQR() {
  let input = inputBox.value;
  if (input == "") {
    inputBox.classList.add("error"); // Añade la clase
    setTimeout(() => {
      inputBox.classList.remove("error"); // Remueve la clase cada 1 segundo
    }, 1000);
  } else {
    qrImg.src = apiURL + input;
    console.log(input);
    containerImg.classList.add("show__img");
    inputBox.value = "";
  }
}
