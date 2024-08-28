function getComputerChoice() {
    let ComputerChoice = Math.floor(3 * Math.random());
    if (ComputerChoice == 0) {
        return "rock";
    }
    else if (ComputerChoice == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

//console.log(getComputerChoice());

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(HumanChoice) {
        const ComputerChoice = getComputerChoice();
        HumanChoice = HumanChoice.toLowerCase();
        if (
            (HumanChoice === "rock" && ComputerChoice === "scissors") ||
            (HumanChoice === "paper" && ComputerChoice === "rock") ||
            (HumanChoice === "scissors" && ComputerChoice === "paper")
        ) { 
            humanScore++;
            alert(`You win this round! ${HumanChoice} beats ${ComputerChoice}.`);
        }
        else if (
            (HumanChoice === "scissors" && ComputerChoice === "rock") ||
            (HumanChoice === "rock" && ComputerChoice === "paper") ||
            (HumanChoice === "paper" && ComputerChoice === "scissors")
        ) {
            computerScore++;
            alert(`You lose this round. ${ComputerChoice} beats ${HumanChoice}.`);
        }
        else{
            alert(`It's a tie! Both chose ${HumanChoice}.`)
        }

        if (humanScore == 5) {
            alert(`You win!!!\nYour score: ${humanScore}\nComputer score: ${computerScore}`);
        } else if (computerScore == 5) {
            alert(`The computer wins.\nYour score: ${humanScore}\nComputer score: ${computerScore}`);
        } 
    }

    let rock_btn = document.createElement("button");
    rock_btn.textContent = "Rock";
    rock_btn.addEventListener("click", () => playRound("rock"));
    document.body.appendChild(rock_btn);

    let paper_btn = document.createElement("button");
    paper_btn.textContent = "Paper";
    paper_btn.addEventListener("click", () => playRound("paper"));
    document.body.appendChild(paper_btn);

    let scissors_btn = document.createElement("button");
    scissors_btn.textContent = "Scissors";
    scissors_btn.addEventListener("click", () => playRound("scissors"));
    document.body.appendChild(scissors_btn);
}

playGame();











