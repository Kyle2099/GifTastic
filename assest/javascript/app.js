$(document).ready(function () {

    var topics = [
        "drake",
        "lady gaga",
        "taylor swift",
        "foo fighters",
        "kid cudi"
    ];

function populateButtons(arrayToUse, classToAdd, areaToAddTo){
    for (var i=0; i<arrayToUse.length;i++){
        var a = $("<button>")
        a.addClass(classToAdd)
        a.attr("data-type", arrayToUse[i])
        a.text(arrayToUse[i])
        $(areaToAddTo).append(a)
    }
}



populateButtons(topics, "artist-button", "#buttons")

$(document).on("submit", "#gify-form", function(){
    var value = $("#gify-input").val()
    console.log("this is the value of the text thats inputed: " + value)

    makeGifs(value)
})

})

// put this into an onclick event and pass in "value"
   
___________
var makeGifs = function(value) {
        var API_KEY = "WBz3gFRLMXAdFjhWSGBUyMu4Nyq3KSVj";
        var requestUrl = "https://api.giphy.com/v1/gifs/search?q=" + value + "&api_key=" + API_KEY ;
        $("#gifs").empty();
        $.ajax({
            method: "GET",
            url: requestUrl 
        }).then(function (response) {
           console.log(response.data[0].rating)
        //    $("#gifs").append(response.data[0]);

           for (var i = 0; i < response.data.length; i++) {
                var imageDiv = createImageDiv(response, i);
            
             $("#gifs").append(imageDiv);

            function createImageDiv(response, i) {
                var img = $("<img class='giphy-img'>");
                img.attr("src", response.data[i].images.downsized.url);
                img.attr("data-animated", response.data[i].images.downsized.url);
                img.attr("data-still", response.data[i].images.downsized_still.url);
                img.attr("data-state", "animated");
        
                var gifCard = $("<div class='gif-card'>");
                var pRating = $("<p>");
        
                gifCard.append(img);
                pRating.append("Rating:" + response.data[i].rating);
                gifCard.append(pRating);
                return gifCard;
            }
   ________             
          
        
            //     img.on("click", function () 
            //     console.log($(this).attr("data-state"));
            //     var state = $(this).attr("data-state");
            //             console.log(state);
            //         })
            // console.log(response.data);
            // for (var i = 0; i < response.data.length; i++) {
            //     var imageDiv = createImageDiv(response, i);

            //     $("#gifs").append(imageDiv);
        }
            })
        });


        // $(document).on("click", ".giphy-img", function () {
        //     if (state === "animated") {
        //     $(this).attr("data-state", "still");
        //     // change the src from the animated to still version
        //     $(this).attr("src", $(this).attr("data-still"));

        //     } else {
        //     $(this).attr("data-state", "animated");
        //     $(this).attr("src", $(this).attr("data-animated"));
        //     });       
    
        //     for (var i = 0; i < topics.length; i++) {
        //     var button = $("<button>");
        //     button.addClass("btn btn-info");
        //     button.text(topics[i]);

        //     $("#buttons").append(button);



    