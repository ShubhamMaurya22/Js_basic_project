let randomValue = parseInt(Math.random() * 100 + 1);

const  userInput = document.querySelector('#guessField')
const  submit = document.querySelector('#subt')
const  gameOver = document.querySelector('.resultParas')
const  guessArr = document.querySelector('.guesses')
const  remaining = document.querySelector('.lastResult')
const  lowOrHi = document.querySelector('.lowOrHi')

const p = document.createElement('p')

let guessList = []
let totalGuess = 1;

let playGame = true;
if(playGame){
    submit.addEventListener('click' ,(event) => {
        event.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validate(guess)
    })
}


function validate(guess){
   if(isNaN(guess)){
    alert("enter a number")
   }else if(guess < 1){
    alert("enter no more than 1")
   }else if(guess > 100){
    alert("enter no less than 100")
   }else{
     guessList.push(guess)
     if(totalGuess ===  11){
        displayChanges(guess)
        displayMsg(`Game over , random value: ${randomValue}`)
        endGame();
     }else{
        displayChanges(guess)
        checkGuess(guess)
     }
   }
}

function checkGuess(guess){
    if(guess === randomValue){
        displayMsg("you guessed is right")
    }else if(guess > randomValue){
        displayMsg("your guess is toooo high")
    }else if(guess < randomValue){
        displayMsg("your guess is toooo low")
    }

}

function displayChanges(guess){
    userInput.value = ""
    guessArr.innerHTML += `${guess}  `;
    totalGuess++;
    remaining.innerHTML = ` ${11 - totalGuess} `;
    console.log(` ${11 - totalGuess} `);
}

function displayMsg(message){
    lowOrHi.innerHTML = `${message}`
}

function endGame(){
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
gameOver.appendChild(p)
playGame = false
startGame()
}

function startGame(){
const newGame = document.querySelector('#newGame')
newGame.addEventListener('click', () => {
    guessList = []
    totalGuess = 1
    lowOrHi.innerHTML = ""
    guessArr.innerHTML = ""
    remaining.innerHTML = ` ${11 - totalGuess} `;
    userInput.removeAttribute('disabled')
    gameOver.removeChild(p)
    playGame = true
});
}