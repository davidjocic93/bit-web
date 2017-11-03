$(function () {
    var container = $(".container");
    var showContainer = $(".showContainer");
    var body = $("body");
    var row = $(".row");
    var link = $("link");    
    var button = $("button");
    var input = $(".input")
   
    var request = $.ajax({
        url: "http://api.tvmaze.com/shows",
        method: "get"
    });

    request.done( function (response) {

        console.log(response);
        
        for (var i = 1; i <= 51; i++) {
            var show = response[i];

            $(row).append(`<div class="showContainer col-12 col-md-5 col-lg-3"><img src="${show.image.original}" class="col-12"> <br> <a class="link" href="single.html" target="_blank" data-show-id="${show.id}">${show.name}</a></div> `);
        }
    })

    $(input).on("change", function () {
        
    } )
    
    $(document).on("click", "a", function () {
        
        var id = $(this).attr("data-show-id");
        
            localStorage.setItem("id", id )
    
        })

});