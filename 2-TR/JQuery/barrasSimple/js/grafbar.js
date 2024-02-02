$(inicio)

function inicio() {
    const CANVAS = $("#misBarras");
    const DATOS = {
        labels:["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"],
        datasets: [
            {
                label:"datos de azul",
                data:[1,2,3,4,2,1,3],
                borderWidth: 3,
                backgroundColor: ["#0000FF55","#00FFFF55"],
                borderColor: ["#0000FFBB","#00FFFFBB"],
                hoverBackgroundColor: "#FFFFFF"
            },
            {
                label:"datos de rojo",
                data:[4,2,1,3,4,2,1],
                backgroundColor: "#FF000055"
            },
            {
                label:"datos de verde",
                data:[6,3,2,4,2,1,3],
                backgroundColor: "#00FF0055"
            }
        ]
    };
    //Aprenderse
    //bar, pie, line, scatter
    new Chart(CANVAS, {
        type: "bar",
        data: DATOS,
        options: {
            indexAxis: "y"
        }
    })
}