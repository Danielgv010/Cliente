function guardar(){

    let datos = new Map();

    datos.set("datoTexto",$("#datoTexto").val());
    datos.set("datoNumber",$("#datoNumber").val());
    datos.set("datoEmail",$("#datoEmail").val());
    datos.set("datoFecha",$("#datoFecha").val());
    datos.set("datoColor",$("#datoColor").val());

    let miMapa = JSON.stringify(Array.from(datos.entries()))
    localStorage.setItem("miMapa",miMapa);
}
function borrar(){
    localStorage.removeItem(prompt("Clave a borrar:"))
}
function recuperar(){
    if (localStorage.getItem("miMapa")){
        let datosArray = JSON.parse(localStorage.getItem("miMapa"));
        let datosRecuperados = new Map(datosArray);
        console.log(datosRecuperados)
    } else {
        alert("No existe")
    }
}