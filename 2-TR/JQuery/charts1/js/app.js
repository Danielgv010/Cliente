$(main)

function main(){
    const XVALUES = ["Value1","Value2","Value3"];
    const YVALUES = [15,10,5]
    const BARCOLORS = ["red","green","blue"]

    new Chart("chart",{
        type: "bar",
        data: {
            labels: XVALUES,
            datasets:[{
                backgroundColor: BARCOLORS,
                data: YVALUES
            }]
        },
        options: {
            legend: {display: false},
            title: {
                display: true,
                text: "Test Chart"
            }
        }
    });
}