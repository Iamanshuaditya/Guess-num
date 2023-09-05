document.addEventListener("DOMContentLoaded", function () {
  const submitGuess = document.getElementById("submitbtn");
  const restart = document.getElementById("reset");
  const previousGuess = document.getElementById("recent-guess");
  const taskList = document.getElementById("taskList");
  let correctNumber = GetRandomNumber();
  let guessStatus = document.getElementById("guess-status");

  submitGuess.addEventListener("click", playGame);
  restart.addEventListener("click", initGame);

  function playGame() {
    const GuessNum = document.getElementById("random").value;
    if (correctNumber > GuessNum) {
      guessStatus.innerHTML = "Your Guess is Too Low!!";
    } else if (GuessNum > correctNumber) {
      guessStatus.innerHTML = "Your Guess is Too High!!";
      guessStatus.style.color = "blue";
    } else if (GuessNum == correctNumber) {
      guessStatus.innerHTML = "Congratulations! You got it right!!!";
      guessStatus.style.color = "green";
    }

    addList(GuessNum);
  }

  function addList(guessedNumber) {
    if (guessedNumber !== "") {
      const listItem = document.createElement("li");
      listItem.textContent = `You Guessed ` + guessedNumber;
      taskList.appendChild(listItem);
      document.getElementById("random").value = "";
    }
  }

  function initGame() {
    taskList.innerHTML = "";
    guessStatus.innerHTML = "";
  }
});

function GetRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}
