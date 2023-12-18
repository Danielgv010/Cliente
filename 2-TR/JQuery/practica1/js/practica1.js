// Hacen lo mismo onload

// $(function(){
//     alert("hola");
// })

// $(document).ready(function(){
//     alert("hola");
// })

$(principal);
function principal(){
    alert("DOM cargado");
    $("#bo").click(function(){
        $("p").hide();
    })
    $("#bm").click(function(){
        $("p").show();
    })
    $("#bt").click(function(){
        $("p").toggle();
    })
    $("#bi").click(function(){
        $(".impar").toggle();
    })
    $("#bp").click(function(){
        $(".par").toggle();
        this.innerHTML = "cambiado"
    })

    $("#p1").click(function(){
        $(this).hide();
    })

    $("#p2").click(function(){
        this.style.backgroundColor="red";
    })

    $("p").mouseenter(function(){
        console.log(this.innerHTML);
    })

    $("p").mouseup(function(){
        console.log(`raton soltado en ${this.innerHTML}`);
    })

    $("button").focus(function(){
        console.log(this.innerHTML);
    })
}

function noAccesible(){
    $("#p1").ready(alert("parrafo accesible"));
    $("#p2").ready(alert("parrafo 2 accesible"));
    $("#p3").ready(alert("parrafo 3 accesible"));
}
