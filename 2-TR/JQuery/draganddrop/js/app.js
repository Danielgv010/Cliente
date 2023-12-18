function arrastrando(event) {
    event
        .dataTransfer
        .setData('text/plain', event.target.id);

    event
        .currentTarget
        .style
        .backgroundColor = 'yellow';
}

function recibiendo(event){
    event.preventDefault();
    console.log(event.target.id)
}

function soltar(event){
    const ID = event
                    .dataTransfer
                    .getData("text");

    console.log("soltar "+ID)
    console.log("destino: "+event.target.id)

    let objQueArrastro = $("#"+ID);
    let destino = $("#"+event.target.id);

    destino.append(objQueArrastro)
}