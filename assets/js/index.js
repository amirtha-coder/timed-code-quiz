// global declarations

// target start button
const startButton = document.getElementById("start-btn");

// target start section
const startSection = document.getElementById("start-section");

// target main element
const mainElement = document.getElementById("main");

let questionIndex = 0;

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
      "Document Object Model",
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

// let timerValue = 10 * questions.length;
let timerValue = 8;
let quizComplete = false;
const timerElement = document.getElementById("timer");

const onLoad = () => {
  // initialise local storage
  // check if highscores exists in LS
  // if false then set highscores to empty array in LS
};

const removeStartSection = () => {
  console.log("remove start section");
  startSection.remove();
};

const startTimer = () => {
  timerElement.textContent = timerValue;
  // declare function to execute every 1 sec
  const countdown = () => {
    timerValue -= 1;
    timerElement.textContent = timerValue;
    if (timerValue === 0 || quizComplete) {
      clearInterval(timer);
    }
    // decrement timer value
    // if quizComplete is true then stop timer

    // check if timer reaches 0
    // if true render game over
  };
  const timer = setInterval(countdown, 1000);
  // setInterval of 1000ms (1s)
};

const validateAnswer = (event) => {
  // get answer clicked from user
  const target = event.target;
  const currentTarget = event.currentTarget;
  // get the correct answer for question

  // compare the 2 answers

  // if incorrect subtract 5 seconds from timerValue
  // if incorrect render error alert with message and status
  // if correct render success alert with message and status
  // set timeout for 500ms and then go to next question
  // if question is last question set quizComplete to true and then render form
  // if question is not last question then increment question index and render next question
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  // get value from input
  const initials = document.getElementById("initials").value;

  // if (initials) {
  // } else {
  //   // check if empty then render error alert with message and status
  // }

  // if not empty then create the score object
  // {
  //   fullName: "Bob Smith",
  //   score: 25
  // }
  // push score object to LS
  // render quizCompleteSection
};

const renderTimerSection = () => {
  // const timerSection = document.createElement("section");
  // timerSection.setAttribute("class", "timer");
  // const timerDiv = document.createElement("div");
  // timerDiv.textContent("Time:");
  // timerDiv.append("timerspan");
  // timerSection.append("timerDiv");
  // mainElement.append("section");
  // console.log("Welldone");
  // use HTML as guide and build in JS
  // append section to main
};

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
  // TODO: loop over options to create and append li to ul
  const li1 = document.createElement("li");
  li1.setAttribute("class", "answer-option");
  li1.textContent = currentQuestion.answer[0];
  console.log(currentQuestion.answer);
  const li2 = document.createElement("li");
  li2.setAttribute("class", "answer-option");
  li2.textContent = currentQuestion.answer[1];
  const li3 = document.createElement("li");
  li3.setAttribute("class", "answer-option");
  li3.textContent = currentQuestion.answer[2];
  const li4 = document.createElement("li");
  li4.setAttribute("class", "answer-option");
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

const renderGameOver = () => {
  // use HTML as guide and build in JS
  // append section to main
};

const renderAlert = (message, status) => {
  // use HTML as guide and build in JS
  const alert = document.createElement("div");
  section.append("alert");
  // append div to #question-section
};

const renderForm = () => {
  // use HTML as guide and build in JS
  //create section
  const sectionForm = document.createElement("section");
  sectionForm.setAttribute("class", "form-section");
  // create form
  const form = document.createElement("form");
  // create div
  const formDiv1 = document.createElement("div");
  formDiv1.setAttribute("class", "fill-name-input");
  formDiv1.textContent = "Score =";
  form.append(formDiv1);

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

  console.log(formDiv1);

  button.addEventListener("click", handleFormSubmit);
  // append section to main
  // add submit event handler to form
};

const renderQuizCompleteSection = () => {
  // use HTML as guide and build in JS
  // append section to main
};

const startQuiz = () => {
  console.log("startQuiz");

  startTimer();

  removeStartSection();
  // remove start section

  renderQuestionSection();

  // start timer

  // render timer section
  // render question section
};

// add event listeners
document.getElementById("start-btn").addEventListener("click", startQuiz);
// window.onload().addEventListener();
// add document on load event listener
// add start button click event listener
