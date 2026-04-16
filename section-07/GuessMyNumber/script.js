'use strict';

// console.log(document.querySelector('.message').textContent)

// document.querySelector('.message').textContent = 'Correct number!';

// document.querySelector('.number').textContent = 15;
// document.querySelector('.score').textContent = 25;
// document.querySelector('.guess').textContent = 35;

// .textContent is content text using for div, p, span
// .value is input value using for input, text area

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message
}

const displayScore = function (score) {
    document.querySelector('.score').textContent = score
}

const displayBackgroundColor = function (color) {
    document.querySelector('body').style.backgroundColor = color
}

const displaySelectedNumber = function (number) {
    document.querySelector('.number').textContent = number
}

const displayGuess = function (guess) {
    document.querySelector('.guess').value = guess
}

let selectedNumber = Math.trunc(Math.random() * 20) + 1
let score = 6
let highScore = 0
displaySelectedNumber(selectedNumber)


document.querySelector('.check').addEventListener(
    'click', function () {

        const guess = Number(document.querySelector('.guess').value)

        console.log(`${guess} - ${typeof guess}`)

        if (score < 1) {
            document.querySelector('.message').textContent = 'You lost game!'
            return
        }

        if (!guess) {
            score--
            displayScore(score)
            displayMessage('No correct!')
            displayBackgroundColor('#070807')

        } else if (guess > selectedNumber) {
            displayMessage('Too high!!!!!')
            score--
            displayScore(score)
            displayBackgroundColor('#242623')

        } else if (guess < selectedNumber) {
            displayMessage('Too Low!!!!!')
            score--
            displayScore(score)
            displayBackgroundColor('#050505')

        } else {
            displayMessage('Correct!!!!!')
            displayBackgroundColor('#60b347')
            displaySelectedNumber('50rem')

            if (score > highScore) {
                highScore = score
                document.querySelector('.highscore').textContent = highScore
            }
        }
    }
);

document.querySelector('.again').addEventListener(
    'click', function () {
        score = 6
        highScore = 0
        console.log('clicked')
        selectedNumber = Math.trunc(Math.random() * 20) + 1

        displayScore(score)
        displayMessage('Start guessing...')
        displaySelectedNumber(selectedNumber)
        displayGuess(null)
        displayBackgroundColor('#222')
        displayHighScore(highScore)
    }
)
