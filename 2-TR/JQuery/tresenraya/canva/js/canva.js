onload = start; //Ejecuta el js una vez se haya cargado la página

const game = { // Objeto juego
    board: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ],
    turn: 2,
    numberPlays: 0,
}

let canvas, context, width, height; // Variables relativas al canvas
const coordinates = [100, 300, 500]; // Centro de los círculos

function restart(){ // Reinicia las variables de la partida y vuelve a pintar el canvas
    game.board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    game.turn = 2;
    game.numberPlays = 0;
    document.getElementById("result").innerHTML = "";
    drawBoard();
}

function start() { // Crea el canvas, lo dibuja y empieza la partida
    canvas = document.getElementById("my-canvas") // Obtiene el canvas del html

    context = canvas.getContext("2d"); // Le da el contexto al canvas

    // Obtiene las dimensiones del canvas
    width = canvas.width;
    height = canvas.height;

    drawBoard(); // Dibuja el tablero


    //Añade un evento para capturar los clicks en el canvas
    canvas.addEventListener("click", function (event) { play(event) });
}

function drawBoard() { // Dibuja el tablero
    //Crea un rectangulo relleno color gris
    // Dos primeros parametros son las coordenadas de la esquina arriba-izquierda
    // Dos últimos parametros son el ancho y el alto del rectangulo
    context.fillStyle = "gray";
    context.fillRect(0, 0, width, height);

    //Crea nueve circulos blancos
    for (xCenter of coordinates) {
        for (yCenter of coordinates) {
            drawCircle(xCenter, yCenter, "white");
        }
    }
}

function drawCircle(xCenter, yCenter, color) { // Crear un circulo con los parámetros coordenadas del centro, radio, inicio y fin del arco
    context.fillStyle = color; // Cambia el color del relleno
    context.beginPath();
    context.arc(xCenter, yCenter, 90, 0, Math.PI * 2); // Dibuja un circulo
    context.closePath();
    context.fill(); // Rellena el circulo
}

function play(event) { // Controla los clicks y variables de partida
    if ( game.turn != 0 ){ // Si el turno no es 0

        let x = Math.trunc((event.clientX - canvas.getBoundingClientRect().left) / 100); //Obtiene la coordenada X donde pulso el jugador en el canvas
        let y = Math.trunc((event.clientY - canvas.getBoundingClientRect().top) / 100); //Obtiene la coordenada Y donde pulso el jugador en el canvas
    
        // Transforma las coordenadas del click en coordenadas de array
        if (x == 1) {
            x = 0
        } else if (x == 2 || x == 3) {
            x = 1
        } else if (x == 4 || x == 5) {
            x = 2
        }
        if (y == 1) {
            y = 0
        } else if (y == 2 || y == 3) {
            y = 1
        } else if (y == 4 || y == 5) {
            y = 2
        }
    
        // Si el cuadro clicado está vacío
        if (game.board[y][x] == 0) {
            game.board[y][x] = game.turn; // Sustituye el 0 del array por el turno (1-2)
    
            if (game.turn == 1) { // Si el turno es uno lo pasa a 2
                game.turn++;
            } else { // Si el turno es 2 lo pasa a 1
                game.turn--;
            }
    
            drawPieces(); // Dibuja las fichas en el tablero
            game.numberPlays++; // Aumenta el número de jugadas en 1
    
            if (checkWin()) { // Si se ha ganado la partida
                document.getElementById("result").innerHTML = `Player ${game.turn} Wins!` // Mensaje de victoria
                game.turn = 0; // Cambia el turno a 0
            }
            if (gameStatus()){ // Su se empata la partida
                document.getElementById("result").innerHTML = `Tie` // Mensaje de empate
                game.turn = 0; // Cambia el turno a 0
            }
    
        } else { // Si se hace clic en una ficha ya puesta
            alert("That space is already set") // Mensaje de error
        }
    }
}

function drawPieces() { // Dibuja las fichas
    let color; // Guarda el color de la ficha a pintar
    game.board.forEach((row, y) => { // Por cada fila
        row.forEach((value, x) => { // Por cada columna de la fila
            if (value != 0) { // Si el valor no es cero
                if (value == 1) { // Si el valor es uno
                    color = "red"; // Cambia el color de la ficha a rojo
                } else if (value == 2) { // Si el valor es dos
                    color = "yellow"; // Cambia el color de la ficha a amarillo
                }
                drawCircle(coordinates[x], coordinates[y], color); // Dibuja el circulo
            }
        })
    })
}

function gameStatus() { // Comprueba si hay empate
    return game.numberPlays == 9;
}

function checkWin() { // Comprueba si hay ganador
    if (checkRows() || checkColumns() || checkDiagonal()) { // Comprueba cada combinación
        return true;
    } else {
        return false;
    }
}

function checkRows() { // Comprueba si hay victoria en filas
    if (game.board[0][0] == game.board[0][1] && game.board[0][1] == game.board[0][2] && game.board[0][0] != "") {
        return true;
    }
    if (game.board[1][0] == game.board[1][1] && game.board[1][1] == game.board[1][2] && game.board[1][0] != "") {
        return true;
    }
    if (game.board[2][0] == game.board[2][1] && game.board[2][1] == game.board[2][2] && game.board[2][0] != "") {
        return true;
    }
    return false;
}

function checkColumns() { // Comprueba si hay victoria en columnas
    if (game.board[0][0] == game.board[1][0] && game.board[1][0] == game.board[2][0] && game.board[0][0] != "") {
        return true;
    }
    if (game.board[0][1] == game.board[1][1] && game.board[1][1] == game.board[2][1] && game.board[0][1] != "") {
        return true;
    }
    if (game.board[0][2] == game.board[1][2] && game.board[1][2] == game.board[2][2] && game.board[0][2] != "") {
        return true;
    }
    return false;
}

function checkDiagonal() { // Comprueba si hay victoria en las diagonales
    if (game.board[0][0] == game.board[1][1] && game.board[1][1] == game.board[2][2] && game.board[0][0] != "") {
        return true;
    }
    if (game.board[0][2] == game.board[1][1] && game.board[1][1] == game.board[2][0] && game.board[0][2] != "") {
        return true;
    }
    return false;
}