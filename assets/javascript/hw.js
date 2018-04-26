var characters = ["BIG BIRD", "GROVER", "COOKIE MONSTER", "BERT AND ERNIE", "OSCAR"];

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

function findSesameFriends() {
    var sesameFriend = $(this).attr("data-friendName");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=abuSyoi36VRyfAM3cysbQbGKwydrwAU6&q=sesame+street+" + sesameFriend + "&limit=25&offset=0&rating=G&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);

        var friendData = response.data;
        for (i=0; i<friendData.length; i++) {
            var friendSpace = $("<div>");
            var rating = $("<p>").text("Rating: " + friendData[i].rating);
            var friendGif = $("<img>");
            friendGif.attr("src", friendData[i].images.downsized_medium.url);

            friendSpace.append(rating);
            friendSpace.append(friendGif);
            $("#populate-friends").prepend(friendSpace);
        }
    });
}





$("add-friend").on("click", function(event) {
    event.preventDefault();
    var friend = $("#friend-input").val().trim();
    characters.push(friend);
    buttons();
});

$(document).on("click", ".sesame-btn", findSesameFriends);
buttons();