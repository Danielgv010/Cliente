//onload=inicio;  // Ejecuta la funcion inicio
//onload=inicio()  Le asigna el valor devuelto por la funcion de inicio

alert("Esto es un alert");

let suma = 0;
suma = 2+5;
console.log(suma);

function inicio(frase){
    console.log("Esto es una salida por consola de desarrollo");
    console.log(frase)

    document.getElementById("parrafo").innerHTML = "adios"
}

function nuevaVentana(){
    window.open();
}