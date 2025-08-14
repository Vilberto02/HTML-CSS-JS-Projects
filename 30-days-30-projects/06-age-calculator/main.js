const inputBox = document.getElementById("input-box"),
  calculateBtn = document.getElementById("calculate-btn"),
  yearSpan = document.getElementById("year"),
  monthSpan = document.getElementById("month"),
  daySpan = document.getElementById("day"),
  detailContent = document.querySelector(".detail");

// El usuario solo puede seleccionar hasta la fecha actual
inputBox.max = new Date().toISOString().split("T")[0];

calculateBtn.addEventListener("click", () => {
  calculateDate();
});

function calculateDate() {
  let birthDate = new Date(inputBox.value + "T00:00:00");
  let date = new Date();
  let oldDate = {
    day: birthDate.getDate(),
    month: birthDate.getMonth() + 1 /*De 0 a 11 */,
    year: birthDate.getFullYear(),
  };
  let currentDate = {
    day: date.getDate(),
    month: date.getMonth() + 1 /*De 0 a 11 */,
    year: date.getFullYear(),
  };

  let age = {
    year: currentDate.year - oldDate.year,
    month: currentDate.month - oldDate.month,
    day: currentDate.day - oldDate.day,
  };

  // Cuando sea negativo. Ejemplo: 10 - 15
  // No se cumplio un mes completo
  if (age.day < 0) {
    age.month -= 1;
    age.day += new Date(currentDate.year, currentDate.month, 0).getDate(); // Días en el mes anterior. -5 + 28, 29, 30, 31.
  }

  // Similar al dia
  // No se cumplio un año completo
  if (age.month < 0) {
    age.year -= 1;
    age.month += 12; // Un año tiene 12 meses
  }

  daySpan.textContent = age.day.toString();
  monthSpan.textContent = age.month.toString();
  yearSpan.textContent = age.year.toString();

  detailContent.classList.add("active");

  //console.log(oldDate);
  //console.log(currentDate);
  console.log(age);
}
