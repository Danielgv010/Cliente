function validar(){
    respuesta = true;

    console.log("valida")

    let param1 = document.getElementById("parametro1").value;

    if (param1 != "Hola"){
        respuesta = false;
        document.getElementById("parametro1").style = "background:red;"
    }

    return respuesta;
}