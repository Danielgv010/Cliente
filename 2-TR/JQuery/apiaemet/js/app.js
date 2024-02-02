let settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/28161/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkYW5pZWxnYXJjaWF2MDEwQGdtYWlsLmNvbSIsImp0aSI6IjczZTg4NTc1LWUyNWMtNGU1Zi1iMjkwLWQ2OTQxNzM4NWRhNSIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNzA1OTEwMzk1LCJ1c2VySWQiOiI3M2U4ODU3NS1lMjVjLTRlNWYtYjI5MC1kNjk0MTczODVkYTUiLCJyb2xlIjoiIn0.cnf1F1rSUvGa9W4Ngo1EsS9_fgNCzOfzCZxbGLxKmDE",
    "method": "GET",
    "headers": {
        "cache-control": "no-cache"
    }
}

$.ajax(settings).done(function (response) {
    if (response.estado == 200) {
        pedirDatos(response.datos);
    } else {
        alert(`Error en la petición: ${response.descripcion} (${response.estado})`)
    }
});

function pedirDatos(resultado) {
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": resultado,
        "method": "GET",
        "headers": {
            "cache-control": "no-cache"
        }
    }

    $.ajax(settings).done(function (response) {
        let salida = JSON.parse(response);
        let texto = "";
        console.log(salida[0].nombre);
        console.log(salida[0].prediccion.dia);
        for ( let dia of salida[0].prediccion.dia ){
            texto += (dia.fecha+" - ")
            texto += (dia.temperatura.maxima+" - ")
            texto += (dia.temperatura.minima+" - ")
            texto += "<br>"
        }
        $("#salida").html(texto);

    });
}