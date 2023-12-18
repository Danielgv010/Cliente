function calcula(){
    console.log("calcula");
    let resultado = 0;

    //Leer los datos del formulario, los numeros
    let n1 = Number(document.getElementById("num1").value); //Obtiene el valor del elemento con id num1
    let n2 = Number(document.getElementById("num2").value); //Obtiene el valor del elemento con id num2
    
    console.log(n1,n2);
    //Leer la operación que queremos hacer
    let suma = document.getElementById("suma").checked; //leer el radio "suma" si esta marcado o no
    let resta = document.getElementById("resta").checked; //leer el radio "resta" si esta marcado o no
    let multi = document.getElementById("multi").checked; //leer el radio "multi" si esta marcado o no
    let divi = document.getElementById("divi").checked; //leer el radio "divi" si esta marcado o no

    console.log(suma,resta,multi,divi);
    //Realizar la operación
    if(suma){
        resultado=n1+n2;
    } else if(resta){
        resultado=n1-n2;
    } else if(multi){
        resultado=n1*n2;
    } else if(divi){
        resultado=n1/n2;
    }

    console.log(resultado)
    //Mostrar el resultado
    document.getElementById("salida").innerHTML = resultado;
}