$(main)

let db;
let entradaHeader;
let salidaHeader;
let openRequest = indexedDB.open("personas", 1);

openRequest.onupgradeneeded = function () {
    let db1 = openRequest.result;
    let personasEntrada = db1.createObjectStore('personasEntrada', { keyPath: 'dni' });
    let indiceApellidosEntrada = personasEntrada.createIndex("apellidos_ind", "apellidos")

    let personasSalida = db1.createObjectStore('personasSalida', { keyPath: 'dni' });
    let indiceApellidosSalida = personasSalida.createIndex("apellidos_ind", "apellidos")
}

openRequest.onerror = function () {

}

openRequest.onsuccess = function () {
    db = openRequest.result;
    listarEntrada();
    listarSalida();
}

function main() {
    entradaHeader = $("#header")
    salidaHeader = $("#header2")
    $("#registrar").click(function () {
        guardarDatos();
    })
    $("#limpiar").click(function () {
        clearInputs();
    })
    $("#busquedaEntradaDniBoton").click(function () {
        buscarDniEntrada()
    })
    $("#busquedaSalidaDniBoton").click(function () {
        buscarDniSalida()
    })
    $("#busquedaEntradaApellidosBoton").click(function () {
        buscarApellidosEntrada();
    })
    $("#busquedaSalidaApellidosBoton").click(function () {
        buscarApellidosSalida();
    })
}

function guardarDatos() {
    let persona = {
        nombre: $("#nombre").val(),
        apellidos: $("#apellidos").val(),
        dni: $("#dni").val(),
        contacto: $("#contacto").val(),
        fechaEntrada: new Date().toDateString(),
    }
    console.log(persona)

    let transaccion = db.transaction("personasEntrada", "readwrite");
    let personas = transaccion.objectStore("personasEntrada")
    let request = personas.add(persona)

    request.onerror = function () {

    }

    request.onsuccess = function () {
        db = openRequest.result
        listarEntrada()
    }
}

function clearInputs() {
    $("#nombre").val("");
    $("#apellidos").val("");
    $("#dni").val("");
    $("#contacto").val("");
}

function listarEntrada() {
    let transaccion = db.transaction("personasEntrada", "readonly");
    let personas = transaccion.objectStore("personasEntrada");
    let salida = personas.getAll();

    salida.onsuccess = function () {
        listar("entrada",salida.result)
    }
}

function listarSalida() {
    let transaccion = db.transaction("personasSalida", "readonly");
    let personas = transaccion.objectStore("personasSalida");
    let salida = personas.getAll();

    salida.onsuccess = function () {
        listar("salida",salida.result)
    }
}

function listar(tabla, salida) {
    if (tabla == "entrada") {
        let tabla = $("#tablaEntrada")
        tabla.empty()
        tabla.append(entradaHeader);
        for (persona of salida) {
            let fila = $("<tr>");
            fila.append($("<td>").text(persona.nombre));
            fila.append($("<td>").text(persona.apellidos));
            fila.append($("<td>").text(persona.dni));
            fila.append($("<td>").text(persona.contacto));
            fila.append($("<td>").text(persona.fechaEntrada));

            let celdaMover = $("<td>");
            let botonMover = $("<button>");
            botonMover.attr("id", persona.dni)
            botonMover.click(function () {
                mover(this.id);
            });
            botonMover.text("Mover")
            celdaMover.append(botonMover)

            fila.append(celdaMover);
            tabla.append(fila);
        }
    } else {
        let tabla = $("#tablaSalida")
        tabla.empty()
        tabla.append(salidaHeader);
        for (persona of salida) {
            let fila = $("<tr>");
            fila.append($("<td>").text(persona.nombre));
            fila.append($("<td>").text(persona.apellidos));
            fila.append($("<td>").text(persona.dni));
            fila.append($("<td>").text(persona.contacto));
            fila.append($("<td>").text(persona.fechaEntrada));
            fila.append($("<td>").text(persona.fechaSalida));
            tabla.append(fila);
        }
    }
}

function mover(id) {
    let persona;

    let transaccion = db.transaction("personasEntrada", "readwrite")
    let personas = transaccion.objectStore("personasEntrada")
    let salida = personas.get(id)
    salida.onsuccess = function () {
        persona = {
            nombre: salida.result.nombre,
            apellidos: salida.result.apellidos,
            dni: salida.result.dni,
            contacto: salida.result.contacto,
            fechaEntrada: salida.result.fechaEntrada,
            fechaSalida: new Date().toDateString(),
        }
        // persona.fechaSalida = new Date().toDateString()
        personas.delete(id)
        listarEntrada()

        let transaccion2 = db.transaction("personasSalida", "readwrite");
        let personas2 = transaccion2.objectStore("personasSalida")
        let request = personas2.add(persona)

        request.onerror = function () {
            console.log("Error")
        }

        request.onsuccess = function () {
            db = openRequest.result
            listarSalida()
        }
    }

}

function buscarDniEntrada() {
    let transaccion = db.transaction("personasEntrada", "readonly");
    let personas = transaccion.objectStore("personasEntrada");
    let salida = personas.get($("#busquedaEntradaDni").val());

    salida.onsuccess = function () {
        listar("entrada",[salida.result])
    }

}

function buscarDniSalida() {
    let transaccion = db.transaction("personasSalida", "readonly");
    let personas = transaccion.objectStore("personasSalida");
    let salida = personas.get($("#busquedaSalidaDni").val());

    salida.onsuccess = function () {
        listar("salida",[salida.result])
    }

}

function buscarApellidosEntrada() {
    let transaccion = db.transaction("personasEntrada", "readonly");
    let personas = transaccion.objectStore("personasEntrada");
    let index = personas.index("apellidos_ind");
    let salida = index.getAllKeys($("#busquedaEntradaApellidos").val());
    salida.onsuccess = function () {
        let tabla = $("#tablaEntrada")
        tabla.empty()
        tabla.append(entradaHeader);
        for (key of salida.result) {
            let persona = personas.get(key)
            persona.onsuccess = function () {
                let fila = $("<tr>");
                let celdaNombre = $("<td>");
                celdaNombre.text(persona.result.nombre);

                let celdaApellidos = $("<td>");
                celdaApellidos.text(persona.result.apellidos);

                let celdaDni = $("<td>");
                celdaDni.text(persona.result.dni);

                let celdaContacto = $("<td>");
                celdaContacto.text(persona.result.contacto);

                let celdaFechaEntrada = $("<td>");
                celdaFechaEntrada.text(persona.result.fechaEntrada);

                let celdaMover = $("<td>");
                let botonMover = $("<button>");
                botonMover.attr("id", persona.result.dni)
                botonMover.click(function () {
                    mover(this.id);
                });
                botonMover.text("Mover")
                celdaMover.append(botonMover)

                fila.append(celdaNombre, celdaApellidos, celdaDni, celdaContacto, celdaFechaEntrada, celdaMover);
                tabla.append(fila);

            }
        }
    }
}

function buscarApellidosSalida() {
    let transaccion = db.transaction("personasSalida", "readonly");
    let personas = transaccion.objectStore("personasSalida");
    let index = personas.index("apellidos_ind");
    let salida = index.getAllKeys($("#busquedaSalidaApellidos").val());
    salida.onsuccess = function () {
        let tabla = $("#tablaSalida")
        tabla.empty()
        tabla.append(salidaHeader);
        for (key of salida.result) {
            let persona = personas.get(key)
            persona.onsuccess = function () {
                let fila = $("<tr>");
                let celdaNombre = $("<td>");
                celdaNombre.text(persona.result.nombre);

                let celdaApellidos = $("<td>");
                celdaApellidos.text(persona.result.apellidos);

                let celdaDni = $("<td>");
                celdaDni.text(persona.result.dni);

                let celdaContacto = $("<td>");
                celdaContacto.text(persona.result.contacto);

                let celdaFechaEntrada = $("<td>");
                celdaFechaEntrada.text(persona.result.fechaEntrada);

                let celdaFechaSalida = $("<td>");
                celdaFechaSalida.text(persona.result.fechaSalida);



                fila.append(celdaNombre, celdaApellidos, celdaDni, celdaContacto, celdaFechaEntrada, celdaFechaSalida);
                tabla.append(fila);

            }
        }
    }
}