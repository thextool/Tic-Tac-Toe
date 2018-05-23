var currentPlayer = "X";
var board = ["", "", "", "", "", "", "", "", ""];


function createGame(){
        var gameboard = document.querySelector('#gameboard')
        for (var i = 0; i < board.length; i++) {
            var newDiv = document.createElement('div')
            newDiv.setAttribute('class', 'square')
            newDiv.setAttribute('id', i)
            //add r-border to class 
            if (i == 0 || i == 1 || i == 3 || i == 4 || i == 6 || i == 7){
                newDiv.classList.add('r-border')
            }
            if (i == 0 || i == 1 || i == 2 || i == 3 || i == 4 || i == 5){
                newDiv.classList.add('b-border')
            }
            gameboard.appendChild(newDiv)
            addClickListener(newDiv)
        }
    }
    createGame();

function displayMessage(om){
    var turn = document.getElementsByClassName('message')[0]
    if (!om){
        turn.innerText = "Current Player: " + currentPlayer 
    } else {
        turn.innerText = om
    }
}

function changeMessage(){
    var turn = document.getElementsByClassName('message')[0]
    turn.classList.add('end-message')
}

function makeMove(square, index){
    square.innerText = currentPlayer
    board[index] = currentPlayer
    console.log(board)
}

  