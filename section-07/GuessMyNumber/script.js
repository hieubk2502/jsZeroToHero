'use strict';

// console.log(document.querySelector('.message').textContent)

// document.querySelector('.message').textContent = 'Correct number!';

// document.querySelector('.number').textContent = 15;
// document.querySelector('.score').textContent = 25;
// document.querySelector('.guess').textContent = 35;

// .textContent is content text using for div, p, span
// .value is input value using for input, text area

const randomNumber = Math.trunc(Math.random() * 20) + 1

document.querySelector('.number').textContent = randomNumber

document.querySelector('.check').addEventListener(
    'click', function() {

        console.log(`${document.querySelector('.guess').textContent}`)

        const guess = Number(document.querySelector('.guess').value)
        
        console.log(`${guess} - ${typeof guess}`)

        if(!guess){
            document.querySelector('.message').textContent = 'No correct!'
        }else {
            document.querySelector('.message').textContent = 'Correct!!!!!'
        }
    }
)