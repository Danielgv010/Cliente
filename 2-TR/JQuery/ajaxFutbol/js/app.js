$(main)

function main(){
    $.get("py/fc.py",function(data,status){ // Llama a un .py para generar los option del select
            for(team of data.teams){ // Genera los option con los elementos del json que devuelve el .py
                let option = $("<option>")
                option.text(team);
                option.attr("value",team)
                $("#teamSelect").append(option);
            }
        })
    $("#submit").click(getInfo);
}

function getInfo(){
    let team = $("#teamSelect").val()
    $.get("py/data.py?team="+team,function(data,status){ // Llama a un .py para acceder a la info del equipo seleccionado
        $("#output").empty(); // Vacía el div para que no se duplique la información

        // Muestra la información que devuelve el .py en el html
        let teamName = $("<h1>")
        teamName.text("Team: "+team);
        let teamStadium = $("<h2>")
        teamStadium.text("Stadium: "+data.stadium)
        let teamCity = $("<h2>")
        teamCity.text("City: "+data.city)

        $("#output").append(teamName)
        $("#output").append(teamStadium)
        $("#output").append(teamCity)
    })
}