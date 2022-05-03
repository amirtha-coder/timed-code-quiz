// add scores and users and render div and textcontent
const mainElement = document.getElementById("main");

const valuesFromLs = () => {
  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  // a for loop to create a list for the high scores object
  for (let i = 0; i < highScores.length; i += 1) {
    // create div called values
    const values = document.createElement("div");
    values.setAttribute("class", "ul-container");
    // create a ul
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    li1.setAttribute("type", "text");
    li1.textContent =
      "initials = " +
      highScores[i].initials +
      " score = " +
      highScores[i].score;
    console.log("working");

    // append div to main and append ul to values
    // append li to ul
    ul.append(li1);
    values.append(ul);
    mainElement.append(values);
    console.log(li1);
  }
};
// go back to previous webpage
const handleOnClick = () => {
  window.history.back();
};

// add event listener
const clearLeaderBoard = () => {
  // clear on local storage
  localStorage.clear();
  window.location.reload();
  valuesFromLs();
};

// add event listener
// target go back button
document.getElementById("go-back").addEventListener("click", handleOnClick);

// on load initialise LS
window.onload = valuesFromLs();

// target clear highscores button
const clear = document.getElementById("clear-highscores");
clear.addEventListener("click", clearLeaderBoard);
