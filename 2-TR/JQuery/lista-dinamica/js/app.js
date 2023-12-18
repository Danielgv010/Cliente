$(main);

function main() {
    $("#nuevo-li").click(function () {
        let newLi = $("<li>");
        if ($("#li-text").val() != "") {
            newLi.text($("#li-text").val());
        } else {
            newLi.text(`Elemento ${$("li").length + 1}`);
        }
        newLi.hide().fadeIn(1000);
        $("ul").append(newLi)
        addLiClickEvent();
    })
    addLiClickEvent();
}

function addLiClickEvent() {
    $("li").click(function () {
        $(this).fadeOut(1000, function () {
            $(this).remove();
        });
    });

}