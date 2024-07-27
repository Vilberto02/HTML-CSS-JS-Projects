const questions = [
  {
    question: "¿Cuál es el país más grande y el más pequeño del mundo?",
    answers: [
      { text: "Rusia y Vaticano", correct: true },
      { text: "China y Nauru", correct: false },
      { text: "Canadá y Mónaco", correct: false },
      { text: "Estados Unidos y Malta", correct: false },
    ],
  },
  {
    question: "¿Cuántos litros de sangre tiene una persona adulta?",
    answers: [
      { text: "Tiene entre 2 y 4 litros", correct: false },
      { text: "Tiene entre 4 y 6 litros", correct: true },
      { text: "Tiene 10 litros", correct: false },
      { text: "Tiene 7 litros", correct: false },
    ],
  },
  {
    question: "¿Cuántos decimales tiene el número pi π?",
    answers: [
      { text: "Dos", correct: false },
      { text: "Cien", correct: false },
      { text: "Infinitos", correct: true },
      { text: "Mil", correct: false },
    ],
  },
  {
    question: "El Perú tuvo mas conflictos armados con",
    answers: [
      { text: "Ecuador", correct: true },
      { text: "Colombia", correct: false },
      { text: "Brasil", correct: false },
      { text: "Chile", correct: false },
    ],
  },
];

const askTitle = document.getElementById("ask");
const answersBtn = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Siguiente";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionIndex = currentQuestionIndex + 1;
  askTitle.innerHTML = questionIndex + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(function (answer) {
    const button = document.createElement("button");

    button.innerHTML = answer.text;

    answersBtn.appendChild(button);
    /*Agrega el valor de verdadero al boton correcto, es como colocar que este boton es el correcto */
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

/*Reinicia todas las alternativas de la pregunta anterior para pasar a la siguiente */
function resetState() {
  /*Oculta el boton */
  nextBtn.style.display = "none";
  while (answersBtn.firstChild) {
    answersBtn.removeChild(
      answersBtn.firstChild
    ); /*Elimia a todos los hijos del contenedor. Limpia los hijos de la anterior pregunta */
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  /*Muestra si la respuesta seleccionada es correcta o incorrecta */
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  /*Guarda los elementos hijos del elemento contenedor answer*/
  /*Muestra la respuesta correcta si marco una incorrecta y deshabilita las demas opciones */
  Array.from(answersBtn.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add(
        "correct"
      ); /*Si es correcto, añade nuevamente la clase correct */
    }
    button.disabled = true; /*Deshabilita los botones */
  });
  nextBtn.style.display = "block";
}

function handleNextBtn() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  resetState(); /*Reinicia los elementos hijos del contenedor padre */
  askTitle.innerHTML = `Tu puntuacion es ${score} de ${questions.length}`;
  nextBtn.innerHTML = "Jugar de nuevo"; /*Cambia el texto del boton */
  nextBtn.style.display = "block"; /*Hace visible al boton */
}

nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextBtn();
  } else {
    startQuiz();
  }
});

startQuiz();
