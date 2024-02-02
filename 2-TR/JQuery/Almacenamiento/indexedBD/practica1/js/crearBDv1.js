let db;

let openRequest = indexedDB.open("miBaseDeDatos",1);


openRequest.onupgradeneeded = function(){
    let db1 = openRequest.result;
    // Crear almacenes, claves, indices
    // Solo se puede aqui
    let libros = db1.createObjectStore('libros',{keyPath:'id'});
    let indTitulo = libros.createIndex('titulo_ind','titulo')
}

openRequest.onsuccess = function(){
    db = openRequest.result
    console.log("Recogido evento success")
}

function guardaBD(){
    console.log("guardar en la BD")
    // Recuperar los datos
    // Generar un objeto para guardar
    libro = {
        id:document.getElementById("id").value,
        titulo:document.getElementById("titulo").value,
        autor:document.getElementById("autor").value,
        tipo:document.getElementById("tipo").value,
    }
    // Guardar el objeto en almacen de la BD
    // 1 - Crea una transaccion
    let transac = db.transaction("libros","readwrite")

    // 2 - Obtener el almacen
    let books = transac.objectStore("libros")

    // 3 - Añadir al almacen el objeto
    let request = books.add(libro)
    
    // 4 - Gestionar los eventos con el resultado de la operacion
    request.onerror = function(){
        console.error("Error",openRequest.error)
    }
    
    request.onsuccess = function(){
        db = openRequest.result
        console.log("Recogido evento success")
    }
    
}