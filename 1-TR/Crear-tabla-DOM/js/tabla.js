function crearTabla() {
    let body = document.getElementsByTagName("body")[0];

    //Comprueba que la tabla ya exista. Si es así, la borra
    let tableExist = document.getElementById("tabla");
    if(tableExist){
        body.removeChild(tableExist);
        //body.firstChild.remove();
    }

    //Crea una tala con el id "tabla"
    let tabla = document.createElement("table");
    tabla.id = "tabla";

    //Obtiene los valores del formulario
    let row = document.getElementById("filas").value;
    let column = document.getElementById("columnas").value;
    let border = document.getElementById("borde").checked;
    let color = document.getElementById("color").value;

    //Crea las filas de la tabla, cuando se crea una también se crean el número de celdas que necesita
    for (let i = 0; i < row; i++) {
        console.log("It: "+i)
        const fila = document.createElement("tr");
        for (let j = 0; j < column; j++) {
            const columna = document.createElement("td");
            columna.innerHTML = String(i)+String(j);
            fila.appendChild(columna);
        }
        tabla.appendChild(fila);
    }
    
    //Si está marcado el checkox del formularo se crean los bordes de la tabla con el color introducido por el usuario
    if (border) {
        tabla.setAttribute("border",1);
        tabla.setAttribute("style","border-color:"+color+";border-collapse:collapse;");
    } else {
        tabla.setAttribute("border",0);
    }

    //Asigna la tabla al body del html
    body.appendChild(tabla);
}