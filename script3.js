let userScore = 1;
let compScore = 1;
let moves = 14;
let animation = document.querySelector("#mainBox");
const choices = document.querySelectorAll(".choice");
let moveCounter = document.querySelector("#counter");
const generateCompChoice = () => {
    const options = ["Stone", "Paper", "Scissor"];
    let compChoice = Math.floor(Math.random() * 3);
    return options[compChoice];
};
const playGame = (userChoice, generateCompChoice) => {
    if (userChoice === generateCompChoice) {
        document.querySelector("#scoreBoard").innerText = "Game was Draw 😲. Your " + userChoice + " is equal to Comp's " + generateCompChoice;
        document.querySelector("#scoreBoard").style.width = "750px";
        document.querySelector("#scoreBoard").style.left = "-10.5vw";
        document.querySelector("#scoreBoard").style.backgroundColor = "#0A2D52";
    } else if (userChoice === "Stone" && generateCompChoice === "Scissor") {
        document.querySelector("#scoreBoard").innerText = "You Win 🏆. Your " + userChoice + " beats Comp's " + generateCompChoice;
        document.querySelector("#scoreBoard").style.backgroundColor = "green";
        document.querySelector("#scoreBoard").style.width = "600px";
        document.querySelector("#scoreBoard").style.left = "-6vw";
        document.querySelector("#userCounter").innerText = userScore;
        userScore++;
    } else if (userChoice === "Stone" && generateCompChoice === "Paper") {
        document.querySelector("#scoreBoard").innerText = "You Lose 😔. Comp's " + generateCompChoice + " grasp Your " + userChoice;
        document.querySelector("#scoreBoard").style.backgroundColor = "red";
        document.querySelector("#scoreBoard").style.width = "600px";
        document.querySelector("#scoreBoard").style.left = "-6vw";
        document.querySelector("#compCounter").innerText = compScore;
        compScore++;
    } else if (userChoice === "Paper" && generateCompChoice === "Stone") {
        document.querySelector("#scoreBoard").innerText = "You Win 🏆. Your " + userChoice + " grasp Comp's " + generateCompChoice;
        document.querySelector("#scoreBoard").style.backgroundColor = "green";
        document.querySelector("#scoreBoard").style.width = "600px";
        document.querySelector("#scoreBoard").style.left = "-6vw";
        document.querySelector("#userCounter").innerText = userScore;
        userScore++;
    } else if (userChoice === "Paper" && generateCompChoice === "Scissor") {
        document.querySelector("#scoreBoard").innerText = "You Lose 😔. Comp's " + generateCompChoice + " cuts Your " + userChoice;
        document.querySelector("#scoreBoard").style.backgroundColor = "red";
        document.querySelector("#scoreBoard").style.width = "600px";
        document.querySelector("#scoreBoard").style.left = "-6vw";
        document.querySelector("#compCounter").innerText = compScore;
        compScore++;
    } else if (userChoice === "Scissor" && generateCompChoice === "Stone") {
        document.querySelector("#scoreBoard").innerText = "You Lose 😔. Comp's " + generateCompChoice + " beats Your " + userChoice;
        document.querySelector("#scoreBoard").style.backgroundColor = "red";
        document.querySelector("#scoreBoard").style.width = "600px";
        document.querySelector("#scoreBoard").style.left = "-6vw";
        document.querySelector("#compCounter").innerText = compScore;
        compScore++;
    } else if (userChoice === "Scissor" && generateCompChoice === "Paper") {
        document.querySelector("#scoreBoard").innerText = "You Win 🏆. Your " + userChoice + " cuts Comp's " + generateCompChoice;
        document.querySelector("#scoreBoard").style.backgroundColor = "green";
        document.querySelector("#scoreBoard").style.width = "600px";
        document.querySelector("#scoreBoard").style.left = "-6vw";
        document.querySelector("#userCounter").innerText = userScore;
        userScore++;
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        if (moves > 0) {
            let userChoice = choice.getAttribute("id");
            let compChoice = generateCompChoice();
            moveCounter.innerText = moves;
            playGame(userChoice, compChoice);
            moves--;
        }
        else {
            moveCounter.innerText = "0";
            document.querySelector("#compCounter").innerText = compScore;
            document.querySelector("#userCounter").innerText = userScore;
            if (userScore > compScore) {
                document.querySelector("#scoreBoard").innerText = "You Win 🏆. Your Score : " + userScore + " is greater than Comp's : " + compScore;
                document.querySelector("#scoreBoard").style.backgroundColor = "green";
                document.querySelector("#scoreBoard").style.width = "650px";
                document.querySelector("#scoreBoard").style.left = "-9vw";
            } else if (userScore < compScore) {
                document.querySelector("#scoreBoard").innerText = "You Lose 😔. Your Score : " + userScore + " is less than Comp's : " + compScore + ". Try Again!";
                document.querySelector("#scoreBoard").style.backgroundColor = "red";
                document.querySelector("#scoreBoard").style.width = "750px";
                document.querySelector("#scoreBoard").style.left = "-12vw";
            } else {
                document.querySelector("#scoreBoard").innerText = "Game was Draw 😲. Your Score : " + userScore + " is equal to Comp's Score : " + compScore;
                document.querySelector("#scoreBoard").style.left = "-6.5vw";
                document.querySelector("#scoreBoard").style.height = "85px";
                document.querySelector("#scoreBoard").style.width = "600px";
                document.querySelector("#scoreBoard").style.backgroundColor = "#0A2D52";
            }
        }
    })
});