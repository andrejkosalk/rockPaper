function computerPlay(){
    let compCh = Math.floor(Math.random() * 3)
    if(compCh === 0){
        return 'Rock'
    }else if(compCh === 1){
        return 'Paper'
    }else{
        return 'Scissors'
    }
}



function playRound(playerSelection, computerSelection){
    if(playerSelection == 'Rock' && computerSelection == 'Rock' || playerSelection == 'Paper' && computerSelection == 'Paper' || playerSelection == 'Scissors' && computerSelection == 'Scissors'){
        
        return 'Draw'
    }else if(playerSelection == 'Rock' && computerSelection == 'Scissors' || playerSelection == 'Paper' && computerSelection == 'Scissors' || playerSelection == 'Scissors' && computerSelection == 'Paper'){
        playerScore++
        return `You win ${playerSelection} beats ${computerSelection}`
    }else if(playerSelection == 'Paper' && computerSelection == 'Rock' || playerSelection == 'Rock' && computerSelection == 'Paper' || playerSelection == 'Scissors' && computerSelection == 'Rock' ){
        computerScore++
        return `You lose ${computerSelection} beats ${playerSelection}`
    }else{
        return 'wrong weapon'
    }
} 



let playerScore = parseInt(0);
let computerScore = parseInt(0);

function game(){
    for(let i = 0; i <= 20; i++){
        let playerSelection= prompt('please choose weapon')
        playerSelection = playerSelection.toUpperCase()
        const computerSelection = computerPlay();
        alert(playRound(playerSelection, computerSelection));
        alert('player score: ' + playerScore + ' : ' +  ' computer score:' + computerScore)


        if(playerScore === 5) {
            alert('Congratulations you won the game!!')
            return;
            
        } else if(computerScore === 5) {
            alert('You lose the game try again')
            return;
            
        } else{
           
        }
    }
}

game()






