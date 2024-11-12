let player = document.getElementById("player");
let container = document.getElementById("container");

let positionX = 50
let positionY = 50

let moveUp = false;
let moveDown = false;
let moveLeft = false;
let moveRight = false;

function movePlayer(){
    const containerRect = container.getBoundingClientRect();

    if(moveUp && positionY  + 8> containerRect.top) positionY -= 3;
    if(moveDown && positionY +50  < containerRect.bottom) positionY += 3;
    if(moveLeft && positionX > containerRect.left) positionX -= 3;
    if(moveRight && positionX < containerRect.right) positionX += 3;
    

    player.style.transform = `translate(${positionX}px, ${positionY}px)`;
}

function gameLoop(){
    movePlayer();
    requestAnimationFrame(gameLoop);
}

gameLoop();

document.addEventListener('keydown', function(event){
    if(event.key == 'w' || event.key == 'W'){
    moveUp = true;
    }
    if(event.key == 'a' || event.key == 'A'){
    moveLeft = true;
    }
    if(event.key == 's' || event.key == 'S'){
    moveDown = true;
    }
    if(event.key == 'd' || event.key == 'D'){
    moveRight = true;
    }
})

document.addEventListener('keyup', function(event){
    if(event.key == 'w' || event.key == 'W'){
    moveUp = false;
    }
    if(event.key == 'a' || event.key == 'A'){
    moveLeft = false;
    }
    if(event.key == 's' || event.key == 'S'){
    moveDown = false;
    }
    if(event.key == 'd' || event.key == 'D'){
    moveRight = false;
    }
})