const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addButton = document.getElementById("add-btn");

addButton.addEventListener("click", addTask);

function addTask() {
  if (inputBox.value == "") {
    alert("Escriba una tarea");
  } else {
    let item = document.createElement("li");
    item.innerHTML = inputBox.value;
    listContainer.appendChild(item);

    let closeIcon = document.createElement("span");
    closeIcon.innerHTML = "\u00d7";
    item.appendChild(closeIcon);

    console.log(inputBox.value);
  }
  inputBox.value = "";
}

inputBox.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
    addTask();
  }
});

listContainer.addEventListener(
  "click",
  function (e) {
    /*target: elemento que disparo el evento (o salio del evento) */
    /*tagName: Devuelve el nombre de la etiqueta del elemento en mayusculas */
    if (e.target.tagName === "LI") {
      /*Elemento clickeado es LI*/
      e.target.classList.toggle(
        "checked"
      ); /*Alterna o cambia entre clases, es como añadir y eliminar en el evento ocurrido*/
      saveData();
    } else if (e.target.tagName === "SPAN") {
      /*Elemento clickeado es SPAN*/
      e.target.parentElement.remove(); /*parentElement: elemento padre del span. remove: elimina el elemento completo del DOM */
      saveData();
    }
  },
  false
);

/*El false indica que el elemento debe de ser manejado en la fase burbuja */

function saveData() {
  localStorage.setItem(
    "data",
    listContainer.innerHTML
  ); /*Almacena el contenido*/
}

function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showData();
