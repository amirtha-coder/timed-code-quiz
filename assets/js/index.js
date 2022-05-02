// global declarations

// target start button
const startButton = document.getElementById("start-btn");

// target start section
const startSection = document.getElementById("start-section");

// target main element
const mainElement = document.getElementById("main");

// target the timer section
const timerSection = document.getElementById("timerSection");

let questionIndex = 0;

// object array questions
const questions = [
  {
    title: "1. What does HTML stand for?",
    answer: [
      "Hypertext Markup Language",
      "Hypertag Markup Language",
      "How to move a link",
      "Hypercool text markup language",
    ],
    correctAnswer: "Hypertext Markup Language",
  },
  {
    title: "2. What does CSS stand for?",
    answer: [
      "Cascading Stylesheet",
      "Cool Styling Shines",
      "Create Style Sheet",
      "Cascading StyledSheets",
    ],
    correctAnswer: "Cascading Stylesheet",
  },
  {
    title: "3. What does js stand for?",
    answer: ["javascript", "jellosandwitch", "javascore", "jqueryscript"],
    correctAnswer: "javascript",
  },
  {
    title: "What does DOM stand for",
    answer: [
      "Document Object Model",
      "Data Object model",
      "Data Operation Model",
      "Document Objects Model",
    ],
    correctAnswer: "Document Object Model",
  },
  {
    title: "5. What does API stand for?",
    answer: [
      "Application Programming Interface",
      "Apparent Programming Interface",
      "Application Pre Interface",
      "Application Programming Information",
    ],
    correctAnswer: "Application Programming Interface",
  },
];
// const renderTimerSection = () => {
//   const timerSection = document.createElement("section");
//   timerSection.setAttribute("class", "timer");
//   timerSection.setAttribute("id", "timerSection");

//   const timerDiv = document.createElement("div");
//   timerDiv.textContent = "Time:";
//   timerDiv.setAttribute("id", "timerDiv");
//   timerSection.append(timerDiv);

//   const timer = document.createElement("span");
//   timer.getAttribute("id", "timer");
//   timerDiv.append(timer);
//   timerSection.append(timerDiv);

//   mainElement.append(timerSection);
//   console.log("Welldone");
//   // use HTML as guide and build in JS
//   // append section to main
// };
let timerValue = 10 * questions.length;
// let timerValue = 8;
let quizComplete = false;
const timerElement = document.getElementById("timer");

const startTimer = () => {
  timerElement.textContent = timerValue;
  // declare function to execute every 1 sec
  const countdown = () => {
    timerValue -= 1;
    timerElement.textContent = timerValue;
    if (
      timerValue === 0 ||
      quizComplete == true ||
      questionIndex >= questions.length
    ) {
      // removeQuestionSection();
      renderForm();
      clearInterval(timer);
      console.log("time working");
    }
    // decrement timer value
    // if quizComplete is true then stop timer
    // check if timer reaches 0
    // if true render game over
  };
  const timer = setInterval(countdown, 1000);
  // setInterval of 1000ms (1s)
};

const onLoad = () => {
  const dataFromLS = localStorage.getItem("highScores");

  if (dataFromLS) {
    return JSON.parse(highScores);
  } else {
    return [];
  }
  // initialise local storage

  // check if highscores exists in LS
  // if false then set highscores to empty array in LS
};

const removeStartSection = () => {
  console.log("remove start section");
  startSection.remove();
};

const validateAnswer = (event) => {
  // get answer clicked from user
  const currentQuestion = questions[questionIndex];
  const target = event.target;
  const currentTarget = (event.currentTarget = currentQuestion.correctAnswer);

  console.log(currentTarget);

  // get the correct answer for question
  if (target.tagName === "LI") {
    const value = target.getAttribute("data-option");
    console.log(value);

    // compare the 2 answers
    if (value !== currentTarget) {
      // if incorrect subtract 5 seconds from timerValue
      timerValue = timerValue - 5;
      renderAlert();
      // if incorrect render error alert with message and status
      // set timeout for 500ms and then go to next question
      myTimeout = setTimeout(5000);
      console.log("incorrect answer");
    } else {
      if (questionIndex < questions.length - 1) {
        // if question is not last question then increment question index and render next question
        removeQuestionSection();
        questionIndex += 1;
        renderQuestionSection();
        document.getElementById("alert").remove();
        setTimeout(5000);
      } else {
        // if question is last question set quizComplete to true and then render form
        quizComplete === true;
        removeQuestionSection();
        renderForm();
      }
    }
  }
};

const handleFormSubmit = (event) => {
  event.preventDefault();

  // get value from input
  const initials = document.getElementById("initials").value;

  if (initials) {
    const highScores = {
      initials,
      score,
    };

    localStorage.setItem("itemStored", JSON.stringify(highScores));
  } else {
    alert("please write your initials to view high score");
    // check if empty then render error alert with message and status
  }

  // if not empty then create the score object
  // {
  //   fullName: "Bob Smith",
  //   score: 25
  // }
  // push score object to LS
  // render quizCompleteSection
};

// const renderQuizCompleteSection = () => {
//   // use HTML as guide and build in JS
//   // append section to main
// };

const renderQuestionSection = () => {
  const currentQuestion = questions[questionIndex];
  // create section
  const section = document.createElement("section");
  section.setAttribute("id", "answer-option-section");
  section.setAttribute("data-answer", currentQuestion.correctAnswer);
  // create h2
  const h2 = document.createElement("h2");
  h2.textContent = currentQuestion.title;
  // create ul
  const ul = document.createElement("ul");
  ul.setAttribute("class", "answer-options");
  console.log(ul.setAttribute);

  const li1 = document.createElement("li");
  li1.setAttribute("class", "answer-option");
  li1.setAttribute("data-option", currentQuestion.answer[0]);
  li1.textContent = currentQuestion.answer[0];
  console.log(currentQuestion.answer);

  const li2 = document.createElement("li");
  li2.setAttribute("class", "answer-option");
  li2.setAttribute("data-option", currentQuestion.answer[1]);
  li2.textContent = currentQuestion.answer[1];

  const li3 = document.createElement("li");
  li3.setAttribute("class", "answer-option");
  li3.setAttribute("data-option", currentQuestion.answer[2]);
  li3.textContent = currentQuestion.answer[2];

  const li4 = document.createElement("li");
  li4.setAttribute("class", "answer-option");
  li4.setAttribute("data-option", currentQuestion.answer[3]);
  li4.textContent = currentQuestion.answer[3];
  console.log("please work");

  ul.append(li1, li2, li3, li4);
  // append h2 and ul to section
  section.append(h2, ul);
  // append question section to main element
  mainElement.append(section);
  // add event listener on question section
  section.addEventListener("click", validateAnswer);
  // use HTML as guide and build in JS
  // append section to main
  // add click event listener on #question-section
};

// const renderGameOver = () => {
//   timerSection.remove();
//   // removeQuestionSection();
//   const gameOverSection = createElement("section");
//   const formDiv1 = document.createElement("div");
//   formDiv1.setAttribute("class", "fill-name-input");
//   formDiv1.textContent = "Score = ";
//   gameOverSection.append(formDiv1);
//   mainElement.append(gameOverSection);
//   // use HTML as guide and build in JS
//   // append section to main

const renderAlert = () => {
  // use HTML as guide and build in JS
  const alert = document.createElement("div");
  document.getElementById("answer-option-section").append(alert);
  alert.textContent = "Sorry, wrong answer!";
  alert.setAttribute("class", "alert");
  alert.setAttribute("id", "alert");
  // append div to #question-section
};

const renderForm = () => {
  // use HTML as guide and build in JS
  console.log("form");
  //create section
  const sectionForm = document.createElement("section");
  sectionForm.setAttribute("class", "form-section");
  // header
  const quizCompleteHeader = document.createElement("h2");
  quizCompleteHeader.setAttribute("class", "gameover");
  quizCompleteHeader.textContent = "Hooray! 🎉 you have completed the quiz";
  sectionForm.append(quizCompleteHeader);
  // create form
  const form = document.createElement("form");

  const formDiv1 = document.createElement("div");
  formDiv1.setAttribute("class", "fill-name-input");
  const score = timerValue;
  formDiv1.textContent = "Score = " + score;
  form.append(formDiv1);
  timerValue === 0;
  timerSection.remove();

  //create label
  const label = document.createElement("label");
  label.textContent = "Your initials:";

  // create input
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", "initials");
  input.setAttribute("name", "initial");
  input.setAttribute("placeholder", "type here");

  // create div
  const buttonDiv = document.createElement("div");
  // create btn
  const button = document.createElement("button");
  button.setAttribute("class", "submitbtn");
  button.setAttribute("id", "submit-btn");
  button.setAttribute("type", "submit");
  button.textContent = "Submit";

  // // create div
  // const alertDiv = document.createElement("div");
  form.append(label);
  form.append(input);
  buttonDiv.append(button);
  form.append(buttonDiv);
  sectionForm.append(form);
  mainElement.append(sectionForm);

  button.addEventListener("click", handleFormSubmit);
  // append section to main
  // add submit event handler to form
};

const removeQuestionSection = () => {
  document.getElementById("answer-option-section").remove();
};

const startQuiz = () => {
  console.log("startQuiz");
  // start timer
  startTimer();

  removeStartSection();
  // remove start section
  // renderTimerSection();
  // render timer section

  renderQuestionSection();
  // render question section
};

// add event listeners
document.getElementById("start-btn").addEventListener("click", startQuiz);
// window.onload().addEventListener();
// add document on load event listener
// add start button click event listener
