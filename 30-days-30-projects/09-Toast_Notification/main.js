const successBtn = document.getElementById("success"),
  errorBtn = document.getElementById("error"),
  warningBtn = document.getElementById("warning"),
  infoBtn = document.getElementById("info"),
  notificacionts = document.querySelector(".notifications");

successBtn.addEventListener("click", () => {
  let type = "succes";
  let icon = "bx bxs-check-circle";
  let title = "Success";
  let text = "This is a success toast";

  createToast(type, icon, title, text);
});

warningBtn.addEventListener("click", () => {
  let type = "warning";
  let icon = "bx bxs-error";
  let title = "Warning";
  let text = "This is a warning toast";

  createToast(type, icon, title, text);
});

infoBtn.addEventListener("click", () => {
  let type = "info";
  let icon = "bx bxs-info-circle";
  let title = "Info";
  let text = "This is a info toast";

  createToast(type, icon, title, text);
});

errorBtn.addEventListener("click", () => {
  let type = "error";
  let icon = "bx bxs-error-circle";
  let title = "Error";
  let text = "This is a error toast";

  createToast(type, icon, title, text);
});

function createToast(type, icon, title, text) {
  let newToast = document.createElement("div");
  newToast.innerHTML = `
    <div class="toast ${type}">
        <i class="${icon}" id="icon-toast"></i>
        <div class="content">
          <h3 id="title">${title}</h3>
          <p id="description">${text}</p>
        </div>
        <i class="bx bx-x" id="close"></i>
      </div>
  `;
  notificacionts.appendChild(newToast);
  newToast.timeOut = setTimeout(() => newToast.remove(), 5000);
}
