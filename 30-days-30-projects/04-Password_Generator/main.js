const inputBox = document.getElementById("input-box");
const lessBtn = document.querySelector(".amount__less");
const moreBtn = document.querySelector(".amount__more");
const uppercaseBtn = document.getElementById("uppercase-btn");
const numberBtn = document.getElementById("numbers-btn");
const symbolBtn = document.getElementById("symbols-btn");
const generateBtn = document.querySelector(".generate");
const generateInput = document.getElementById("input-generate");

let options = {
  uppercase: false,
  numbers: false,
  symbols: false,
};

const symbolsValue = "/ * - + . , { } [ ] $ % & ( ) = ! #".split(" ");
const uppercaseValue =
  "A B C D E F G H I J K L M N O P Q R S T U V W X Z".split(" ");
const lowercaseValue =
  "a b c d e f g h i j k l m n o p q r s t u v w x z".split(" ");
const numbersValue = "0 1 2 3 4 5 6 7 8 9".split(" ");

lessBtn.addEventListener("click", () => {
  start(inputBox.value, true);
});

moreBtn.addEventListener("click", () => {
  start(inputBox.value, false);
});

function start(input, substract) {
  let value = parseInt(input);
  if (value > 4 && substract) {
    value = value - 1;
    console.log(value);
    inputBox.value = value;
  } else if (!substract) {
    value = value + 1;
    console.log(value);
    inputBox.value = value;
  } else {
    alert("Numero minimo de caracteres 4");
  }
}
/*
uppercaseBtn.addEventListener("click", () => {
  /*const value = uppercaseBtn.innerText.toLowerCase();
  if (value == "si") {
    uppercaseBtn.innerHTML = "No";
    uppercase = true;
  } else {
    uppercaseBtn.innerHTML = "Si";
    uppercase = false;
  }
  console.log(uppercase);*/
/*options(uppercaseBtn, uppercase);
});*/
/*
numberBtn.addEventListener("click", () => {
  options(numberBtn, numbers);
});

symbolBtn.addEventListener("click", () => {
  options(symbolBtn, symbols);
});*/

[uppercaseBtn, numberBtn, symbolBtn].forEach((btn) => {
  btn.addEventListener("click", () => {
    toggleOptions(btn);
  });
});

function toggleOptions(btn) {
  const option = btn.getAttribute("data-option");
  options[option] = !options[option];
  btn.innerText = options[option] ? "No" : "Si";
}

generateBtn.addEventListener("click", () => {
  generatePassword();
});

function generatePassword() {
  const length = parseInt(inputBox.value);
  let characters = [...lowercaseValue];

  if (options.uppercase) characters = characters.concat(uppercaseValue);
  if (options.numbers) characters = characters.concat(numbersValue);
  if (options.symbols) characters = characters.concat(symbolsValue);

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  generateInput.value = password;
}
