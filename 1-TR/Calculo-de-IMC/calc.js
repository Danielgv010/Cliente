function calcula(){
    //Saca los contenidos de los inputs con id "peso" y "altura"
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    console.log(peso,altura);

    //Hace el calculo del IMC
    let resultado = peso/(altura**2);
    console.log(resultado)

    //Imprime el resultado en el html
    document.getElementById("salida").innerHTML = resultado;
}