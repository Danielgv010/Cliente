onload=start;

function start(argument){
    const canvas = document.getElementById("myCanvas");
    
    // Recupera las propiedades de ancho y alto del canvas
    ancho = canvas.width;
    alto = canvas.height;

    const context = canvas.getContext("2d");
    context.begin


    // context.beginPath();
    // context.strokeStyle = "#ff0000"; //Cambia el color a azul
    // context.moveTo(0,0); // Se mueve el cursor a la coordenada 0,0
    // context.lineTo(ancho,alto); // Pinta desde el cursor hasta la coordenada ancho,alto
    // context.stroke(); // Representa el dibujo
    // context.closePath();
    
    // context.beginPath();
    // context.lineWidth = 3; // Cambia el ancho de la línea
    // context.strokeStyle = "#0000ff"; //Cambia el color a verde
    // context.moveTo(ancho,0); // Se mueve el cursor a la coordenada ancho,0
    // context.lineTo(0,alto); // Pinta desde el cursor hasta la coordenada 0,alto
    // context.stroke(); // Representa el dibujo
    // context.closePath();
    
    // // Crea un rectanguo
    // // Los dos primeros parámetros son las coordenadas de la esquina de arriba-izquierda
    // // Los dos siguientes parámetros son el ancho y el alto del rectangulo
    // context.fillStyle = "#fff00a"
    // context.fillRect(200,150,200,100)

    // context.lineWidth = 1; // Cambia el ancho de la línea
    // context.strokeStyle = "#ff00ff"; //Cambia el color a morado
    // context.strokeRect(450,150,50,100) // Crea un rectangulo sin relleno (mismos parámetros)
    
    
    // context.beginPath();
    // context.strokeStyle = "#a00fff"; //Cambia el color a morado
    // context.arc(100,200,50,0,Math.PI*2); // Dibuja un círculo
    // context.fill(); // Rellena el círculo
    // context.stroke(); // Representa el dibujo
    // context.closePath();

}
