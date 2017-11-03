var input = $(".input");
var button = $(".button");
var img = $("img");
var link = $("a");
var container = $(".container");

button.on("click", function () {

    var request = $.ajax({
        url: "https://api.github.com/search/users?q=" + input.val(),
        method: "get"
    });

    $(container).html(" ");

    request.done(function (response) {
        console.log(response);

        for (var i = 0; i < response.items.length; i++) {
            var element = response.items;

            // $(container).append("<img class='slika' src='" + element[i].avatar_url + "'>");
            $(container).append(`<img class="slika" src="${element[i].avatar_url}">`)
            // $(container).append("<a href='" + element[i].html_url + "' target='_blank' class='link'>" + element[i].login + "</a>" + "<br>");

            $(container).append(`<a href=" ${element[i].html_url}" target="_blank" class="link"> ${element[i].login} </a> <br>`)

           

        }

    });

});
