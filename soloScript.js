let userScore = 1;
let compScore = 1;
let diamondCounter = document.querySelector("#counterOfDiamond");
const choices = document.querySelectorAll(".choice");
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
        let userChoice = choice.getAttribute("id");
        let compChoice = generateCompChoice();
        console.log(compChoice);
        playGame(userChoice, compChoice);
    })
});