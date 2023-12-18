$(main);

function main() {
    $("#add-imagen").click(function () {
        let imgDiv = $("<div>");
        let img = $("<img>");
        let imgButton = $("<button>")

        let count = $("[image-id^='img']").length;
        imgDiv.attr("image-id", "img" + count)
        imgDiv.addClass("image-div")

        img.attr("src", $("#url").val())
        img.addClass("resized-img-small")

        imgButton.attr("id", "delete")
        imgButton.text("X")
        imgButton.attr("delete-id", "img" + count)

        imgDiv.append(imgButton);
        imgDiv.append(img);
        imgDiv.hide().fadeIn(1000);
        $("body").append(imgDiv);

        $("[id='delete']").click(function () {
            let imageId = `[image-id='${$(this).attr("delete-id")}']`
            $(imageId).fadeOut(1000, function () {
                $(imageId).remove();
            });
        })
    })
}
