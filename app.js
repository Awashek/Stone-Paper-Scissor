let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#computer-score");

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id")
        finalResult(userChoice);

    })
})

const computerChoice = () => {
    const random = ["rock","paper","scissor"]
    const randIndx = Math.floor(Math.random() * 3)
    return random[randIndx];
}

const drawCondition = ()=> {
    msg.innerText = "Game was draw, Try again!";
    msg.style.backgroundColor = "#14213D";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore ++;
        userScorepara.innerText = userScore; 
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        ``
        computerScore ++;
        compScorepara.innerText = computerScore; 
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const finalResult = (userChoice)=> {
    console.log("user choice", userChoice)
    const compChoice = computerChoice();
    console.log("Computer choice", compChoice)
    if (userChoice === compChoice){
        drawCondition();
    }
    else{
        userWin = true;
        if(userChoice==="rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice, compChoice);
    }
}



