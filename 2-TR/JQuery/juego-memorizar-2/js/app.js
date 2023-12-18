$(main);

const IMAGES = ["img/armor.png", "img/helmet.png", "img/shield.png"]
let numbers = [0, 0, 1, 1, 2, 2];
let hp = 3;
let comparingCards = [];
let counter = 0;

function delay(ms) { // Función que añade un retraso de los ms que se le pasen
    return new Promise(resolve => setTimeout(resolve, ms));
}

function main() { // Crea el tablero de juego, el contador e inicializa las variables
    createCards();
    $("#hp").text(hp);
    $(".restart").click(function () { // Maneja el clic sobre los botones de reinicio. Reinicia el tablero, contador y variables
        numbers = [0, 0, 1, 1, 2, 2];
        counter = 0;
        hp = 3;
        $("#hp").text(hp);
        $("#board").empty();
        createCards();
    })
    $("#output-modal-content").find(".restart").click(function () { // Maneja el clic sobre el boton de reinicio del modal 
        $("#output-modal").toggleClass("hide"); // Oculta el modal
    })
}

function createCards() { // Genera las tarjetas con sus imagenes y clases correspondientes
    for (let i = 0; i < 6; i++) { // For que genera 6 cartas
        let flipCard = $("<div>");
        let flipCardInner = $("<div>");
        let flipCardFront = $("<div>");
        let flipCardBack = $("<div>");
        let img = $("<img>");
        let imgFront = $("<img>");

        imgFront.addClass("front-image")
        flipCard.addClass("flip-card");
        flipCardInner.addClass("flip-card-inner");
        flipCardFront.addClass("flip-card-front");
        flipCardBack.addClass("flip-card-back");

        let coupleId = numbers.splice(Math.floor(Math.random() * numbers.length), 1); // Aleatoriza la distribución de las cartas
        flipCard.attr("card-couple-id", coupleId);
        imgFront.attr("src", "img/cards.png");
        img.attr("src", IMAGES[coupleId]);

        flipCardFront.append(imgFront);
        flipCardBack.append(img);
        flipCardInner.append(flipCardFront);
        flipCardInner.append(flipCardBack);
        flipCard.append(flipCardInner);
        $("#board").append(flipCard);
    }
    $(".flip-card").click(function () { // Maneja el clic de las cartas
        clickCard($(this))
    });
}

async function clickCard(card) { // Hace la animación de las cartas al hacer clic, compara las cartas, el estado de la partida y actualiza el contador de vidas
    card.off("click"); // Desactiva el clic en la carta seleccionada
    card.find(".flip-card-inner").addClass("flip-card-inner-transition");
    await compareCards(card) // Frena la ejecución del código hasta que no se ejecute todo la función de compareCards()
    gameStatus();
    $("#hp").text(hp); // Actualiza el contador de vidas
}

async function compareCards(card) { // Comprueba las cartas sobre las que se ha hecho clic
    comparingCards.push([card, card.attr("card-couple-id")]);
    if (comparingCards.length == 2) { // Comprueba que se hayan seleccionado dos cartas para hacer la comparación
        $("#loading").removeClass("hide"); // Muestra un div que ocupa toda la pantalla para que no se pueda hacer clic en nada mientras que se realiza la comparación
        if (comparingCards[0][1] == comparingCards[1][1]) { // Si las cartas son iguales
            counter++;
        } else { // Si no son iguales
            await delay(1000); // Espera 1 segundo
            hp--;
            $("#hp").text(hp); // Actualiza el contador de vidas

            // Vuelve a habilitar el clic en las cartas
            comparingCards[0][0].on("click", function () { 
                clickCard($(this))
            });
            comparingCards[1][0].on("click", function () {
                clickCard($(this))
            });

            // Oculta las cartas de nuevo
            comparingCards[0][0].find(".flip-card-inner").removeClass("flip-card-inner-transition");
            comparingCards[1][0].find(".flip-card-inner").removeClass("flip-card-inner-transition");
        }
        comparingCards = [];
        $("#loading").addClass("hide"); // Oculta el div que impide hacer clic
    }
}

function gameStatus() { // Comprueba si se ha terminado la partida con victoria o derrota
    if (hp == 0) { // Si no quedan vidas
        $("#output-modal-content").find("h1").text("You Lost!");
        $("#output-modal").removeClass("hide");
    } else if (counter == 3) { // Si todas las cartas han sido reveladas
        $("#output-modal-content").find("h1").text("You Won!");
        $("#output-modal").removeClass("hide");
    }
}
