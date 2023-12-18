$(main);

function main() {
    $("#button1").click(function(){ // Calcula el IMC con los datos introducidos por el usuario en los input y muestra el resultado en #salida
        $("#salida1").html($("#peso").val() / ($("#altura").val()**2));
    })

    $("#button2").click(function(){ // Calcula la hipotenusa de un triangulo con los datos introducidos por el usuario en los input y muestra el resultado en #salida
        $("#salida2").html(Math.sqrt( ($("#cateto1").val()**2) + $("#cateto2").val()**2) );
    })
}