function llamadaAjax() {
    // ------Configurar el objeto para la peticion al servidor------
    let httpRequest = new XMLHttpRequest();

    // ------Registrar la funcion que trata la respuesta del servidor------
    httpRequest.onreadystatechange = function () { // Se ejecuta cuando se completa la respuesta del servidor
        if (this.readyState == 4 && this.status == 200) { // Si la respuesta es correcta
            crearSalida(JSON.parse(this.responseText));
        } else { //La petición tiene un error
            console.log(`estado: ${this.readyState}, respuesta servidor: ${this.status}`);
        }
    }

    // ------Peticion al servidor------
    httpRequest.open("GET", "/Servidor/ajaxServ/pedirdatos.py", true); // Construir la peticion
    httpRequest.send(); // Ejecutar la peticion
}

function insertaAjax() {
    let text = document.getElementById("texto").value;
    let number = document.getElementById("numero").value;

    let httpRequest = new XMLHttpRequest();
    let request = `/Servidor/ajaxServ/insertardatos.py?texto=${text}&numero=${number}`; // Construir la peticion

    // ------Registrar la funcion que trata la respuesta del servidor------
    httpRequest.onreadystatechange = function () { // Se ejecuta cuando se completa la respuesta del servidor
        if (this.readyState == 4 && this.status == 200) { // Si la respuesta es correcta
            document.getElementById("salida").innerHTML = JSON.parse(this.responseText);
        } else { //La petición tiene un error
            console.log(`estado: ${this.readyState}, respuesta servidor: ${this.status}`);
        }
    }

    // ------Peticion al servidor------
    httpRequest.open("GET", request, true); // Construir la peticion
    httpRequest.send(); // Ejecutar la peticion
}

function crearSalida(table) {
    let HTMLTable = "<table border='1' style='border-collapse:collapse;'>";
    for (row of table) {
        HTMLTable += "<tr>";
        for (data of row) {
            HTMLTable += `<td>${data}</td>`
        }
        HTMLTable += "</tr>";
    }
    HTMLTable += "</table>";
    document.getElementById("salida").innerHTML = HTMLTable;
}