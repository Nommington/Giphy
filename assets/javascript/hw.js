var characters = ["BIG BIRD", "GROVER", "COOKIE MONSTER", "BERT AND ERNIE", "OSCAR"];

function findSesameFriends() {
    var sesameFriend = $(this).attr("data-friendName");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=bompib7IxvR4CNmF6COe3sNcoCnJWvdv&q=" + sesameFriend + "sesame+street&limit=25&offset=0&rating=G&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
    });
}

function buttons() {
    $("#buttons-container").empty();
    for (i=0; i<characters.length; i++) {
        var charButton = $("<button>");
        charButton.addClass("sesame-btn");
        charButton.attr("data-friendName", characters[i]);
        charButton.text(characters[i]);
        $("#buttons-container").append(charButton);
    }
}



$("add-friend").on("click", function(event) {
    event.preventDefault();
    var friend = $("#friend-input").val().trim();
    characters.push(friend);
    buttons();
});

$(document).on("click", ".sesame-btn", findSesameFriends);
buttons();