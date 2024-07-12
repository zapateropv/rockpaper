const playerMove = document.querySelector('.playerMove');
const computerMove = document.querySelector('.computerMove');
const result = document.querySelector('.result');
const displayPlayerMove = document.querySelector('.playerMove');
const displayComputerMove = document.querySelector('.computerMove');
const ties =  document.querySelector('.ties');
const wins =  document.querySelector('.wins');
const losses =  document.querySelector('.losses');
const reset = document.querySelector('#reset');

const moves = ['rock','paper','scissor']

let score ={
    ties: 0,
    wins: 0,
    losses: 0
}

function move(playerChoice){


const computerMoves = moves[Math.floor(Math.random() * 3)]


if(playerChoice === computerMoves){
    result.textContent = 'Result: Draw'
    ties.textContent = `Draws: ${score.ties +=1}`
}

else if(playerChoice === 'rock' && computerMoves === 'scissor'){
   result.textContent = 'Result: You win'
   wins.textContent = `Wins: ${score.wins += 1}`
}

else if(playerChoice === 'rock' && computerMoves === 'paper'){
    result.textContent = 'Result: You Lose'
    losses.textContent = `Losses: ${score.losses += 1}`
}

else if(playerChoice === 'scissor' && computerMoves === 'paper'){
    result.textContent = 'Result: You Win'
     wins.textContent = `Wins: ${score.wins += 1}`
}

else if(playerChoice === 'scissor' && computerMoves === 'rock'){
    result.textContent = 'Result: You Lose'
     losses.textContent = `Losses: ${score.losses += 1}`
}

else if(playerChoice === 'paper' && computerMoves === 'rock'){
    result.textContent = 'Result: You Win'
    wins.textContent = `Wins: ${score.wins += 1}`
}


else if(playerChoice === 'paper' && computerMoves === 'scissor'){
    result.textContent = 'Result: You Lose'
    losses.textContent = `Losses: ${score.losses += 1}`
}


displayPlayerMove.textContent = `Player Move: ${playerChoice}`;
displayComputerMove.textContent = `Computer Move: ${computerMoves}`;

}


reset.addEventListener('click', () => {
    score.ties = 0
    score.wins = 0 
    score.losses = 0
    ties.textContent = `Draws: `
    wins.textContent = `Wins: `
    losses.textContent = `Losses: `
})



