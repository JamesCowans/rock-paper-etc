
document.getElementById("rocksButton").addEventListener("click", playGame);
document.getElementById("paperButton").addEventListener("click", playGame);
document.getElementById("scissorsButton").addEventListener("click", playGame);
document.getElementById("lizardButton").addEventListener("click", playGame);
document.getElementById("spockButton").addEventListener("click", playGame);


function playGame(gameType) {
    if (this.getAttribute("data-type") === "spock") {
        console.log("Spocky Spock Spock");

    } else if (this.getAttribute("data-type") === "paper") {
        console.log("flat Tree Stuff");
    } else if (this.getAttribute("data-type") === "rock") {
        console.log("keeps a rolling");
    } else if (this.getAttribute("data-type") === "scissors") {
        console.log("stabby twins");
    } else if (this.getAttribute("data-type") === "lizard")
        console.log("maybe a gecko");

}




