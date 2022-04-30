// global declarations
const questions = [];
let questionIndex = 0;
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
  // target start section
  const startSection = document.getElementById(start - section);
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

const validateAnswer = () => {
  // get answer clicked from user
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
  // get value from input
  const initials = document.getElementById("initials").value;

  if (initials) {
  } else {
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

const renderTimerSection = () => {
  // use HTML as guide and build in JS
  // append section to main
};

const renderQuestionSection = () => {
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
  // append div to #question-section
};

const renderForm = () => {
  // use HTML as guide and build in JS
  // append section to main
  // add submit event handler to form
};

const renderQuizCompleteSection = () => {
  // use HTML as guide and build in JS
  // append section to main
};

const startQuiz = () => {
  console.log("startQuiz");
  // remove start section

  // start timer
  startTimer();

  // render timer section
  // render question section
};

// add event listeners
document.getElementById("start-btn").addEventListener("click", startQuiz);
window.onload().addEventListener();
// add document on load event listener
// add start button click event listener
