let contador = 1;
function cambiaImagen(){
    console.log("cambia la imagen");
    contador++;
    if (contador>7){
        contador = 1;
    }
    document.getElementById("imgJuego").setAttribute("src",`img/${contador}.png`)
}