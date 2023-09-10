
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



    const compChoices = ["Rock", "paper", "Scissors", "Spock", "Lizard"]; {
        random = Math.floor(Math.random() * compChoices.length);
        var userD = (random, compChoices[random])
    };

    if (userC === userD) {
        console.log("draw")
    } else console.log("not a draw");
    console.log(userC);
    console.log(userD);
    document.getElementById("result").innerHTML = "Computer Chooses: " + userD.toString();
}













