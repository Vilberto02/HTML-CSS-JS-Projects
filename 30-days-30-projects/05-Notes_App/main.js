const addBtn = document.querySelector(".add__box");
const popup = document.querySelector(".popup__box");
const closePopup = document.querySelector(".header__popup i");
const submitBtn = document.querySelector(".add__btn");
const titleInput = document.getElementById("title-input");
const descriptionInput = document.getElementById("description-textarea");

const notes = JSON.parse(localStorage.getItem("notes") || "[]");
let dateObj = new Date();
const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Setiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

function showNotes() {
  document.querySelectorAll(".note").forEach((note) => note.remove());
  notes.forEach((note) => {
    let liTag = `
      <li class="note">
        <div class="details">
          <h3>${note.title}</h3>
          <p>
            ${note.description}
          </p>
        </div>
        <div class="bottom__content">
          <p>${note.date}</p>
          <div class="settings">
            <i class="bx bx-dots-vertical-rounded"></i>
          </div>
        </div>
      </li>
    `;
    addBtn.insertAdjacentHTML("afterend", liTag);
  });
}
showNotes();

addBtn.addEventListener("click", () => {
  popup.classList.add("show");
});

closePopup.addEventListener("click", () => {
  popup.classList.remove("show");
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (titleInput.value == "") {
    console.log("condicional - Titulo vacio");
  } else {
    let day = dateObj.getDate(),
      month = months[dateObj.getMonth()],
      year = dateObj.getFullYear();
    let noteInfo = {
      title: titleInput.value,
      description: descriptionInput.value,
      date: `${month} ${day}, ${year}`,
    };
    notes.push(noteInfo);
    localStorage.setItem("notes", JSON.stringify(notes));
    titleInput.value = "";
    descriptionInput.value = "";
    closePopup.click();
    showNotes();
    console.log(notes);
  }
});
