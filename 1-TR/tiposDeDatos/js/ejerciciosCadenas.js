function separaEnLineas() {
    //Variable para guardar el texto del input
    let texto = document.getElementById("texto").value;

    let salida = ""; //Para componer la salida con los parrafos y una letra en cada p
    for (letra of texto) {//For-of para recorrer el string
        salida = salida + `<p>${letra}</p>`; //Con cada letra se crea un elemento p
    }
    //Se crean los elementos p del DOM dentro del div salida1
    document.getElementById("salida1").innerHTML = salida;
}

function contarLetras() {
    //Variable para guardar el texto del input
    let texto = document.getElementById("texto").value;

    //contador para contar las letras
    let contador = 0;
    for (letra of texto.toLowerCase()) {
        //Comprueba que el caracter sea una letra
        if ((letra >= "a") && (letra <= "z")) {
            contador++;
        }
    }
    //Se crean los elementos p del DOM dentro del div salida1
    document.getElementById("salida1").innerHTML = `<p>${contador}</p>`;
}

function contarLetras() {
    //Variable para guardar el texto del input
    let texto = document.getElementById("texto").value;

    //contador para contar las letras
    let contador = 0;
    for (letra of texto.toLowerCase()) {
        //Comprueba que el caracter sea una letra
        if ((letra >= "a") && (letra <= "z")) {
            contador++;
        }
    }
    //Se crean los elementos p del DOM dentro del div salida1
    document.getElementById("salida1").innerHTML = `<p>${contador}</p>`;
}

function darVuelta() {
    //Variable para guardar el texto del input
    let texto = document.getElementById("texto").value;

    //Para componer la salida con los parrafos
    let salida = "";
    for (letra of texto) {
        salida = letra + salida;
    }

    //Se crean los elementos p del DOM dentro del div salida1
    document.getElementById("salida1").innerHTML = `<p>${salida}</p>`;
} 2

function buscarPalabra() {
    //Variable para guardar el texto del input
    let texto = document.getElementById("texto").value;
    //Variable para guardar la palabra del input
    let palabra = document.getElementById("palabra").value;

    //Comprueba si la funcion devolvio True o False
    if (buscaP(texto, palabra)) {
        //Se crean los elementos p del DOM dentro del div salida1
        //En caso de que la palabra se haya encontrado
        document.getElementById("salida1").innerHTML = "<p>Palabra encontrada</p>";
    } else {
        //Se crean los elementos p del DOM dentro del div salida1
        //En caso de que la palabra no se haya encontrado
        document.getElementById("salida1").innerHTML = "<p>Palabra no encontrada</p>";
    }
}

function buscaP(texto, palabra) {
    //Comprueba que la palabra se encuentre en el texto; si devuelve -1 significa que no se ha encontrado y devuelve False
    if (texto.indexOf(palabra) != -1) {
        return true;
    } else {
        return false;
    }
}

function contarLetrasIguales() {
    //Variable para guardar el texto del input
    let texto = document.getElementById("texto").value;
    //Variable para guardar la letra del input
    let letra = document.getElementById("letra").value;

    //contador para contar las letras
    let contador = 0;
    if (letra.length == 1) {
        for (caracter of texto.toLowerCase()) {
            //Comprueba que el caracter sea una letra
            if ((caracter >= "a") && (caracter <= "z") && (caracter == letra.toLowerCase())) {
                contador++;
            }
        }
        //Se crean los elementos p del DOM dentro del div salida1
        document.getElementById("salida1").innerHTML = `<p>${contador}</p>`;
    } else {
        //Se crean los elementos p del DOM dentro del div salida1
        document.getElementById("salida1").innerHTML = `<p>Introduce <b>SOLO UNA LETRA</b></p>`;
    }
}

function contarVocales() {
    //Variable para guardar el texto del input
    let texto = document.getElementById("texto").value;

    //contador para contar las letras
    let contador = [0, 0, 0, 0, 0];
    for (caracter of texto.toLowerCase()) {
        //Comprueba que el caracter sea una letra
        switch (caracter) {
            case "a":
                contador[0]++;
                break;
            case "e":
                contador[1]++;
                break;
            case "i":
                contador[2]++;
                break;
            case "o":
                contador[3]++;
                break;
            case "u":
                contador[4]++;
                break;
        }
    }
    //Se crean los elementos p del DOM dentro del div salida1
    document.getElementById("salida1").innerHTML = `<p>Hay ${contador[0]} as, ${contador[1]} es, ${contador[2]} is, ${contador[3]} os, ${contador[4]} us</p>`;
}

function separarPalabras() {
    //Variable para guardar el texto del input
    let texto = document.getElementById("texto").value;

    //Se crean los elementos p del DOM dentro del div salida1
    document.getElementById("salida1").innerHTML = separar(texto);
}


function separar(texto) { //Separa el texto y lo devuelve como array
    return texto.split(" ")
}

function darVueltaPalabras() {
    //Variable para guardar el texto del input
    let texto = document.getElementById("texto").value;
    
    //Almacena el array de palabras devuelto por la funcion separar
    const listaPalabra = separar(texto);

    //Almacena la salida que da el siguiente for
    let salida = "";

    //Itera los contenidos de listaPalabra
    for (const palabra of listaPalabra) {
        //Añade la palabra antes de lo que habia en salida
        salida = palabra +" "+ salida;
    }
    
        //Se crean los elementos p del DOM dentro del div salida1
        document.getElementById("salida1").innerHTML = `<p>${salida}</p>`;
}