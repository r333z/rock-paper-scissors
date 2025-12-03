// Function which decides the computer's choice
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "Rock";
  } else if (randomNumber === 1) {
    return "Paper";
  } else (randomNumber === 2) 
    return "Scissors";
  }

const computerChoice = getComputerChoice();
console.log(computerChoice);