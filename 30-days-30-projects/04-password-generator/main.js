const inputBox = document.getElementById("input-box");
const lessBtn = document.querySelector(".amount__less");
const moreBtn = document.querySelector(".amount__more");
const uppercaseBtn = document.getElementById("uppercase-btn");
const numberBtn = document.getElementById("numbers-btn");
const symbolBtn = document.getElementById("symbols-btn");
const generateBtn = document.querySelector(".generate");
const generateInput = document.getElementById("input-generate");
const copyBtn = document.querySelector(".copy");

let options = {
  uppercase: "A B C D E F G H I J K L M N O P Q R S T U V W X Z",
  lowercase: "a b c d e f g h i j k l m n o p q r s t u v w x z",
  numbers: "0 1 2 3 4 5 6 7 8 9",
  symbols: "/ * - + . , { } [ ] $ % & ( ) = ! # _ ^",
};

let configuration = {
  characters: parseInt(inputBox.value),
  uppercase: true,
  lowercase: true,
  numbers: true,
  symbols: true,
};

lessBtn.addEventListener("click", () => {
  if (configuration.characters > 4) {
    configuration.characters--;
    //console.log(configuration.characters);
    inputBox.value = configuration.characters;
  } else {
    alert("Número mínimo de caracteres 4");
  }
});

moreBtn.addEventListener("click", () => {
  configuration.characters++;
  inputBox.value = configuration.characters;
  //console.log(configuration.characters);
});

[uppercaseBtn, numberBtn, symbolBtn].forEach((btn) => {
  btn.addEventListener("click", () => {
    //console.log(btn.id);
    toggleOptions(btn);
  });
});

function toggleOptions(btn) {
  btn.classList.toggle("false");
  btn.firstElementChild.classList.toggle("bx-check");
  btn.firstElementChild.classList.toggle("bx-x");

  switch (btn.id) {
    case "uppercase-btn":
      configuration.uppercase = !configuration.uppercase;
      break;
    case "symbols-btn":
      configuration.symbols = !configuration.symbols;
      break;
    case "numbers-btn":
      configuration.numbers = !configuration.numbers;
      break;
  }
  console.log(
    "uppercase: " +
      configuration.uppercase +
      "\nnumbers: " +
      configuration.numbers +
      "\nsymbols: " +
      configuration.symbols
  );
}

generateBtn.addEventListener("click", () => {
  generatePassword();
});

function generatePassword() {
  let charactersTemp = "";
  let password = "";

  for (property in configuration) {
    if (configuration[property] == true) {
      charactersTemp += options[property] + " ";
    }
  }
  charactersTemp = charactersTemp.trim();
  charactersTemp = charactersTemp.split(" ");

  for (let i = 0; i < configuration.characters; i++) {
    password =
      password +
      charactersTemp[Math.floor(Math.random() * charactersTemp.length)];
  }
  generateInput.value = password;
  console.log(password);
}

copyBtn.addEventListener("click", () => {
  copyPassword();
});

function copyPassword() {
  generateInput.select();
  navigator.clipboard
    .writeText(generateInput.value)
    .then(() => {
      alert("Texto copiado al portapapeles!");
    })
    .catch((err) => {
      console.error("No se pudo copiar el texto: ", err);
    });
}

generatePassword();
