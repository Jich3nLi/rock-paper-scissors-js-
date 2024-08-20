function getComputerChoice() {
    let ComputerChoice = Math.floor(Math.random(3));
    if (ComputerChoice == 0) {
        return "rock"
    }
    else if (ComputerChoice == 1) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

//console.log(getComputerChoice())

function getHumanChoice() {
    return prompt("Please Enter Your Choice (Rock/ Paper/ Scissors):")   
}

//console.log(getHumanChoice())
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(HumanChoice, ComputerChoice) {
        HumanChoice = HumanChoice.toLowerCase();
        if (
            (HumanChoice === "rock" && ComputerChoice === "scissors") ||
            (HumanChoice === "paper" && ComputerChoice === "rock") ||
            (HumanChoice === "scissors" && ComputerChoice === "paper")
        ) { 
            humanScore++;
        }
        else if (
            (HumanChoice === "scissors" && ComputerChoice === "rock") ||
            (HumanChoice === "rock" && ComputerChoice === "paper") ||
            (HumanChoice === "paper" && ComputerChoice === "scissors")
        ) {
            computerScore++
        }
    }

    for(let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        alert(`You win!!!\nYour score: ${humanScore}\nComputer score: ${computerScore}`);
    } else if (humanScore < computerScore) {
        alert(`The computer wins.\nYour score: ${humanScore}\nComputer score: ${computerScore}`);
    } else {
        alert(`It's a tie.\nYour score: ${humanScore}\nComputer score: ${computerScore}`);
    }    
}

playGame();






