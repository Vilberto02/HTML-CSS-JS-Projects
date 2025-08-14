# Conceptos básicos - JavaScript

```JavaScript
const addBtn = document.querySelector(".className");
const addIcon = document.querySelector(".classIcon");

function name(){
  console.log("Hola mundo");
}

addBtn.addEventListener("click", () => {
  addIcon.classList.toggle("show");
})

name();
```

```JavaScript
console.log("Hola ...");

function name(){
  console.log("");
  try{

  }catch(e){
    console.error("Error: "+e);
  }
}
```

## `var` vs `let`

### Variable de ambito global

- Se usa `var`.
- Si declarabas una variable con var dentro de un función, esta variable podía ser usada fuera de la función.
- Es global pese a que se declaran en funciones o condicionales.

### Variable de ambito de bloque

- Se usa `let`.
- La variable podía solo funcionar dentro de una función, si esta es declarada en dicha función.
- La variable existe en un bloque definido.
- Bloque es lo que esta entre llaves.

## Funciones

- Son consideradas objetos.
- Fragmentos de código.
- Anidamiento de funciones.
