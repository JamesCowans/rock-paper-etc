
document.getElementById("rocksButton").addEventListener("click", playGame);
document.getElementById("paperButton").addEventListener("click", playGame);
document.getElementById("scissorsButton").addEventListener("click", playGame);
document.getElementById("lizardButton").addEventListener("click", playGame);
document.getElementById("spockButton").addEventListener("click", playGame);



function playGame(gameType) {
    if (this.getAttribute("data-type") === "spock") {
        var userC = ("spock");

    } else if (this.getAttribute("data-type") === "paper") {
        var userC = ("paper");
    } else if (this.getAttribute("data-type") === "rock") {
        var userC = ("rock");
    } else if (this.getAttribute("data-type") === "scissors") {
        var userC = ("scissors");
    } else if (this.getAttribute("data-type") === "lizard")
        var userC = ("lizard");



    const compChoices = ["rock", "paper", "scissors", "spock", "lizard"]; {
        random = Math.floor(Math.random() * compChoices.length);
        var userD = (random, compChoices[random])


        if ((userC == 'rock' && userD == 'scissors') || (userC == 'rock' && userD == 'lizard')) {
            console.log("You Win!!");
        } else if ((userC == 'paper' && userD == 'rock') || (userC == 'paper' && userD == 'spock')) {
            console.log("You Win!!");
        } else if ((userC == 'scissors' && userD == 'paper') || (userC == 'scissors' && userD == 'lizard')) {
            console.log("You Win!!");
        } else if ((userC == 'lizard' && userD == 'spock') || (userC == 'lizard' && userD == 'paper')) {
            console.log("You Win!!");
        } else if ((userC == 'spock' && userD == 'scissors') || (userC == 'spock' && userD == 'rock')) {
            console.log("You Win!!");
        } else if (userC == userD) {
            console.log("Its a Draw");
        } else console.log("You loose");

    }








    console.log(userC);
    console.log(userD);
    document.getElementById("result").innerHTML = "Computer Chooses: " + userD.toString()

};

