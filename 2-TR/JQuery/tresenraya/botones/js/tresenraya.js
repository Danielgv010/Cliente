const game = {
    board: ["", "", "", "", "", "", "", "", ""],
    turn: true,
    numberPlays: 0,
    gameEnded: false,
    gameEndedTurns: 9
}
let history = [["", "", "", "", "", "", "", "", ""]]

onload = function () { // Comprueba si hay una partida guardada y la carga
    if (localStorage.getItem("savedBoard")) {
        // Actualiza el objeto de la partida
        let newBoard = JSON.parse(localStorage.getItem("savedBoard"));
        game.board = newBoard;
        game.numberPlays = localStorage.getItem("savedPlays");
        paint()

    }
}

function paint() {
    for (let i = 0; i < 9; i++) { // Pinta el tablero y deshabilita los botones correspondientes
        buttons = $(".btn-outline-success")
        buttons[i].innerHTML = game.board[i]
        if (game.board[i] != "") {
            buttons[i].disabled = true;
        }
    }
}

function reset() { // Reinicia todas las variables y elementos relacionados con la partida
    game.board = ["", "", "", "", "", "", "", "", ""];
    game.turn = 1;
    game.numberPlays = 0;
    game.gameEnded = false;
    game.gameEndedTurns = 9;
    history = [["", "", "", "", "", "", "", "", ""]]
    for (button of $(".btn-outline-success")) { // Habilita los botones y les quita las letras
        button.innerHTML = "";
        button.disabled = false;
    }
    $("#output").html(""); // Quita el texto del h3 .output

    // Reinica el tablero guardado
    if (localStorage.getItem("savedBoard")) {
        localStorage.removeItem("savedBoard");
    }
}

function disableAll() { // Deshabilita todos los botones excepto el de reiniciar
    for (button of $(".btn-outline-success")) {
        button.disabled = true;
    }
}

function play(button, position) { // Desarrolla una jugada
    // Cambia el turno y actualiza el atributo board del objeto game
    changeTurn(position);
    // Cambia la letra del boton presionado
    changeLetter(button);

    history.push(game.board.slice())
    console.log(history)

    // Comprueba si hay victoria o empate
    gameStatus()
}


function changeLetter(button) { // Cambia el contenido de los botones según el turno
    if (game.turn == 1) { // Si es 1 el turno es de X sino de O
        button.innerHTML = "O"; // Cambia la letra
        button.disabled = true; // Desactiva el boton
    } else {
        button.innerHTML = "X"; // Cambia la letra
        button.disabled = true; // Desactiva el boton
    }
}

function changeTurn(position) { // Cambia el turno y actualiza el atributo board del objeto game
    if (game.turn == 1) {
        game.board[position] = "X";
        game.turn = 2; // Cambia el turno
    } else {
        game.board[position] = "O";
        game.turn = 1; // Cambia el turno
    }
    game.numberPlays++;
}

function gameStatus() { // Comprueba si hay victoria o empate
    if (game.numberPlays > 4) { // Si hay mas de 4 jugadas
        if (checkWin()) {
            $("#output").html(`El ganador es: Jugador ${game.turn}`);
            disableAll();
            game.gameEnded = true;
            game.gameEndedTurns = game.numberPlays
        } else if (game.numberPlays == 9) {
            $("#output").html("Empate");
            game.gameEnded = true;
        }
    }
}

function checkWin() {
    if (checkRows()) {
        return true;
    } else if (checkColumns()) {
        return true;
    } else if (checkDiagonals()) {
        return true;
    }
    return false;
}

function checkRows() {
    for (let i = 0; i < 9; i = i + 3) {
        if (game.board[i] == game.board[i + 1] && game.board[i + 1] == game.board[i + 2] && game.board[i] != "") {
            return true;
        }
    }
    return false;
}

function checkColumns() {
    for (let i = 0; i < 3; i++) {
        if (game.board[i] == game.board[i + 3] && game.board[i + 3] == game.board[i + 6] && game.board[i] != "") {
            return true;
        }
    }
    return false;
}

function checkDiagonals() {
    if (game.board[0] == game.board[4] && game.board[4] == game.board[8] && game.board[0] != "") {
        return true;
    } else if (game.board[2] == game.board[4] && game.board[4] == game.board[6] && game.board[2] != "") {
        return true;
    }
    return false;
}


window.onbeforeunload = closingCode;
function closingCode() { // Guarda el estado de la partida al cerrar o recargar la ventana

    // Guarda el tablero en localStorage
    let savedBoard = JSON.stringify(Array.from(game.board))
    localStorage.setItem("savedBoard", savedBoard);

    // Guarda el numero de jugadas en localStorage
    localStorage.setItem("savedPlays", game.numberPlays)

    return null;
}

function back() {
    if (game.gameEnded && game.numberPlays>0) {
        game.numberPlays--;
        game.board = history[game.numberPlays]
        paint()
    }
}
function next() {
    if (game.gameEnded && game.numberPlays<game.gameEndedTurns) {
        game.numberPlays++;
        game.board = history[game.numberPlays]
        paint()
    }
}