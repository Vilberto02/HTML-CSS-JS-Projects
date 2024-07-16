const toggleBtn = document.querySelector(".nav__toggle");
const toggleBtnIcon = document.querySelector(".nav__toggle i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
};
