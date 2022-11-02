const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
let userChoice
let computerChoice
let result

const possibleChoices = document.querySelectorAll('button')

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
   generateComputerChoice()
   getResult()
})) 

function generateComputerChoice() {
        const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
        
        if (randomNumber === 1) {
            computerChoice = "rock"
        }
        else if (randomNumber === 2) {
            computerChoice = 'paper'
        }
        else {
            computerChoice = 'scissors'
        }
        computerChoiceDisplay.innerHTML = computerChoice
    }

    function getResult() {
        if (computerChoice === userChoice) {
            result = 'Its a Draw!'
        }
        else if (computerChoice === 'rock' && userChoice === 'paper') {
            result = 'You Win!'
        }
        else if (computerChoice === 'rock' && userChoice === 'scissors') {
            result = 'You Lose!'
        }
        else if (computerChoice === 'paper' && userChoice === 'scissors') {
            result = 'You Win!'
        }
        else if (computerChoice === 'paper' && userChoice === 'rock') {
            result = 'You Lose!'
        }
        else if (computerChoice === 'scissors' && userChoice === 'paper') {
            result = 'You Lose!'
        }
        else if (computerChoice === 'scissors' && userChoice === 'rock') {
            result = 'You Win!'
        }
        resultDisplay.innerHTML = result
    }