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
function getHumanChoice(){
    return prompt("Rock, Paper, or Scissors");
}

// Initialize score variables
let computer_score = 0;
let human_score = 0;

// Plays one round of rock, paper, scissors
function playRound(humanChoice, computerChoice) {
    humanChoice_cap = humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase()
    if (humanChoice_cap === computerChoice) {
        alert("You tied.")
    } else if ((humanChoice_cap === "Rock" && computerChoice === "Scissors") || 
               (humanChoice_cap === "Paper" && computerChoice === "Rock") || 
               (humanChoice_cap === "Scissors" && computerChoice === "Paper")) {
        alert("You win!");
        human_score ++;
    }
    else if ((humanChoice_cap === "Scissors" && computerChoice === "Rock") || 
             (humanChoice_cap === "Rock" && computerChoice === "Paper") || 
             (humanChoice_cap === "Paper" && computerChoice === "Scissors")){
        alert("You lose.");
        computer_score ++;
    }
    else {
        alert("Invalid output. The round is wasted.");
    }
  }
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);

// Plays 5 rounds and alert the result of the game
function playGame(){
    for (let i=1; i<=5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    alert(`Your score: ${human_score}\n Computer score: ${computer_score}`);
}
  
