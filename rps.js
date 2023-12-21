let playerSelection;
let playerScore = 0;
let compScore = 0;

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const output = document.querySelector('.output')

rock.addEventListener('click', () => {
    playerSelection = 'Rock';
    let computerSelection = getCompChoice();
    play(playerSelection, computerSelection);
});

paper.addEventListener('click', () => {
    playerSelection = 'Paper';
    let computerSelection = getCompChoice();
    play(playerSelection, computerSelection);
});

scissors.addEventListener('click', () => {
    playerSelection = 'Scissors';
    let computerSelection = getCompChoice();
    play(playerSelection, computerSelection);
});













//Functions 

function getCompChoice() {
    let number = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (number == 1){
        return "Rock";
    }
    else if (number == 2) {
        return "Paper";
    }
    else if (number == 3) {
        return "Scissors";
    }
    else {
        return "null";
    }
}

function play(playerSelection, computerSelection) {
    let outcome;
    if (playerSelection === computerSelection) {
        outcome = "Draw, player and computer both chose " + playerSelection
            + "!";
        
    }
    else if (computerSelection == "Rock" && playerSelection == "Paper"){
        outcome = "Win, player chose " + playerSelection
            + " while computer chose " + computerSelection + "!";
    }
    else if (computerSelection == "Paper" && playerSelection == "Scissors")
        outcome = "Win, player chose " + playerSelection
        + " while computer chose " + computerSelection + "!";
    else if (computerSelection == "Scissors" && playerSelection == "Rock"){
        outcome = "Win, player chose " + playerSelection
            + " while computer chose " + computerSelection + "!";
    }
    else if (computerSelection == "Scissors" && playerSelection == "Paper"){
        outcome = "Loser, player chose " + playerSelection
            + " while computer chose " + computerSelection + "!";
    }
    else if (computerSelection == "Paper" && playerSelection == "Rock"){
        outcome = "Loser, player chose " + playerSelection
            + " while computer chose " + computerSelection + "!";
    }
    else if (computerSelection == "Rock" && playerSelection == "Scissors"){
        outcome = "Loser, player chose " + playerSelection
            + " while computer chose " + computerSelection + "!";
    }
    else {
        outcome = "Error"
    }
    console.log(outcome);
    output.textContent = outcome;

}

// function game() {
//     let result;
//     for (let i = 0; i < 5; i++) {
//         let computerSelection = getCompChoice();
//         result = play(playerSelection, computerSelection);
//         if (result.includes("Win")) {
//             playerScore++;
//         }
//         else if (result.includes("Loser")) {
//             compScore++;
//         }
//         console.log(playerScore + " - " + compScore);
//         console.log(result);
//     }
    // console.log(playerScore + " - " + compScore);
    // return result;
// }
// console.log(game());
// game();