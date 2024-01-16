let player1Name = prompt("Enter Name of Player 1 : ");
let player2Name = prompt("Enter Name of Player 2 : ");
let player1Score = 1;
let player2Score = 1;
let player1Choice;
let player2Choice;
let player1WinAudio = new Audio("/Audios/player1 win.m4a")
let player2WinAudio = new Audio("/Audios/player2 win.m4a")
let drawAudio = new Audio("/Audios/draw.m4a");
let p1Name = document.querySelector("#player1Name");
let p2Name = document.querySelector("#player2Name");
let player1InHead = document.querySelector("#player1InHead");
let player2InHead = document.querySelector("#player2InHead");
if (player1Name === "" && player2Name === "") {
    p1Name.innerText = "Player 1";
    player1InHead.innerText = "Player 1";
    p2Name.innerText = "Player 2";
    player2InHead.innerText = "Player 2";
} else if (player1Name === "" && player2Name !== "") {
    p1Name.innerText = "Player 1";
    player1InHead.innerText = "Player 1";
    p2Name.innerText = player2Name;
    player2InHead.innerText = player2Name;
} else if (player1Name !== "" && player2Name === "") {
    document.querySelector("#scoreBoard").innerText = player1Name + "'s Turn";
    p1Name.innerText = player1Name;
    player1InHead.innerText = player1Name;
    p2Name.innerText = "Player 2";
    player2InHead.innerText = "Player 2";
} else {
    document.querySelector("#scoreBoard").innerText = player1Name + "'s Turn";
    p1Name.innerText = player1Name;
    player1InHead.innerText = player1Name;
    p2Name.innerText = player2Name;
    player2InHead.innerText = player2Name;
}
let player1 = document.querySelectorAll(".choice1");
let player2 = document.querySelectorAll(".choice2");
player1.forEach((singleChoice) => {
    singleChoice.addEventListener("click", () => {
        player1Choice = singleChoice.getAttribute("id");
        document.querySelector("#scoreBoard").innerText = p2Name.innerText + "'s Turn";
        document.querySelector("#scoreBoard").addClassList("player2Turn")
        document.querySelector("#scoreBoard").addClassList("player2Turn")
        document.querySelector("#scoreBoard").addClassList("player2Turn")
        document.querySelector("#scoreBoard").addClassList("player2Turn")
    })
})
player2.forEach((singleChoice) => {
    singleChoice.addEventListener("click", () => {
        player2Choice = singleChoice.getAttribute("id");
        playGame(player1Choice, player2Choice)
    })
})
const playGame = (player1Choice, player2Choice) => {
    if (player1Choice === player2Choice) {
        drawAudio.play();
        document.querySelector("#scoreBoard").innerText = "Game was Draw 😲. " + p1Name.innerText + "'s " + player1Choice + " is equal to "+ p2Name.innerText+ "'s " + player2Choice;
    } else if (player1Choice === "Stone" && player2Choice === "Scissor") {
        document.querySelector("#scoreBoard").innerText = p1Name.innerText + " Win 🏆. "+ p1Name.innerText+ "'s " + player1Choice + " beats "+ p2Name.innerText+ "'s " + player2Choice;
        player1WinAudio.play();
        document.querySelector("#player1Counter").innerText = player1Score;
        player1Score++;
    } else if (player1Choice === "Stone" && player2Choice === "Paper") {
        document.querySelector("#scoreBoard").innerText = p2Name.innerText + " Win 🏆. "+ p2Name.
        innerText+ "'s " + player2Choice + " grasp "+ p1Name.innerText + "'s " + player1Choice;
        player2WinAudio.play();
        document.querySelector("#player2Counter").innerText = player2Score;
        player2Score++;
    } else if (player1Choice === "Paper" && player2Choice === "Stone") {
        document.querySelector("#scoreBoard").innerText = p1Name.innerText + " Win 🏆 . "+ p1Name.innerText+ "'s " + player1Choice + " grasp "+ p2Name.innerText+ "'s " + player2Choice;
        player1WinAudio.play();
        document.querySelector("#player1Counter").innerText = player1Score;
        player1Score++;
    } else if (player1Choice === "Paper" && player2Choice === "Scissor") {
        document.querySelector("#scoreBoard").innerText = p2Name.innerText + " Win 🏆. " + p2Name.
        innerText + "'s " + player2Choice + " cuts "+ p1Name.innerText + "'s " + player1Choice;
        player2WinAudio.play();
        document.querySelector("#player2Counter").innerText = player2Score;
        player2Score++;
    } else if (player1Choice === "Scissor" && player2Choice === "Stone") {
        document.querySelector("#scoreBoard").innerText = p2Name.innerText + " Win 🏆. " + p2Name.
        innerText+ "'s " + player2Choice + " beats " +p1Name.innerText + "'s " + player1Choice;
        player2WinAudio.play();
        document.querySelector("#player2Counter").innerText = player2Score;
        player2Score++;
    } else if (player1Choice === "Scissor" && player2Choice === "Paper") {
        document.querySelector("#scoreBoard").innerText = p1Name.innerText + " Win 🏆. "+ p1Name.innerText+"'s " + player1Choice + " cuts "+ p2Name.innerText+ "'s " + player2Choice;
        player1WinAudio.play();
        document.querySelector("#player1Counter").innerText = player1Score;
        player1Score++;
    }
};