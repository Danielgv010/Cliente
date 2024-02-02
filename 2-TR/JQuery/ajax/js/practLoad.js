$(inicio);

function inicio(){
    $("button").click(function(){
        $("#divisor1").load("datos/tabla.html",function(responseTxt,statusTxt,xhr){
            if(statusTxt == "success"){
                console.log(responseTxt);
                alert("External content loaded successfully!")
            }
            if(statusTxt == "error"){
                alert("Error: "+xhr.status+": "+xhr.statusText)
            }
        });
        $("#divisor2").load("datos/texto.html #p1");
        $("#divisor3").load("datos/tabla.html .clase1");
        $("#divisor4").load("datos/texto.html #p1,#p2");
    });
}