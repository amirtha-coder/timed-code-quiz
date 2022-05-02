// target go back button
document.getElementById("go-back").addEventListener("click", handleOnClick);
// add event listener

// target clear highscores button
document
  .getElementById("clear-highscores")
  .addEventListener("click", clearLeaderBoard);

// add event listener
const clearLeaderBoard = () => {
  // clear on local storage
  return localStorage.getItem("highScores").clear();
};
