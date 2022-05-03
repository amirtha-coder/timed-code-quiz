// add scores and users and render div and textcontent
const mainElement = document.getElementById("main");

const valuesFromLs = () => {
  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  for (let i = 0; i < highScores.length; i += 1) {
    const values = document.createElement("div");
    values.setAttribute("class", "ul-container");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    li1.setAttribute("type", "text");
    li1.textContent =
      "initials = " +
      highScores[i].initials +
      " score = " +
      highScores[i].score;
    console.log("working");
    ul.append(li1);
    values.append(ul);
    mainElement.append(values);
    console.log(li1);
  }
};

const handleOnClick = () => {
  window.history.back();
  window.location = "http://example.com";
};

// add event listener
const clearLeaderBoard = () => {
  // clear on local storage
  localStorage.clear();
  window.location.reload();
  valuesFromLs();
};

// target go back button
document.getElementById("go-back").addEventListener("click", handleOnClick);
// add event listener
window.onload = valuesFromLs();
// target clear highscores button

const clear = document.getElementById("clear-highscores");

clear.addEventListener("click", clearLeaderBoard);
