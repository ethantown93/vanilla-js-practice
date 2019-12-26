/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of how many guesses are remaining
- Notify player of the correct answer if they lose
- Let player choose to play again
*/

// game values
let min = 1,
    max = 20,
    winningNum = randomNum(min, max),
    guessesLeft =5;

// get UI elements

const UIgame = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      message = document.querySelector('.message'),
      guessInput = document.querySelector('#guess-input');

// assign minimum and maximum numbers

minNum.textContent = min;
maxNum.textContent = max;

// play again event listener
UIgame.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
})

// random number function 
function randomNum(min, max){
    return Math.floor(Math.random()* ( max - min + 1 ) + min);
}

//create event listener for guess

guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    //validate input
    if(guess > max || guess < min || isNaN(guess)){
        setMessage(`*Please enter a number between ${min} and ${max}`, 'red')
    }

    //check if winning number
    if(guess === winningNum){

        // user won
        gameOver(true,`*Congratulations! ${guess} is the correct answer! You win!` )

    } else if (guess !== winningNum) {
        //if player guesses the wrong number
        guessesLeft--;
        setMessage(`*${guess} is incorrect, you have ${guessesLeft} guesses left.`, 'red')
        // clear input
        guessInput.value = '';
        // if player loses the game
        if(guessesLeft === 0) {

            // user lost
            gameOver(false,`*Sorry, you have run out of guesses. The correct answer was ${winningNum}. Click the button to try again.` )
        };
    };
});

//game over function

function gameOver(won, msg){
    let color;
    // check to see if user won or lost
    won === true ? color = '#85bb65' : color = 'red';
    //change border color
    guessInput.style.borderColor = color;
    //disable input
    guessInput.disabled = true;
    // set message
    setMessage(msg, color);

    // play again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';

}

// set message function

function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}