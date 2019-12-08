const computerChoices = ["rock", "paper", "scissor"];
let userGuess;
let wins = 0;
let losses = 0;
let ties = 0;


let userGuessDisplay = document.getElementById('userGuessDisplay');
let computerGuessDisplay = document.getElementById('computerGuessDisplay');
let winsDisplay = document.getElementById('winsDisplay');
let lossesDisplay = document.getElementById('lossesDisplay');
let tiesDisplay = document.getElementById('tiesDisplay');

let rockButton = document.getElementById('rock').onclick = function () {
    let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    userGuessDisplay.innerHTML = "<p>You chose rock.</p>";
    computerGuessDisplay.innerHTML = "The computer chose " + computerGuess;
    userGuess = "rock";

    if ((userGuess === "rock" && computerGuess === "scissor") ||
        (userGuess === "paper" && computerGuess === "rock") ||
        (userGuess === "scissor" && computerGuess === "paper")) {
        wins++;
        winsDisplay.innerHTML = wins;
        lossesDisplay.innerHTML = losses;
        tiesDisplay.innerHTML = ties;
    } else if (userGuess === computerGuess) {
        ties++;
        winsDisplay.innerHTML = wins;
        lossesDisplay.innerHTML = losses;
        tiesDisplay.innerHTML = ties;
    } else {
        losses++;
        winsDisplay.innerHTML = wins;
        lossesDisplay.innerHTML = losses;
        tiesDisplay.innerHTML = ties;
    }
};

let paperButton = document.getElementById('paper').onclick = function () {
    let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    userGuessDisplay.innerHTML = "<p>You chose paper.</p>";
    computerGuessDisplay.innerHTML = "The computer chose " + computerGuess;
    userGuess = "paper";

    if ((userGuess === "rock" && computerGuess === "scissor") ||
        (userGuess === "paper" && computerGuess === "rock") ||
        (userGuess === "scissor" && computerGuess === "paper")) {
        wins++;
        winsDisplay.innerHTML = wins;
        lossesDisplay.innerHTML = losses;
        tiesDisplay.innerHTML = ties;
    } else if (userGuess === computerGuess) {
        ties++;
        winsDisplay.innerHTML = wins;
        lossesDisplay.innerHTML = losses;
        tiesDisplay.innerHTML = ties;
    } else {
        losses++;
        winsDisplay.innerHTML = wins;
        lossesDisplay.innerHTML = losses;
        tiesDisplay.innerHTML = ties;
    }
};

let scissorButton = document.getElementById('scissor').onclick = function () {
    let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    userGuessDisplay.innerHTML = "<p>You chose scissor.</p>";
    computerGuessDisplay.innerHTML = "The computer chose " + computerGuess;
    userGuess = "scissor";
    if ((userGuess === "rock" && computerGuess === "scissor") ||
        (userGuess === "paper" && computerGuess === "rock") ||
        (userGuess === "scissor" && computerGuess === "paper")) {
        wins++;
        winsDisplay.innerHTML = wins;
        lossesDisplay.innerHTML = losses;
        tiesDisplay.innerHTML = ties;
    } else if (userGuess === computerGuess) {
        ties++;
        winsDisplay.innerHTML = wins;
        lossesDisplay.innerHTML = losses;
        tiesDisplay.innerHTML = ties;
    } else {
        losses++;
        winsDisplay.innerHTML = wins;
        lossesDisplay.innerHTML = losses;
        tiesDisplay.innerHTML = ties;
    }
};