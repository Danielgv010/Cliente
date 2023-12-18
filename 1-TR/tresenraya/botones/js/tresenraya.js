const game = {
    board: ["","","","","","","","",""],
    turn:true,
    numberPlays:0,
    gameEnded:false
}

function reset(){ // Reinicia todas las variables y elementos relacionados con la partida
    game.board = ["","","","","","","","",""];
    game.turn = 1;
    game.numberPlays = 0;
    game.gameEnded = false;
    for(button of document.getElementsByClassName("btn-outline-success")){ // Habilita los botones y les quita las letras
        button.innerHTML = "";
        button.disabled = false;
    }
    document.getElementById("output").innerHTML = ""; // Quita el texto del h3 .output
}

function disableAll(){ // Deshabilita todos los botones excepto el de reiniciar
    for(button of document.getElementsByClassName("btn-outline-success")){
        button.disabled = true;
    }
}

function play(button, position){ // Desarrolla una jugada
    // Cambia el turno y actualiza el atributo board del objeto game
    changeTurn(position);
    // Cambia la letra del boton presionado
    changeLetter(button);
    // Comprueba si hay victoria o empate
    gameStatus()
}


function changeLetter(button){ // Cambia el contenido de los botones según el turno
    if (game.turn==1){ // Si es 1 el turno es de X sino de O
        button.innerHTML = "X"; // Cambia la letra
        button.disabled = true; // Desactiva el boton
    }else{
        button.innerHTML = "O"; // Cambia la letra
        button.disabled = true; // Desactiva el boton
    }
}

function changeTurn(position){ // Cambia el turno y actualiza el atributo board del objeto game
    if (game.turn==1){
        game.board[position] = "X";
        game.turn = 2; // Cambia el turno
    }else{
        game.board[position] = "O";
        game.turn = 1; // Cambia el turno
    }
    game.numberPlays++;
}

function gameStatus(){ // Comprueba si hay victoria o empate
    if(game.numberPlays>4){ // Si hay mas de 4 jugadas
        if(checkWin()){
            document.getElementById("output").innerHTML = `El ganador es: Jugador ${game.turn}`;
            disableAll();
            game.gameEnded = true;
        } else if (game.numberPlays==9){
            document.getElementById("output").innerHTML = "Empate";
            game.gameEnded = true;
        }
    }
}

function checkWin(){
    if(checkRows()){
        return true;
    }else if(checkColumns()){
        return true;
    }else if(checkDiagonals()){
        return true;
    }
    return false;
}

function checkRows(){
    for(let i=0; i<9; i=i+3){
        if(game.board[i]==game.board[i+1]&&game.board[i+1]==game.board[i+2]&&game.board[i]!=""){
            return true;
        }
    }
    return false;
}

function checkColumns(){
    for(let i=0; i<3; i++){
        if(game.board[i]==game.board[i+3]&&game.board[i+3]==game.board[i+6]&&game.board[i]!=""){
            return true;
        }
    }
    return false;
}

function checkDiagonals(){
    if(game.board[0]==game.board[4]&&game.board[4]==game.board[8]&&game.board[0]!=""){
        return true;
    }else if(game.board[2]==game.board[4]&&game.board[4]==game.board[6]&&game.board[2]!=""){
        return true;
    }
    return false;
}