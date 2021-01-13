let board = [];

const play =(clickedId)=>{

const playerSpan = document.getElementById('player'); 
const clickedElement = document.getElementById(clickedId);


if(playerSpan.innerText === 'X'){
    playerSpan.innerText = '0';
    clickedElement.InnerText = 'X';
    board[clickedId] = 'X';


} else {
    playerSpan.innerText = 'X';
    clickedElement.InnerText = '0';
    board[clickedId] = '0';
}


const topLeft = board[0];
const topCenter = board[1];
const topRight = board[2];
const middleLeft = board[3];
const middleCenter = board[4];
const middleRight = board[5];
const bottomLeft = board[6];
const bottomCenter = board[7];
const bottomRight = board[8];

//checks all winning combinations

if(topLeft !== undefined && topLeft === topCenter && topLeft === topRight){
    alert(`${topLeft} is the winner`);
    return;
 
} if(middleLeft!== undefined && middleLeft === middleCenter && middleLeft === middleRight){
    alert(`${middleLeft} is the winner`);
    return;

} if (bottomLeft!== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight){
    alert(`${bottomLeft} is the winner`);
    return;

} if(topLeft!== undefined && topLeft === middleLeft && topLeft === bottomLeft){
    alert(`${topLeft} is the winner`);
    return;
} if(topCenter!== undefined && topCenter === middleCenter && topLeft === bottomCenter){
    alert(`${topCenter} is the winner`);
    return;
} if(topRight!== undefined && topRight === middleRight && topLeft === bottomRight){
    alert(`${topRight} is the winner`);
    return;
}  if(topLeft!== undefined && topLeft === middleCenter && topLeft === bottomRight){
    alert(`${topLeft} is the winner`);
    return;
} if(bottomLeft!== undefined && bottomLeft === middleCenter && bottomLeft === topRight){
    alert(`${topRight} is the winner`);
    return;
}
//i<=8 is because there are 8 possible ways to win?

let  boardFull = true;
for(let i=0; i<= 8; i++){
if (board[i] === undefined){
    boardFull = false;
}
}

if (boardFull === true){
alert("Cat's game, there is no winner");
reset();
}
}

const button = document.createElement('button');

const reset =()=> {

    button.innerText = 'reset the game';
    if (alert === 'true'){
        return board = [];
    }
    }

    reset();


