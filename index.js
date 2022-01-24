// variables and constants 
const clickMusic = new Audio('music/click.wav');
const gameOverMusic = new Audio('music/gameOver.wav');
let turn = "X";
let gameOver = false;
let flag = true;
let boxText = document.getElementsByClassName('boxText');


// game functions 

function chanceTurn() {
    return turn == "X" ? "0" : "X";
}

function checkWin(){
    let win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    win.forEach(e =>{
        if((boxText[e[0]].innerText == boxText[e[1]].innerText) && (boxText[e[1]].innerText == boxText[e[2]].innerText) && (boxText[e[0]].innerText != "")){
            turn = chanceTurn();
            document.getElementById('playerTurn').innerText = "Player " + turn + " won";
            gameOver = true;
            gameOverMusic.play();
            turn = chanceTurn();
        }
    })
}


// game logic 

let box = document.getElementsByClassName('grid-box');
// document.getElementsByClassName("grid-box").innerHTML = "o";
Array.from(box).forEach(element =>{
    let boxText1 = element.querySelector('.boxText');
     element.addEventListener('click', () => {
        clickMusic.play(); 
        if(boxText1.innerText == ""){
            boxText1.innerText = turn;
            turn = chanceTurn();
            if(!gameOver){
                checkWin();
            }
            if(!gameOver){
                document.getElementById('playerTurn').innerText = "Player " + turn + " turn"
                let boxTextPosition = document.getElementsByClassName('boxText');
                for(let i = 0; i < 9; i++){
                    flag = true;
 
                    if(boxTextPosition[i].innerText == ""){
                        flag = false;
                        break;
                    }
                }
                if(flag){
                    document.getElementById('playerTurn').innerText = "Match draw";
                }
            }
        }
    }) 
})

reset.addEventListener('click', () =>{
    let boxTextClass = document.getElementsByClassName('boxText');
    Array.from(boxTextClass).forEach(element =>{
        element.innerText = " ";  
    })
         document.getElementById('playerTurn').innerText = "Player X turn";
         turn = "X";
         gameOver = false;

})

