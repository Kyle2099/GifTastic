$(document).ready(function() {

    var topics = [
        "drake",
        "lady gaga",
        "taylor swift",
        "foo fighters",
        "kid cudi"
    ];

    var API_KEY = "WBz3gFRLMXAdFjhWSGBUyMu4Nyq3KSVj";
    var requestUrl = "https://api.giphy.com/v1/gifs/search?api_key=" + API_KEY + "&limit=10&q=";


    for (var i = 0; i < topics.length; i++) {
        var button = $("<button>");
        button.addClass("btn btn-info");
        button.text(topics[i]);
        button.on("click", function () {
            console.log(this);
            $("#gifs").empty();
            $.ajax({
                method: "GET",
                url: requestUrl + $(this).text()
            })
                .then(function (response) {
                    console.log(response.data);
                    for (var i = 0; i < response.data.length; i++) {
                        var img = $("<img>");
                        img.attr("src", response.data[i].images.downsized.url);
                        img.attr("data-animated", response.data[i].images.downsized.url);
                        img.attr("data-still", response.data[i].images.downsized_still.url);
                        img.attr("data-state", "animated");

                    img.on("click", function () {
                        console.log($(this).attr("data-state"));
                        var state = $(this).attr("data-state");
                        console.log(state);

                        if (state === "animated") {
                            $(this).attr("data-state", "still");
                            // change the src from the animated to still version
                            $(this).attr("src", $(this).attr("data-still"));

                        } else {
                            $(this).attr("data-state", "animated");
                            $(this).attr("src", $(this).attr("data-animated"));
                        }
                        }); // image onclick
                    
                        $("#gifs").append(img);
                    
                
                } //img for loop
                
                
                }); //.then
        
        
            }); //button onclick

        $("#buttons").append(button)
    
    }; //first for loop
                
}); //document.ready