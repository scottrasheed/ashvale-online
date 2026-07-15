// Ashvale Online
// Player Movement + Collision


const player = document.getElementById("player");

let playerX = window.innerWidth / 2;
let playerY = window.innerHeight - 200;


let targetX = playerX;
let targetY = playerY;


const speed = 3;



player.style.left = playerX + "px";
player.style.top = playerY + "px";



// Castle collision area

const castle = {

    x: window.innerWidth / 2 - 250,

    y: 40,

    width: 500,

    height: 250

};




// Click movement

document.addEventListener("click", function(event){


    targetX = event.clientX;

    targetY = event.clientY;


});




// Check collision

function checkCollision(x,y){


    let padding = 25;


    if(

        x > castle.x - padding &&

        x < castle.x + castle.width + padding &&

        y > castle.y - padding &&

        y < castle.y + castle.height + padding

    ){

        return true;

    }


    return false;

}




function gameLoop(){



    let dx = targetX - playerX;

    let dy = targetY - playerY;



    let distance = Math.sqrt(
        dx * dx + dy * dy
    );



    if(distance > 2){


        let nextX = playerX + (dx / distance) * speed;

        let nextY = playerY + (dy / distance) * speed;



        // World boundaries

        if(

            nextX > 30 &&

            nextX < window.innerWidth - 30 &&

            nextY > 30 &&

            nextY < window.innerHeight - 30

        ){


            if(!checkCollision(nextX,nextY)){


                playerX = nextX;

                playerY = nextY;


            }


        }



        player.style.left = playerX + "px";

        player.style.top = playerY + "px";


    }



    requestAnimationFrame(gameLoop);


}



gameLoop();
