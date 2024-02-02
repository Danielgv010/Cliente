let cnvs = document.getElementById("board");
let ctx = cnvs.getContext("2d");

ctx.fillStyle = "white";
ctx.fillRect(0, 0, cnvs.width, cnvs.height);

let coordx = 275;
let coordy = 275;
let lado = 10;

let velocidad = 2;
let fps = 1000 / 50;

let direccion = 'N';

let puntos = 0;

let increVel = 50;
let cambiaVel = increVel;

let cabeza = {
    x: coordx,
    y: coordy
}

let snake = [];
snake.unshift(cabeza);


//inicio
ctx.fillStyle = "blue";
ctx.fillRect(coordx, coordy, lado, lado);


//colocar comida inicial
let coordXcomida = Math.random() * 500;
let coordYcomida = Math.random() * 500;

console.log(coordXcomida);
console.log(coordYcomida);

ctx.fillStyle = "red";
ctx.fillRect(coordXcomida, coordYcomida, lado, lado);

let temporizador = setInterval(redibuja, fps);

function redibuja() {
    console.log(snake)

    coordx = snake[0].x;
    coordy = snake[0].y;

    ctx.fillStyle = "white";
    for (let trz of snake) {
        ctx.fillRect(trz.x, trz.y, lado, lado);
    }

    snake.pop();

    switch (direccion) {
        case "N":
            coordy -= velocidad;
            break;
        case "S":
            coordy += velocidad;
            break;
        case "O":
            coordx -= velocidad;
            break;
        case "E":
            coordx += velocidad;
            break;
    }

    let cabezaNueva = {
        x: coordx,
        y: coordy
    }

    snake.unshift(cabezaNueva);

    ctx.fillStyle = "blue";
    for (let trz of snake) {
        ctx.fillRect(trz.x, trz.y, lado, lado);
    }

    if (coordx > 540 || coordx < 0 || coordy > 540 || coordy < 0) {
        document.getElementById("points").innerHTML = "Perdiste";
        clearInterval(temporizador);
    }

    //comprobar si comio
    if (coordx > coordXcomida && coordx < (coordXcomida + lado) && coordy > coordYcomida && coordy < (coordYcomida + lado)) {
        comido();
    } else if ((coordx + lado) > coordXcomida && (coordx + lado) < (coordXcomida + lado) && coordy > coordYcomida && coordy < (coordYcomida + lado)) {
        comido();
    } else if ((coordx + lado) > coordXcomida && (coordx + lado) < (coordXcomida + lado) && coordy + lado > coordYcomida && coordy + lado < (coordYcomida + lado)) {
        comido();
    } else if ((coordx) > coordXcomida && coordx < (coordXcomida + lado) && coordy + lado > coordYcomida && coordy + lado < (coordYcomida + lado)) {
        comido();
    }

}

document.addEventListener("keydown", function (event) {

    switch (event.key) {
        case "ArrowUp":
            direccion = "N";
            break;
        case "ArrowDown":
            direccion = "S";
            break;
        case "ArrowLeft":
            direccion = "O";
            break;
        case "ArrowRight":
            direccion = "E";
            break;
    }
});

function comido() {
    ctx.fillStyle = "white";
    ctx.fillRect(coordXcomida - 1, coordYcomida - 1, lado + 1, lado + 1);

    coordXcomida = Math.random() * 500;
    coordYcomida = Math.random() * 500;

    ctx.fillStyle = "red";
    ctx.fillRect(coordXcomida, coordYcomida, lado, lado);

    puntos = puntos + 10;
    document.getElementById("points").innerHTML = "Puntos: " + puntos;

    if (puntos > cambiaVel) {
        velocidad = velocidad + 1;
        cambiaVel += increVel;
    }

    let xPosUlt = snake[snake.length - 1].x;
    let yPosUlt = snake[snake.length - 1].y;

    let cuerpoNuevo = {
        x: 0,
        y: 0
    }

    switch (direccion) {
        case "N":
            cuerpoNuevo.x = xPosUlt;
            cuerpoNuevo.y = yPosUlt;
            snake.push(cuerpoNuevo);
            break;
        case "S":
            cuerpoNuevo.x = xPosUlt;
            cuerpoNuevo.y = yPosUlt;
            snake.push(cuerpoNuevo);
            break;
        case "O":
            cuerpoNuevo.x = xPosUlt;
            cuerpoNuevo.y = yPosUlt;
            snake.push(cuerpoNuevo);
            break;
        case "E":
            cuerpoNuevo.x = xPosUlt;
            cuerpoNuevo.y = yPosUlt;
            snake.push(cuerpoNuevo);
            break;
    }

}