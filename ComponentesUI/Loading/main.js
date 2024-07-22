const dots = document.querySelector(".loading__dots");

const addAnimate = () => {
  /*Añadiendo la clase de animacion*/
  dots.classList.add("animate");

  setTimeout(() => {
    /*Se quita o remueve la clase */
    dots.classList.remove("animate");

    setTimeout(() => {
      /*Vuelve a ejecutarse la funcion */
      addAnimate();
    }, 100); //100 ms == 0.1 segundos
  }, 2600); //2600 milisegundos == 2.6 segundos
};
addAnimate();
