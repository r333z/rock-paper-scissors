// Function which decides the computer's choice
// Give computer choices to select from
// Make those choices random
// Return choices
function getComputerChoice(comChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const randNumber = Math.floor(Math.random() * 3) 
        return choices[randNumber];
    }
// Function that allows the user to input a choice
// Prompt the user with a window with choices
// Return choices to the console
function getHumanChoice() {
    let userInput =  prompt("rock, paper, or scissors.. choose wisely");
    const choices = ['rock', 'paper', 'scissors'];
    let selectedChoice = null;
        if (userInput) {
            const normalInput = userInput.trim().toLowerCase();
        for (const choice of choices) {
            if(choice.toLowerCase() === normalInput) {
                selectedChoice = choice;
                break;

            }
        }
        }
        if (selectedChoice) {
            console.log(`You chose ${selectedChoice}`);
        }
        else {
            console.log("Invalid selection, or no selection made.");
        }
}

getHumanChoice();
