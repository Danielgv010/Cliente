$(main);

let numbers = [1, 1, 2, 2, 3, 3];
let clicks = 0;
let comparingCards = [[0, 0]];
let revealedCars = [];

function main() {
    createCards();
    $("#restart").click(function(){
        clicks = 0;
        comparingCards = [[0,0]]
        revealedCars = []
        numbers = [1, 1, 2, 2, 3, 3]
        $("#tablero").empty();
        $("#salida").empty();
        createCards();
    })
}

function createCards() {
    for (let i = 0; i < 6; i++) {
        let card = $("<div>");
        let content = $("<h1>");

        card.attr("id", "card-" + i);
        card.addClass("card");

        content.text(numbers.splice(Math.floor(Math.random() * numbers.length), 1));
        content.hide();

        card.append(content);
        $("#tablero").append(card);
    }


    $("[id^='card-']").click(function () {
        if (!revealedCars.includes($(this).attr("id")) && $(this).attr("id") != comparingCards[0][0]) {
            let cardH1 = $(this).find("h1");
            cardH1.show();

            if (clicks == 0) {
                comparingCards = [[$(this).attr("id"), cardH1]]
            } else {
                comparingCards.push([$(this).attr("id"), cardH1])
            }
            if (clicks < 2) {
                clicks++;
            }

            if (clicks == 2) {
                clicks = 0;
                if (comparingCards[0][1].text() != comparingCards[1][1].text()) {
                    setTimeout(function(){
                        comparingCards[0][1].hide();
                        comparingCards[1][1].hide();
                        comparingCards = [[0,0]];
                    }, 100, comparingCards);
                } else {
                    revealedCars.push(comparingCards[0][0])
                    revealedCars.push(comparingCards[1][0])
                    comparingCards = [[0,0]];
                }
            }
            if (revealedCars.length == 6){
                $("#salida").text("Game Won!")
            }
        }
    })
}