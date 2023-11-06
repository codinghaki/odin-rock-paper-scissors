const choiceEnum = {
  ROCK: "rock",
  PAPER: "paper",
  SCISSORS: "scissors",
};

const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorButton = document.querySelector("#scissorButton");

rockButton.addEventListener("click", () => {
  updateGame(choiceEnum.ROCK);
});

paperButton.addEventListener("click", () => {
    updateGame(choiceEnum.PAPER);
});

scissorButton.addEventListener("click", () => {
    updateGame(choiceEnum.SCISSORS);
});

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === choiceEnum.ROCK && computerSelection === choiceEnum.SCISSORS) ||
    (playerSelection === choiceEnum.PAPER && computerSelection === choiceEnum.ROCK) ||
    (playerSelection === choiceEnum.SCISSORS && computerSelection === choiceEnum.PAPER)
  ) {
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function updateGame(playerSelection) {
  const computerSelection = getComputerChoice();
  const roundResult = playRound(playerSelection, computerSelection);

  let resultsText = document.querySelector("#resultsText");
  let computerScoreText = document.querySelector("#computerScore");
  computerScoreText.textContent = `Computer score: ${computerScore}`;
  let playerScoreText = document.querySelector("#playerScore");
  playerScoreText.textContent = `Player score: ${playerScore}`;
  resultsText.textContent = roundResult;

  if (playerScore >= 5 || computerScore >= 5) {
    if (playerScore >= 5) {
      resultsText.textContent = "Player wins the whole game!";
    } else {
      resultsText.textContent = "Computer wins the whole game!";
    }
  }
}
