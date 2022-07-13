// global declarations

// target start button
const startButton = document.getElementById("start-btn");

// target start section
const startSection = document.getElementById("start-section");

// target main element
const mainElement = document.getElementById("main");

// target the timer section
const timerSection = document.getElementById("timerSection");

const sectionForm = document.createElement("section");

const alert1 = document.createElement("div");

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

let timerValue = 10 * questions.length;
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
      removeQuestionSection();
      renderForm();
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

const onLoad = () => {
  // initialise local storage
  const dataFromLS = JSON.parse(localStorage.getItem("highScores"));
  // check if highscores exists in LS
  // if false then set highscores to empty array in LS
  if (!dataFromLS) {
    localStorage.setItem("highScores", JSON.stringify([]));
  }
};

const removeStartSection = () => {
  startSection.remove();
};

const validateAnswer = (event) => {
  // get answer clicked from user
  const currentQuestion = questions[questionIndex];
  const target = event.target;
  const currentTarget = (event.currentTarget = currentQuestion.correctAnswer);

  // get the correct answer for question
  if (target.tagName === "LI") {
    const value = target.getAttribute("data-option");

    // compare the 2 answers
    if (value !== currentTarget) {
      // if incorrect subtract 5 seconds from timerValue
      timerValue = timerValue - 5;
      renderAlert();
      // if incorrect render error alert with message and status
      // set timeout for 500ms and then go to next question
      myTimeout = setTimeout(5000);
    } else {
      if (questionIndex < questions.length - 1) {
        // if question is not last question then increment question index and render next question
        removeQuestionSection();
        questionIndex += 1;
        renderQuestionSection();
        alert1.remove();
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

  // high score object that will be pushed into array
  if (initials) {
    const highScore = {
      initials,
      score: timerValue,
    };
    // push score object to LS
    const highScores = JSON.parse(localStorage.getItem("highScores"));
    highScores.push(highScore);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    sectionForm.remove();
    renderSuccess();

    console.log("input removed");
  } else {
    alert("please write your initials to view high score");
    // check if empty then render error alert with message and status
  }
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

  // create li1, li2, li3, li4
  const li1 = document.createElement("li");
  li1.setAttribute("class", "answer-option");
  li1.setAttribute("data-option", currentQuestion.answer[0]);
  li1.textContent = currentQuestion.answer[0];

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

  ul.append(li1, li2, li3, li4);
  // append h2 and ul to section

  section.append(h2, ul);
  // append  section to main element
  mainElement.append(section);
  // append section to main

  // add event listener on question section
  section.addEventListener("click", validateAnswer);
  // append section to main
};

const renderAlert = () => {
  document.getElementById("answer-option-section").append(alert1);
  alert1.textContent = "Sorry, wrong answer!";
  alert1.setAttribute("class", "alert");
  alert1.setAttribute("id", "alert");
  // append div to #question-section
};
const renderSuccess = () => {
  const success = document.createElement("div");
  mainElement.append(success);
  success.textContent =
    " ✅ It was a success! Click button below to view highscores";
  success.setAttribute("class", "success");
  const viewHighScores = document.createElement("div");
  viewHighScores.setAttribute("class", "highscoresEnd");
  const highScoreLink = document.createElement("a");
  highScoreLink.append(document.getElementById("highscores"));
  console.log("hello");
  viewHighScores.append(highScoreLink);
  mainElement.append(viewHighScores);
  // success.append(document.getElementById("highscores"));

  mainElement.append(viewHighScores);
};

const renderForm = () => {
  // use HTML as guide and build in JS

  //create section
  if (document.getElementById("form-section")) {
    return;
  }
  sectionForm.setAttribute("class", "form-section");
  sectionForm.setAttribute("id", "form-section");
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
  label.textContent = "Your initials: ";

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
  // start timer
  startTimer();
  // remove start section
  removeStartSection();

  // render question section
  renderQuestionSection();
};

// add event listeners
// add document on load event listener
// add start button click event listener
document.getElementById("start-btn").addEventListener("click", startQuiz);
window.onload = onLoad();
