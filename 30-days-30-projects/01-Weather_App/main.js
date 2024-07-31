const apiKey = "";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status != 200) {
      alert("Ciudad no encontrada");
      console.log(response.status);
      return;
    }

    let data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML =
      Math.round(data.main.temp) + " °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".country").innerHTML = data.sys.country;

    console.log(data);
    console.log(response.status);
  } catch (error) {
    console.error("Error de red: ", error);
    alert("Hubo un problema al acceder a la red. Por favor, intente de nuevo");
  }
}

/* Se presiona el boton */
searchBtn.addEventListener("click", () => {
  checkIsEmpty(searchBox);
});

/* Busqueda con el teclado*/
searchBox.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    checkIsEmpty(searchBox);
  }
});

function checkIsEmpty(input) {
  if (input.value == "") {
    alert("Ingrese el nombre de la ciudad");
  } else {
    checkWeather(input.value);
  }
}

const allSekeleton = document.querySelectorAll(".skeleton");

/*Se dispara cuando el documento HTML ha sido completamente cargado y analizado */
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    allSekeleton.forEach((item) => {
      item.classList.remove("skeleton");
    });
  }, 2000); // 2 segundos de retraso
});

/*
Forma de cambiar imagenes:

const icon = document.queryselector(".clase__img");

icon.src= "ruta/otra/imagen";


*/
