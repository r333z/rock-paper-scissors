// Global variables for round wins start
let humanScore = 0;
let compScore = 0;

// Computer choice
// Computer selects a one of the available choices
// Choice is the randomized and returned
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randIndex = Math.floor(Math.random() * 3);
  return choices[randIndex];
} 

// Player inputs a selection
// Prompt loops until player chooses correctly.
function getHumanChoice() {
  const choice = ['rock', 'paper', 'scissors'];
  let selectedChoice;

  while(true) {
    let selectedChoice = prompt("Rock, paper, or scissors.. Choose wisely")
  if (choice.includes(selectedChoice.toLowerCase())) {
    return selectedChoice.toLowerCase();
  } else {
    alert("Invalid choice. Please enter rock, paper, or scissors")
  }
  }
}
// Round logic for game
// playRound function calls functions getHumanChoice and getComputerChoice
// and then loops them until one of the conditions is met
function playRound(humanChoice, compChoice) {
  humanChoice = getHumanChoice().toLowerCase();
  compChoice = getComputerChoice().toLowerCase();

  if (humanChoice === compChoice) {
  return "It's a tie";
  }
  else if ((humanChoice === 'rock' && compChoice === 'scissors' ) ||
     (humanChoice === 'paper' && compChoice === 'rock') ||
     (humanChoice === 'scissors' && compChoice === 'paper'))
  {
    return `You win. ${humanChoice} beats ${compChoice}.`;
  }
    else {
      return `You lose. ${compChoice} beats ${humanChoice}.`;
    }
    }

console.log(playRound());