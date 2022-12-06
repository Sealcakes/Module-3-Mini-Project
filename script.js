var wins = 0;
var ties = 0;
var loses = 0;

function gameLoop() {

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    };
    
    var randomNum = getRandomInt(3);
    
    if (randomNum === 0) {
        var computerChoice = "R";
    } else if (randomNum === 1) {
        var computerChoice = "P";
    } else {
        var computerChoice = "S";
    };
    
    window.alert("Welcome to Rock, Paper, Scissors!");
    
    var userChoice = window.prompt("Choose R, P, or S");
    
    if (userChoice === computerChoice) {
        window.alert("You both chose " + userChoice + ", it's a draw!");
        ties += 1;
    } else if (userChoice === "R" && computerChoice === "S") {
        window.alert("Computer chose S, you win!");
        wins += 1;
    } else if (userChoice === "R" && computerChoice === "P") {
        window.alert("Computer chose P, you lose!");
        loses += 1;
    } else if (userChoice === "P" && computerChoice === "R") {
        window.alert("Computer chose R, you win!");
        wins += 1;
    } else if (userChoice === "P" && computerChoice === "S") {
        window.alert("Computer chose S, you lose!");
        loses += 1;
    } else if (userChoice === "S" && computerChoice === "P") {
        window.alert("Computer chose P, you win!");
        wins += 1;
    } else {
        window.alert("Computer chose R, you lose!");
        loses += 1;
    };

    window.alert("Total wins: " + wins + "\nTotal Ties: " + ties + "\nTotal Loses: " + loses);

    if (window.confirm("Do you want to play again?")) {
        gameLoop();
    } else {
        return;
    };
};

gameLoop();


