let userscore = 0;
let macscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("msg")
const usersc = document.getElementById("user-score")
const macsc = document.getElementById("mac-score")
const h = document.getElementById("h")

choices.forEach((choice)=>{
    console.log(choice)
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

showWinner = (userWin , userChoice , macChoice)=>{
    if(userWin){
        userscore++
        usersc.innerText = userscore
        console.log("You Win!") 
        msg.innerText = `You Win! Your ${userChoice} Beats ${macChoice}`  // innerText is available only by getElementById
        msg.style.backgroundColor = "green"
        h.style.backgroundColor = "#DAF7A6"
        h.style.color = "green"
    }
    else{
        console.log("You Lose!")
        macscore++
        macsc.innerText = macscore
        msg.innerText = `You Lose! Mac's ${macChoice} Beats Your ${userChoice}`
        msg.style.backgroundColor = "red"
        h.style.backgroundColor = "#ff9081"
        h.style.color = "red"
    }
}

const drawGame = ()=>{
    console.log("Game is Drawn")
    msg.innerText = "Game is Drawn , Play Again"
    msg.style.backgroundColor = "#c08552"
    h.style.backgroundColor = "#c08552"
    h.style.color = "white"
}

const playGame = (userChoice)=>{
    console.log("User Choice = ",userChoice);
    const macChoice = getmacChoice();
    console.log("Mac Choice = ",macChoice);
    if(userChoice === macChoice){
        drawGame();
    }
    else{
        var userWin = true;    // var use kiya let nai 
        if(userChoice === "rock"){
           userWin = macChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = macChoice === "scissors" ? false : true;
        }
        else if(userChoice === "scissors"){
            userWin = macChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice , macChoice);
    }
}

const getmacChoice = ()=>{
    const options = ["rock","paper","scissors"];
    const getIdx = Math.floor(Math.random()*3);
    return options[getIdx]
}


