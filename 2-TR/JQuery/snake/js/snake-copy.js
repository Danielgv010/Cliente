onload = main;

function main(){
    const CANVAS = document.getElementById("board");
    let context = CANVAS.getContext("2d");
    
    context.fillStyle="white";
    context.fillRect(0,0,CANVAS.width,CANVAS.height);
    
    let xCoordinate = 250;
    let yCoordinate = 250;
    const SIDE = 10;
    let direction = 1;
    let arrow = 0;
    let speed = 1;
    let points = 0;
    
    window.addEventListener("keydown",function(event){
        switch (event.key){
            case "ArrowDown":
                arrow = 1;
                break;
            case "ArrowUp":
                arrow = 2;
                break;
            case "ArrowRight":
                arrow = 3;
                break;
            case "ArrowLeft":
                arrow = 4;
                break;
        }
    })

    context.fillStyle="blue"
    context.fillRect(xCoordinate,yCoordinate,SIDE,SIDE);
    
    let timer = setInterval(redraw,1000/60);
    
    function redraw(){
        context.fillStyle="white";
        context.fillRect(xCoordinate,yCoordinate,SIDE,SIDE);
        
        if (arrow == 1){
            yCoordinate = yCoordinate + direction;
        } else if (arrow == 2){
            yCoordinate = yCoordinate - direction;
            
        } else if (arrow == 3){
            xCoordinate = xCoordinate + direction;
            
        } else if (arrow == 4){
            xCoordinate = xCoordinate - direction;
        }
        
        context.fillStyle = "blue"
        context.fillRect(xCoordinate,yCoordinate,SIDE,SIDE);
    }

    function spawnFood(){
        context.fillStyle="red";
        context.fillRect();
        points+=10;
        document.getElementById("points").innerHTML = "Puntos: "+points
    }
}