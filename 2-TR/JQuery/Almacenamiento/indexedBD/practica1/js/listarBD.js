let db;

let openRequest = indexedDB.open("miBaseDeDatos", 1);


openRequest.onupgradeneeded = function () {
    let db1 = openRequest.result;
    // Crear almacenes, claves, indices
    // Solo se puede aqui
    db1.createObjectStore('libros', { keyPath: 'id' });
}

openRequest.onerror = function () {
    console.error("Error", openRequest.error)
}

openRequest.onsuccess = function () {
    db = openRequest.result
    console.log("Recogido evento success")
    listar()
}

function listar() {
    // 1 - Crear una transaccion
    let transac = db.transaction("libros", "readonly")

    // 2 - Oobtener el almacen
    let lbrs = transac.objectStore("libros")

    // 3 - Recuperar todos los datos del almacen
    // let salida = lbrs.getAll()
    let salida = lbrs.getAll(IDBKeyRange.bound("0", "325", true, true))
    console.log(salida)

    salida.onsuccess = function () {
        let tabla = document.getElementById("salida")
        for (libro of salida.result) {
            let fila = document.createElement("tr") // Crear la fila

            let celdaId = document.createElement("td") // Crear la celda
            celdaId.appendChild(document.createTextNode(libro.id)) // Rellenar la celda
            fila.appendChild(celdaId)

            let celdaTitulo = document.createElement("td") // Crear la celda
            celdaTitulo.appendChild(document.createTextNode(libro.titulo)) // Rellenar la celda
            fila.appendChild(celdaTitulo)

            let celdaAutor = document.createElement("td") // Crear la celda
            celdaAutor.appendChild(document.createTextNode(libro.autor)) // Rellenar la celda
            fila.appendChild(celdaAutor)

            let celdaTipo = document.createElement("td") // Crear la celda
            celdaTipo.appendChild(document.createTextNode(libro.tipo)) // Rellenar la celda
            fila.appendChild(celdaTipo)

            tabla.appendChild(fila)
        }
    }

    let res = lbrs.getKey("0")

    res.onsuccess = function () {
        console.log(res.result)

    }

    let ti = lbrs.index("titulo_ind") // Busco el indice en el almacen

    let res1 = ti.getAllKeys("libro 1") // Ejecuto la consulta sobre el indice

    res1.onsuccess = function () {
        console.log(res1.result)
        for (keylibro of res1.result) { // Recorro el resultado
            console.log(lbrs.get(keylibro))
        }
    }
}


// Borrado
// books.delete('<id>')
// books.delete('01')