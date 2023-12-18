let tabla = document.getElementById("data")


function llamadaAjax(){
    console.log("llegaa");
    //Crear el objeto para conectar al servidor
    const httpRequest = new XMLHttpRequest();
    //Resolver la respuesta
    // ------Registrar la funcion que trata la respuesta del servidor------
    httpRequest.onreadystatechange = function () { // Se ejecuta cuando se completa la respuesta del servidor
        if (this.readyState == 4 && this.status == 200) { // Si la respuesta es correcta
            console.log(this.responseText); // Imprime por consola la respuesta en formato json

            let datos = JSON.parse(this.responseText); // Convierte el json en lista
            crearSalida(datos); // Llama a crearfilas y le pasa la lista
        } else { //La petición tiene un error
            console.log(`estado: ${this.readyState}, respuesta servidor: ${this.status}`); // Imprime el error por consola
        }
    }
    //Hacer la llamada al servidor
    // ------Peticion al servidor------
    httpRequest.open("GET", "/Projects/ajax-repaso/app.py", true); // Construir la peticion
    httpRequest.send(); // Ejecutar la peticion
}

function crearSalida(persona_list){
    console.log(persona_list);
    let contenido = ""
    for (persona of persona_list){
        console.log(persona)
        contenido += "<tr>"
        for (data of persona){
            contenido += `<td>${data}</td>`
        }
        contenido += "</tr>"
    }
    tabla.innerHTML = contenido
}