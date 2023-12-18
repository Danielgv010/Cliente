function calcula(){
    //Saca los contenidos de los inputs con id "cat1" y "cat2"
    let c1 = document.getElementById("cat1").value;
    let c2 = document.getElementById("cat2").value;
    console.log(c1,c2);

    //Hace el calculo de la hipotenusa con la ayuda de Math.sqrt para hacer la raíz cuadrada
    let resultado = Math.sqrt(c1**2+c2**2);
    console.log(resultado)

    //Imprime el resultado en el html
    document.getElementById("salida").innerHTML = resultado;
}