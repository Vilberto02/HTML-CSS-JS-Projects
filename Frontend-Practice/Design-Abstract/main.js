/*---------------------------------------------------------------- SEARCH - EVENT LISTENER */

const searchCloseBtn = document.getElementById("close-search");
const searchBtn = document.getElementById("search-icon");

searchCloseBtn.addEventListener("click", closeSearch);
searchBtn.addEventListener("click", searchFunction);

/*---------------------------------------------------------------- SEARCH - HANDLE EVENT*/

function searchFunction() {
  let searchMenu = document.querySelector(".container__search");
  searchMenu.style.display = "none";

  if (searchMenu.style.display == "none") {
    searchMenu.style.display = "block";
  }
}

function closeSearch() {
  let searchMenu = document.querySelector(".container__search");
  searchMenu.style.display = "block";
  if (searchMenu.style.display == "block") {
    searchMenu.style.display = "none";
  }
}

/*---------------------------------------------------------------- DROPDOWN - EVENT LISTENER */

const toggleMenuBtn = document.querySelector(".menu__icon");
const toggleBtnIcon = document.querySelector(".menu__icon i");
const dropDownMenu = document.querySelector(".dropdown__menu");

toggleMenuBtn.addEventListener("click", dropDownFunction);

/*---------------------------------------------------------------- DROPDOWN - HANDLE LISTENER */

function dropDownFunction() {
  const isOpen = dropDownMenu.classList.toggle("open");

  toggleBtnIcon.classList = isOpen ? "bx bx-x" : "bx bx-menu";
}
