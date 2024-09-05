const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

let computerChoice, userChoice, result

const possibleChoices = document.querySelectorAll('button')
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if(randomNumber === 1) {
        computerChoice = 'Rock'
    }
    else if(randomNumber === 2) {
        computerChoice = 'Paper'
    }
    else if(randomNumber === 3) {
        computerChoice = 'Scissors'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function checkForLose() {
    return ((userChoice === 'Paper' && computerChoice === 'Scissors') || (userChoice === 'Scissors' && computerChoice === 'Rock') || (userChoice === 'Rock' && computerChoice === 'Paper')) ? true : false;
}

function getResult() {
    if(computerChoice === userChoice) {
        result = "It's a Draw!!😑😑"
    }
    else if(checkForLose()) {
        result = "You Lost!!🥲🥲"
    }
    else {
        result = "You Won!!🥳🥳"
    }

    resultDisplay.innerHTML = result
}