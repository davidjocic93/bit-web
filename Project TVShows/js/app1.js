var container = $(".container");
var summary = $(".summary");
var title = $("h1");
var id = localStorage.getItem("id");
var pageTitle = $("title");

if (localStorage.getItem("id") !== "") {

    var request = $.ajax({
        url: `http://api.tvmaze.com/shows/${id}?embed[]=cast&embed[]=seasons`,
        method: "get"
    });

    request.done( function (response) {

        console.log(response);
        
        // for (var i = 0; i < response.length; i++) {
        //     var show = response[i];

            // if (show.id == localStorage.getItem("id")) {
                $(pageTitle).text(response.name)
                $(title).text(response.name)
                $(container).append(`<img src="${response.image.original}"><br>`)
                $(container).append(`<h2>Seasons (${response._embedded.seasons.length})</h2>`)
                    var seasonsList = "<ul>"
                    for (var i = 0; i < response._embedded.seasons.length; i++) {
                        var premierDate = response._embedded.seasons[i].premiereDate;
                        var endDate = response._embedded.seasons[i].endDate

                        seasonsList += `<li>${premierDate} - ${endDate}</li>`          

                    }

                    seasonsList += "</ul>"
                $(container).append(seasonsList);

                $(container).append(`<h2>Cast</h2>`);

                var castList = "<ul>"
                for (var i = 0; i < response._embedded.cast.length; i++) {
                    var person = response._embedded.cast[i].person.name;

                    castList += `<li>${person}</li>`          

                }

                castList += "</ul>"
            $(container).append(castList);


                $(summary).html(`<h2>Show Details</h2><br><p>${response.summary}</p>`)

            }
            )
    }
