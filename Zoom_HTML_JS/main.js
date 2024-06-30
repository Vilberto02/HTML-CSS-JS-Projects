/*let scale = 1,
  panning = false,
  pointX,
  pointY,
  start = { x: 0, y: 0 },
  zoom = document.getElementById("zoom");

console.log("Hola mundo");
console.log(alert("Prueba del funcionamiento de Javascript"));

function setTransform() {
  zoom.style.transform =
    "translate(" + pointX + "px, " + pointY + "px) scale(" + scale + ")";
}

zoom.onmousedown = function (e) {
  e.preventDefault();
  start = { x: e.clientX - pointX, x: e.clientY - pointY };
  panning = true;
};

zoom.onmouseup = function (e) {
  panning = false;
};

zoom.onmousemove = function (e) {
  e.preventDefault();

  if (!panning) {
    return;
  }

  pointX = e.clientX - start.x;
  pointY = e.clientY - start.y;
  setTransform();
};

zoom.onwheel = function (e) {
  e.preventDefault();
  let xs = (e.clientX - pointX) / scale;
  let ys = (e.clientY - pointY) / scale;
  let delta = e.deltaY ? e.deltaY : -e.wheelDelta;

  delta > 0 ? (scale *= 1.2) : (scale /= 1.2);

  pointX = e.clientX - xs * scale;
  pointY = e.clientY - ys * scale;

  setTransform();
};*/

const zoomElement = document.querySelector(".zoom");
let zoom = 1;
const ZOOM_SPEED = 0.06;
let isDragging = false;
let startX, startY, scrollLeft, scrollTop;

zoomElement.addEventListener("mousedown", (e) => {
  e.preventDefault();
  isDragging = true;
  startX = e.pageX - zoomElement.offsetLeft;
  startY = e.pageY - zoomElement.offsetTop;
  scrollLeft = zoomElement.scrollLeft;
  scrollTop = zoomElement.scrollTop;
  zoomElement.style.cursor = "grabbing"; // Cambiar cursor mientras se arrastra
});

zoomElement.addEventListener("mouseup", () => {
  isDragging = false;
  zoomElement.style.cursor = "grab"; // Restaurar cursor al soltar
});

zoomElement.addEventListener("mouseleave", () => {
  isDragging = false;
  zoomElement.style.cursor = "grab"; // Restaurar cursor al salir del contenedor
});

zoomElement.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  const x = e.pageX - zoomElement.offsetLeft;
  const y = e.pageY - zoomElement.offsetTop;
  const walkX = (x - startX) * 2; // Ajustar velocidad de arrastre
  const walkY = (y - startY) * 2; // Ajustar velocidad de arrastre
  zoomElement.scrollLeft = scrollLeft - walkX;
  zoomElement.scrollTop = scrollTop - walkY;
});
/*
document.addEventListener("wheel", function (e) {
  if (e.deltaY > 0) {
    zoomElement.style.transform = `scale(${(zoom += ZOOM_SPEED)})`;
  } else {
    zoomElement.style.transform = `scale(${(zoom -= ZOOM_SPEED)})`;
  }
});*/
