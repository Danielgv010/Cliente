onload = principal

let tbodyDatos;
// const plantilla;
// const tbodyDatos;

function principal() {
    tbodyDatos = document.getElementById("tablaDatos");
    tbodyDatos.innerHTML = "";
    document.getElementById("ver-todos").addEventListener("click", () => {
        traerDatosServidor();
    })
    document.getElementById("filtrar").addEventListener("click", () => {
        filtrar();
    })
    document.getElementById("botonInsertar").addEventListener("click", () => {
        insertar();
    })
    document.getElementById("botonModificar").addEventListener("click", () => {
        modificarCommit();
        console.log("done")
    })
    traerDatosServidor();
    // plantilla = document.getElementById("filaDatos");
    // tbodyDatos = document.getElementById("tablaDatos");

    // let filaTR = document.importNode(plantilla.content, true);

    // filaTR.id = "vj1";

    // let nombreTD = filaTR.querySelector("#nombre");
    // nombreTD.innerHTML = "AAA";

    // let empresaTD = filaTR.querySelector("#empresa");
    // empresaTD.innerHTML = "BBBB";

    // tbodyDatos.appendChild(filaTR);

    // filaTR = document.importNode(plantilla.content, true);

    // filaTR.id = "vj2";

    // nombreTD = filaTR.querySelector("#nombre");
    // nombreTD.innerHTML = "11111";

    // empresaTD = filaTR.querySelector("#empresa");
    // empresaTD.innerHTML = "2222";

    // let botonBorrar = filaTR.querySelector("#borrar");
    // botonBorrar.href="https://www.google.com";

    // tbodyDatos.appendChild(filaTR);

    //Conectarse por ajax al servidor, pedir los datos de videojuegos y rellenar la tabla
}

function traerDatosServidor() {
    //Crear el objeto para conectar al servidor
    const httpRequest = new XMLHttpRequest();
    //Resolver la respuesta
    // ------Registrar la funcion que trata la respuesta del servidor------
    httpRequest.onreadystatechange = function () { // Se ejecuta cuando se completa la respuesta del servidor
        if (this.readyState == 4 && this.status == 200) { // Si la respuesta es correcta
            console.log(this.responseText); // Imprime por consola la respuesta en formato json

            let datos = JSON.parse(this.responseText); // Convierte el json en lista
            creaFilas(datos); // Llama a crearfilas y le pasa la lista
        } else { //La petición tiene un error
            console.log(`estado: ${this.readyState}, respuesta servidor: ${this.status}`); // Imprime el error por consola
        }
    }
    //Hacer la llamada al servidor
    // ------Peticion al servidor------
    httpRequest.open("GET", "/Projects/Servidor/Videojuegos/pedirdatosAPI.py", true); // Construir la peticion
    httpRequest.send(); // Ejecutar la peticion
}

function creaFilas(listaVideoJuegos) {
    const plantilla = document.getElementById("filaDatos"); // Se trae el template
    tbodyDatos = document.getElementById("tablaDatos"); // Se trae el tbody

    //bucle
    for (let vj of listaVideoJuegos) { //Por cada videojuego en la lista de videojuegos
        let filaTR = document.importNode(plantilla.content, true); // Se trae el contenido de la plantilla

        filaTR.querySelector("#fila").id = "vj" + vj[0]; // Mete el id en un atributo

        let nombreTD = filaTR.querySelector("#nombre"); // Se trae un td
        nombreTD.innerHTML = vj[1]; // Mete el nombre en el td

        let empresaTD = filaTR.querySelector("#empresa"); // Se trae un td
        empresaTD.innerHTML = vj[2]; // Mete la empresa en el td

        let tematicaTD = filaTR.querySelector("#tematica"); // Se trae un td
        tematicaTD.innerHTML = vj[3]; // Mete la tematica en el td

        let nJugTD = filaTR.querySelector("#nJug"); // Se trae un td
        nJugTD.innerHTML = vj[4]; // Mete el nJug en el td

        let publiTD = filaTR.querySelector("#publicacion"); // Se trae un td
        publiTD.innerHTML = vj[5]; // Mete la publicacion en el td

        let borrarTD = filaTR.querySelector("#borrar"); // Se trae un td
        borrarTD.addEventListener("click", () => {
            borrar(vj[0])
        })// Añade la funcion de borrar

        let modificarTD = filaTR.querySelector("#modificar"); // Se trae un td
        modificarTD.addEventListener("click", () => {
            modificar(vj[0])
        })// Añade la funcion de borrar

        tbodyDatos.appendChild(filaTR); // Añade la nueva fila al tbody
    }
}

function borrar(id) {
    //Crear el objeto para conectar al servidor
    const httpRequest = new XMLHttpRequest();
    //Resolver la respuesta
    // ------Registrar la funcion que trata la respuesta del servidor------
    httpRequest.onreadystatechange = function () { // Se ejecuta cuando se completa la respuesta del servidor
        if (this.readyState == 4 && this.status == 200) { // Si la respuesta es correcta
            console.log(this.responseText); // Imprime por consola la respuesta en formato json
            let borrado = JSON.parse(this.responseText);
            if (borrado) {
                let filaBorrar = document.getElementById("vj" + id)
                filaBorrar.remove();
            } else {
                alert("no se pudo borrar")
            }
        } else { //La petición tiene un error
            console.log(`estado: ${this.readyState}, respuesta servidor: ${this.status}`); // Imprime el error por consola
        }
    }
    //Hacer la llamada al servidor
    // ------Peticion al servidor------
    httpRequest.open("GET", "/Projects/Servidor/Videojuegos/borrarAPI.py?id=" + id, true); // Construir la peticion
    httpRequest.send(); // Ejecutar la peticion
}

function modificar(vj) {
    //Crear el objeto para conectar al servidor
    const httpRequest = new XMLHttpRequest();
    //Resolver la respuesta
    // ------Registrar la funcion que trata la respuesta del servidor------
    httpRequest.onreadystatechange = function () { // Se ejecuta cuando se completa la respuesta del servidor
        if (this.readyState == 4 && this.status == 200) { // Si la respuesta es correcta
            console.log(this.responseText); // Imprime por consola la respuesta en formato json
            let modificar = JSON.parse(this.responseText);
            document.getElementById("idModificar").value = modificar[0];
            document.getElementById("nombreModificar").value = modificar[1];
            document.getElementById("empresaModificar").value = modificar[2];
            document.getElementById("tematicaModificar").value = modificar[3];
            document.getElementById("numJugadoresModificar").value = modificar[4];
            document.getElementById("anioModificar").value = modificar[5];
        } else { //La petición tiene un error
            console.log(`estado: ${this.readyState}, respuesta servidor: ${this.status}`); // Imprime el error por consola
        }
    }
    //Hacer la llamada al servidor
    // ------Peticion al servidor------
    httpRequest.open("GET", "/Projects/Servidor/Videojuegos/modificarAPI.py?id=" + vj, true); // Construir la peticion
    httpRequest.send(); // Ejecutar la peticion
}

function modificarCommit() {
    let id = document.getElementById("idModificar").value;
    let nombre = document.getElementById("nombreModificar").value;
    let empresa = document.getElementById("empresaModificar").value;
    let tematica = document.getElementById("tematicaModificar").value;
    let nJug = document.getElementById("numJugadoresModificar").value;
    let publicacion = document.getElementById("anioModificar").value;

    let insertaDatos = "";
    let datosOk = true;

    if (id != "") {
        insertaDatos += "id=" + id;
    } else {
        datosOk = false;
    }
    if (nombre != "") {
        insertaDatos += "&nombre=" + nombre;
    } else {
        datosOk = false;
    }
    if (empresa != "") {
        insertaDatos += "&empresa=" + empresa;
    } else {
        datosOk = false;
    }
    if (tematica != "") {
        insertaDatos += "&tematica=" + tematica;
    } else {
        datosOk = false;
    }
    if (nJug != "") {
        insertaDatos += "&nJug=" + nJug;
    } else {
        datosOk = false;
    }
    if (publicacion != "") {
        insertaDatos += "&anio=" + publicacion;
    } else {
        datosOk = false;
    }
    //Crear el objeto para conectar al servidor
    const httpRequest = new XMLHttpRequest();
    //Resolver la respuesta
    // ------Registrar la funcion que trata la respuesta del servidor------
    httpRequest.onreadystatechange = function () { // Se ejecuta cuando se completa la respuesta del servidor
        if (this.readyState == 4 && this.status == 200) { // Si la respuesta es correcta
            console.log(this.responseText); // Imprime por consola la respuesta en formato json
        } else { //La petición tiene un error
            console.log(`estado: ${this.readyState}, respuesta servidor: ${this.status}`); // Imprime el error por consola
        }
    }
    //Hacer la llamada al servidor
    // ------Peticion al servidor------
    httpRequest.open("GET", "/Projects/Servidor/Videojuegos/modificarCommitAPI.py?"+ insertaDatos, true); // Construir la peticion
    httpRequest.send(); // Ejecutar la peticion
}

function filtrar() {
    let empresa = document.getElementById("empresaForm").value;
    let tematica = document.getElementById("tematicaForm").value;
    let nJug = document.getElementById("numJugadoresForm").value;
    let anioInicial = document.getElementById("anioInicialForm").value;
    let anioFinal = document.getElementById("anioFinalForm").value;

    let filtro = ""
    if (empresa != "") {
        filtro += `empresa=${empresa}`
    }
    if (tematica != "") {
        if (filtro != "") {
            filtro += `&tematica=${tematica}`
        } else {
            filtro += `tematica=${tematica}`
        }
    }
    if (nJug != "") {
        if (filtro != "") {
            filtro += `&numJugadores=${nJug}`
        } else {
            filtro += `numJugadores=${nJug}`
        }
    }
    if (anioInicial != "") {
        if (filtro != "") {
            filtro += `&anioInicial=${anioInicial}`
        } else {
            filtro += `anioInicial=${anioInicial}`
        }
    }
    if (anioFinal != "") {
        if (filtro != "") {
            filtro += `&anioFinal=${anioFinal}`
        } else {
            filtro += `anioFinal=${anioFinal}`
        }
    }
    console.log(filtro);
    //Crear el objeto para conectar al servidor
    const httpRequest = new XMLHttpRequest();
    //Resolver la respuesta
    // ------Registrar la funcion que trata la respuesta del servidor------
    httpRequest.onreadystatechange = function () { // Se ejecuta cuando se completa la respuesta del servidor
        if (this.readyState == 4 && this.status == 200) { // Si la respuesta es correcta
            console.log(this.responseText); // Imprime por consola la respuesta en formato json

            tbodyDatos = document.getElementById("tablaDatos")
            tbodyDatos.innerHTML = "";

            let datos = JSON.parse(this.responseText); // Convierte el json en lista
            creaFilas(datos); // Llama a crearfilas y le pasa la lista
        } else { //La petición tiene un error
            console.log(`estado: ${this.readyState}, respuesta servidor: ${this.status}`); // Imprime el error por consola
        }
    }
    //Hacer la llamada al servidor
    // ------Peticion al servidor------
    httpRequest.open("GET", "/Projects/Servidor/Videojuegos/filtrarDatosAPI.py?" + filtro, true); // Construir la peticion
    httpRequest.send(); // Ejecutar la peticion
}

function insertar() {
    let nombre = document.getElementById("nombreInsertar").value;
    let empresa = document.getElementById("empresaInsertar").value;
    let tematica = document.getElementById("tematicaInsertar").value;
    let nJug = document.getElementById("numJugadoresInsertar").value;
    let publicacion = document.getElementById("anioInsertar").value;

    let insertaDatos = "";
    let datosOk = true;

    if (nombre != "") {
        insertaDatos += "nombre=" + nombre;
    } else {
        datosOk = false;
    }
    if (empresa != "") {
        insertaDatos += "&empresa=" + empresa;
    } else {
        datosOk = false;
    }
    if (tematica != "") {
        insertaDatos += "&tematica=" + tematica;
    } else {
        datosOk = false;
    }
    if (nJug != "") {
        insertaDatos += "&nJug=" + nJug;
    } else {
        datosOk = false;
    }
    if (publicacion != "") {
        insertaDatos += "&anio=" + publicacion;
    } else {
        datosOk = false;
    }


    console.log(insertaDatos);

    if (datosOk) {
        //crear el objeto para conectar al servidor
        const httprq = new XMLHttpRequest();

        //resolver la respuesta

        httprq.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) { //si la respuesta es correcta
                console.log(this.responseText);
                principal();

            } else { //la peticion tiene un error
                console.log("estado: " + this.readyState + ", resp servidor:" + this.status);
            }
        }

        //hacer la llamada al servidor
        //contruir la peticion
        httprq.open("GET", "/Projects/SERVIDOR/VideoJuegos/insertaDatosAPI.py?" + insertaDatos, true);

        //ejecuto la peticion
        httprq.send();
    } else {
        alert("datos incorrectos")
    }
}
