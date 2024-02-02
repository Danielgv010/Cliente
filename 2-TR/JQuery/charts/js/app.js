$(main)

function main(){
    const PIECANVAS = $("#pieChart");
    const LINECANVAS = $("#lineChart");
    const SCATTERCANVAS = $("#scatterChart");
    const PIEDATA = {
        labels:["Lunes","Martes","Miercoles","Jueves"],
        datasets: [
            {
                label:"datos de azul",
                data:[1,2,3,4],
            },
            {
                label:"datos de rojo",
                data:[4,2,1,3],
            }
        ]
    };
    const LINEDATA = {
        labels:["Lunes","Martes","Miercoles","Jueves"],
        datasets: [
            {
                label:"datos de azul",
                data:[1,2,3,4],
            },
            {
                label:"datos de rojo",
                data:[4,2,1,3],
            }
        ]
    };

    const SCATTERDATA = {
        datasets: [
            {
                label:"datos de azul",
                data:[
                    {
                        x: 10,
                        y: 20
                    },
                    {
                        x: 15,
                        y: 20
                    },
                    {
                        x: 20,
                        y: 35
                    }
                ],
            },
            {
                label:"datos de rojo",
                data:[
                    {
                        x: 12,
                        y: 18
                    },
                    {
                        x: 13,
                        y: 20
                    },
                    {
                        x: 24,
                        y: 30
                    }
                ],
            }
        ]
    };

    new Chart(PIECANVAS, {
        type: "pie",
        data: PIEDATA,
        options: {}
    })

    new Chart(LINECANVAS,{
        type: "line",
        data: LINEDATA,
        options: {}
    })

    new Chart(SCATTERCANVAS,{
        type: "scatter",
        data: SCATTERDATA,
        options: {}
    })
}