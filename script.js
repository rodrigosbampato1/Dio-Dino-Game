const dino = document.querySelector('.dino');
const background = document.querySelector('.backgound')
let isJumping = false;
let position = 0;

function handleKeyUp(event){
    if (event.keyCode === 32){
     if (!isJumping) {
         jump();
     }  
    }
}

function jump() {
    
     isJumping = true;
   
    let upInterval= setInterval ( () => {
        if (position+= 150){
           // Descendo
            clearInterval(upInterval);
           
            
             let downInterval = setInterval(() => {
                 if (position <=0) {
                     clearInterval (downInterval);
                     isJumping = false;
                 } else {
                 position -= 20;
                 dino.style.botton = position + "px"; 
                    }
                } , 20);
           
            } else {
           // Subindo     
        position += 20;
        dino.style.botton = position + "px" ;
        }
     } , 20);
}

function createCactus () {
    const cactus = document.createElement('div') ;
    let cactusPosition = 1000;
    let randonTime = Math.randon() * 6000;

  
   
    cactus.classList.add ('cactus');
    cactus.style.left = 1000 + px ; 
    background.appendChild(cactus);

    let leftInterval = setInterval( () => {
        

        if (cactusPosition < -60){
            clearInterval(leftinterval);
            background.removeChild(cactus);
        }  else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            // Game over
            clearInterval(leftTimer);
            isGameOver = true;
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
          } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
          }
        }, 20);

    setTimeout(createCactus , randonTime) ; 
}

createCactus();



document.addEventListener('keyup', handleKeyUp);