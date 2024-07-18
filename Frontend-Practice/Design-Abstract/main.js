const toggleMenuBtn = document.querySelector(".menu__icon");
const toggleBtnIcon = document.querySelector(".menu__icon i");
const dropDownMenu = document.querySelector(".dropdown");

toggleMenuBtn.addEventListener("click", dropDownFunction);

function dropDownFunction() {
  const isOpen = dropDownMenu.classList.toggle("open");

  toggleBtnIcon.classList = isOpen ? "bx bx-x" : "bx bx-menu";

  dropDownMenu.style.height = isOpen ? "200px" : "0px";
  dropDownMenu.style.display = isOpen ? "flex" : "none";
}

/*TOGGLE BUSQUEDA*/

function searchFunction() {
  let searchMenu = document.querySelector(".container__search");
  searchMenu.style.display = "none";

  if (searchMenu.style.display == "none") {
    searchMenu.style.display = "flex";
  }
}

function closeSearch() {
  let searchMenu = document.querySelector(".container__search");
  searchMenu.style.display = "flex";
  if (searchMenu.style.display == "flex") {
    searchMenu.style.display = "none";
  }
}
