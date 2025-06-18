let result = document.querySelector("div");
let final_result = document.querySelector(".result");
let btns = document.querySelectorAll("button");

// Extracting the computer's choice of rock, paper, or scissors
function getComputerChoice(){
    let random_num = Math.floor(Math.random() * 3);
    if (random_num == 1) {
        return "Scissors";
    } 
    else if (random_num == 2) {
        return "Rock";
    } 
    else {
        return "Paper";
    }
}

// Extracting the player's choice of rock, paper, or scissors
// function getHumanChoice(){
//     return prompt("Rock, Paper, or Scissors");
// }

// Initialize score variables
let computer_score = 0;
let human_score = 0;

// Plays one round of rock, paper, scissors
function playRound(humanChoice, computerChoice) {
    humanChoice_cap = humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase()
    if (humanChoice_cap === computerChoice) {
        result.textContent = "You tied this round."
    } else if ((humanChoice_cap === "Rock" && computerChoice === "Scissors") || 
               (humanChoice_cap === "Paper" && computerChoice === "Rock") || 
               (humanChoice_cap === "Scissors" && computerChoice === "Paper")) {
        human_score ++;
        result.textContent = "You win this round!";
    }
    else if ((humanChoice_cap === "Scissors" && computerChoice === "Rock") || 
             (humanChoice_cap === "Rock" && computerChoice === "Paper") || 
             (humanChoice_cap === "Paper" && computerChoice === "Scissors")){
        computer_score ++;
        result.textContent = "You lose this round.";
    }
    else {
        result.textContent = "Invalid output. The round is wasted.";
    }
  }
  
// const humanSelection = getHumanChoice();
// let computerSelection = getComputerChoice();
  
// playRound(humanSelection, computerSelection);

btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let target = e.target;
        let humanSelection = '';
        let computerSelection = '';
        switch (target.id) {
            case 'rock':
                humanSelection = "rock";
                break;
            case 'paper':
                humanSelection = "paper";
                break;
            case 'scissors':
                humanSelection = "scissors";
                break;
        }

        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);

        if (computer_score === 5) {
            final_result.textContent = "The computer wins the entire game.";
        } else if (human_score === 5) {
            final_result.textContent = "Congratulations! You win the entire game.";
        }
    })
});