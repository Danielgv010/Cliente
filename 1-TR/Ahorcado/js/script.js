const barrasH1 = document.getElementById("barras");
const palabras = ["agua", "teclado", "pantalla", "rojo"];
const botones = document.getElementsByClassName("button");
let palabra = "";
let barras = "";
let contador = 1;

crearPalabra();

function reset(){ //Reinicia las variables de la partida, genera una nueva palabra y habilita todos los botones
    barras = "";
    contador = 1;
    //Actualiza la imagen
    document.getElementById("imgAhorcado").setAttribute("src", `img/${contador}.png`)
    //Genera otra palabra
    crearPalabra();
    //Habilita todos los botones
    enableAll();
}

function comprobar(letra) { //Comprueba si la letra está o no
    let barrasnew = "";

    //Si la palabra contiene la letra añade a la variable barrasnew la letra
    if (palabra.includes(letra)) {
        for (i in palabra) {
            if (letra == palabra[i]) {
                barrasnew += letra;
            } else {
                barrasnew += barras[i];
            }
        }
        //Hace que la variable barras tenga lo mismo que barrasnew
        barras = barrasnew;
        //Añade el contenido de la variable barras al html
        barrasH1.innerHTML = barras;
        //Cambia el color del boton pulsado a verde y lo deshabilita
        cambioBoton("#C1E1C1", letra);
    
    //Si la palabra no contiene la letra
    } else {
        //Incrementa en 1 el contador de fallos
        contador++;
        //Cambia el color del boton pulsado a rojo y lo deshabilita
        cambioBoton("#FF0000", letra);
        //Actualiza la imagen del ahorcado
        document.getElementById("imgAhorcado").setAttribute("src", `img/${contador}.png`)
    }

    //Comprueba si se ha acertado la palabra o se han agotado las vidas
    if (!comprobarVictoria()) {
        alert("Victoria");
        //Deshabilita los botones
        disableAll();
    } else if (comprobarDerrota()) {
        alert("Derrota");
        //Deshabilita los botones
        disableAll();
    }
}

function cambioBoton(color, id) { //Cambia de color el boton del id que se le pase a la funcion al color que se le pase y lo deshabilita
    const boton = document.getElementById(id);
    //Deshabilita el boton
    boton.disabled = true;
    //Cambia de color el boton
    boton.style.background = color;
}

function comprobarVictoria() { //Si incluye una _ devuelve true sino devuelve false
    return barras.includes("_");
}

function comprobarDerrota() { //Si el contador equivale a 7 devuelve true sino devuelve false
    return contador == 7 ? true : false;
}

function disableAll() { //Deshabilita todos los botones excepto el de nuevo juego
    //Deshabilita los botones
    for (i in botones) {
        botones[i].disabled = true;
    }
    
    //Habilita el boton de nuevo juego
    document.getElementById("newGame").disabled = false;
}

function enableAll(){ //Habilita todos los botones
    for (i in botones) {
        //Habilita botones
        botones[i].disabled = false;
        //Resetea el color
        botones[i].style.background = "";
    }
}

function crearPalabra() { //Escoge una palabra al azar
    let col3 = document.getElementById("col3");

    //Selecciona la palabra al azar
    palabra = palabras[Math.floor(Math.random() * 4)];

    //Muestra la palabra por consola
    console.log(palabra);

    //Genera las _ de la palabra
    for (i in palabra) {
        barras += "_";
    }

    //Actualiza el html metiendo las _ para adivinar la palabra
    barrasH1.innerHTML = barras;
}