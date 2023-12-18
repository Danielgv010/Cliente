const ORDER = [];
let correctOrder = true;

function arrastrando(event) { // Controla el evento de arrastre de los divs
    event
        .dataTransfer
        .setData('text/plain', event.target.id);
}

function recibiendo(event) { // Controla el evento de cuando se hoverea un elemento encima de los divs
    event.preventDefault();
}

function soltar(event) { // Controla el evento de cuando se suelta un elemento encima de los divs
    const ID = event
        .dataTransfer
        .getData("text"); // Obtiene el id del elemento que se está arrastrando

    let objQueArrastro = $("#" + ID); // Obtiene el objeto del elemento que se está arrastrando
    let destino = $("#" + event.target.id); // Obtiene el objeto del elemento sobre el que se ha soltado

    destino.append(objQueArrastro); // Guarda el elemento arrastrado en el que se ha soltado
    destino.addClass("disable"); // Impide que se mueva el elemento de sitio una vez colocado y que se pongan varios en el mismo contenedor
}

function comprobar() { // Comprueba las condiciones de derrota y victoria
    ORDER.length = 0;
    correctOrder = true;
    for (let dropzone of $(".dropzone")) { // Obtiene todos los elementos "almacen" y saca el texto de los elementos que se hayan guardado para almacenarlo en un array
        ORDER.push($(dropzone).children().text().trim());
    }

    for (let i = 0; i < ORDER.length - 1; i++) { // Por cada elemento del array
        if (ORDER[i] > ORDER[i + 1]) { // Si hay una posicion cuyo valor es superior al de la siguiente
            alert("Wrong order");
            correctOrder = false;
            location.reload(); // Reinicia el nivel
            break;
        }
    }

    if (ORDER.includes("")) { // Si algún elemento almacén está vacío, hace que está funcion no haga nada
        correctOrder = false;
    }

    if (correctOrder) { // Si están bien ordenados los elementos
        level = $("#level").text() // Saca el número del nivel
        alert("You win!")
        if (level == 1) { // si está en el primer nivel pasa al segundo
            location.replace("level2.html");
        } else if (level == 2) { // si está en el segundo nivel pasa al tercero
            location.replace("level3.html");
        } else { // si está en otro nivel, vuelve al primero
            location.replace("index.html");
        }
    }
}