let player = document.getElementById("player");
let container = document.getElementById("container");

let enemy = document.getElementById("inimigo");
let enemy2 = document.getElementById("inimigo2")
let inimigos = document.querySelectorAll(".inimigos");

let shot = document.getElementById("tiro");

let positionX = 50
let positionY = 50

let moveUp = false;
let moveDown = false;
let moveLeft = false;
let moveRight = false;

function movePlayer(){
    const containerRect = container.getBoundingClientRect();

    if(moveUp && positionY  + 8> containerRect.top) positionY -= 5;
    if(moveDown && positionY +80 < containerRect.bottom) positionY += 5;
    if(moveLeft && positionX + 322> containerRect.left) positionX -= 5;
    if(moveRight && positionX + 389 < containerRect.right) positionX += 5;
    

    player.style.transform = `translate(${positionX}px, ${positionY}px)`;
}

function gameLoop(){
    movePlayer();
    testeColisao();
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
    if(event.key == 'x' || event.key == 'X'){
        shoot()
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

    function detectColision() {
        let RectPlayer = player.getBoundingClientRect();
    
        for (let i = 0; i < inimigos.length; i++) {
            let RectEnemy = inimigos[i].getBoundingClientRect();
    
            if (RectPlayer.top < RectEnemy.bottom &&
                RectPlayer.bottom > RectEnemy.top &&
                RectPlayer.left < RectEnemy.right &&
                RectPlayer.right > RectEnemy.left) {
                return true;
            }
        }
    
        return false; 
    }

function testeColisao(){
    
    if(detectColision()){
        alert("bateu")
       }
}

function shoot(){
    let shot = document.createElement('div');
    shot.style.position = 'absolute';
    let shotSpeed = 12;
    shot.style.top = `${RectPlayer.top + 1}`
    shot.style.left = `${RectPlayer.left + 1}`

    function moveShot(){
        let RectShot = shot.getBoundingClientRect();
        if(RectShot.right)
    }

}

function shootRight(){

}

function shootTop(){

}

function shootBottom(){}