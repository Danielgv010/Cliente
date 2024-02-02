let dbai;

let openRequestai = indexedDB.open("BDAutoincrementada",1);


openRequestai.onupgradeneeded = function(){
    let dbai1 = openRequestai.result;
    // Crear almacenes, claves, indices
    // Solo se puede aqui
    dbai1.createObjectStore('libros',{autoIncrement: true});
}

openRequestai.onsuccess = function(){
    dbai = openRequestai.result
    console.log("Recogido evento success")
}

function guardaBDautoIncrementada(){
    console.log("guardar en la BD")
    // Recuperar los datos
    // Generar un objeto para guardar
    libro = {
        id:document.getElementById("idai").value,
        titulo:document.getElementById("tituloai").value,
        autor:document.getElementById("autorai").value,
        tipo:document.getElementById("tipoai").value,
    }
    // Guardar el objeto en almacen de la BD
    // 1 - Crea una transaccion
    let transac = dbai.transaction("libros","readwrite")

    // 2 - Obtener el almacen
    let books = transac.objectStore("libros")

    // 3 - Añadir al almacen el objeto
    let request = books.add(libro)
    
    // 4 - Gestionar los eventos con el resultado de la operacion
    request.onerror = function(){
        console.error("Error",openRequestai.error)
    }
    
    request.onsuccess = function(){
        dbai = openRequestai.result
        console.log("Recogido evento success")
    }
    
}