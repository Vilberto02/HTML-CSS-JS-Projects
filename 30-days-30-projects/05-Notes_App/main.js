const addBtn = document.querySelector(".add__box");
const popup = document.querySelector(".popup__box");
const closePopup = document.querySelector(".header__popup i");
const titleHeader = document.querySelector(".header__popup h3");
const submitBtn = document.querySelector(".add__btn");
const titleInput = document.getElementById("title-input");
const descriptionInput = document.getElementById("description-textarea");
const editNoteBtn = document.querySelector(".edit");
const deleteNoteBtn = document.querySelector(".delete");

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
let isUpdate = false;
let updateId;

function showNotes() {
  document.querySelectorAll(".note").forEach((note) => note.remove());
  notes.forEach((note, index) => {
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
            <i onclick="showMenu(this)" class="bx bx-dots-vertical-rounded"></i>
            <ul class="menu">
              <li onclick="editNote(${index}, '${note.title}', '${note.description}')"><i class="bx bx-pencil"></i>Editar</li>
              <li onclick="deleteNote(${index})" ><i class="bx bxs-trash"></i>Eliminar</li>
            </ul>
          </div>
        </div>
      </li>
    `;
    addBtn.insertAdjacentHTML("afterend", liTag);
  });
}
showNotes();

function showMenu(element) {
  element.parentElement.classList.add("show");
  document.addEventListener("click", (e) => {
    if (e.target.tagName != "I" || e.target != element) {
      element.parentElement.classList.remove("show");
    }
  });
}

function deleteNote(noteId) {
  console.log(noteId);
  let confirmationDelete = confirm("Quieres eliminar esta nota?");
  if (!confirmationDelete) {
    return;
  }
  notes.splice(noteId, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  showNotes();
}

function editNote(noteId, title, description) {
  console.log(noteId);
  addBtn.click();
  //console.log(notes[noteId].title);
  titleInput.value = title;
  descriptionInput.value = description;
  updateId = noteId;
  isUpdate = true;
  submitBtn.innerHTML = "Update Note";
  titleHeader.innerHTML = "Update a Note";
}

addBtn.addEventListener("click", () => {
  popup.classList.add("show");
  titleInput.focus();
});

closePopup.addEventListener("click", () => {
  titleInput.value = "";
  descriptionInput.value = "";
  isUpdate = false;
  submitBtn.innerHTML = "Add Note";
  titleHeader.innerHTML = "Add a new Note";
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

    if (!isUpdate) {
      notes.push(noteInfo);
    } else {
      isUpdate = false;
      notes[updateId] = noteInfo;
    }
    localStorage.setItem("notes", JSON.stringify(notes));
    titleInput.value = "";
    descriptionInput.value = "";
    closePopup.click();
    showNotes();
    console.log(notes);
  }
});
