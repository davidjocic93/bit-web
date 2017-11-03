// var bodySelected = document.getElementsByTagName("body")[0];
// var mario = document.getElementById("mario");
// var marioHidden = document.getElementById("marioHidden");

// var interval = null;

// bodySelected.addEventListener("keydown", function (event) {

//     if (event.keyCode === 39) {
//         mario.style.display = "none";
//         marioHidden.style.display = "block";

//         // bodySelected.style.backgroundPositionX = 0 + "px";

//         function moveX() {
//             bodySelected.style.backgroundPositionX = -20 + "px";
//         }  

//         if (interval = null) {
//             interval = setInterval(moveX, 50);
//         }
         
//     }
// });


// bodySelected.addEventListener("keyup", function (event) {

//     if (event.keyCode === 39) {

//         mario.style.display = "block";
//         marioHidden.style.display = "none"
//         interval = clearInterval();

//     }
// });

// bodySelected.addEventListener("keydown", function (event) {

//     if (event.keyCode === 38) {
//         mario.style.display = "none";
//         marioHidden.style.display = "block";
//         marioHidden.style.position = "relative";
//         marioHidden.style.bottom = 50 + "px";
//     }

    
//             function moveX() {
//                 bodySelected.style.backgroundPositionX = -10 + "px";
//             }
    
//             if (interval = null) {
//                 interval = setInterval(moveX, 50);
//             }

// });

// bodySelected.addEventListener("keyup", function (event) {
    
//     if (event.keyCode === 38) {
//         mario.style.display = "block";
//         marioHidden.style.display = "none";
//         marioHidden.style.position = "relative";
//         marioHidden.style.bottom = 0 + "px";
//         interval = clearInterval();
//     }
//     });

var bodySelected = document.getElementsByTagName("body")[0];
var mario = document.getElementById("mario");
var marioHidden = document.getElementById("marioHidden");

bodySelected.addEventListener("keydown", function (event) {

    if (event.keyCode === 39) {
        mario.style.display = "none";
        marioHidden.style.display = "block";

        bodySelected.style.backgroundPositionX = -20 + "px";

        function moveX() {
            bodySelected.style.backgroundPositionX = -20 + "px";
        }

        (function moving() {
                 setInterval(moveX, 500); 
        })();
    }
});


bodySelected.addEventListener("keyup", function (event) {

    if (event.keyCode === 39) {

        mario.style.display = "block";
        marioHidden.style.display = "none"

    }
});

bodySelected.addEventListener("keydown", function (event) {

    if (event.keyCode === 38) {
        mario.style.display = "none";
        marioHidden.style.display = "block";
        marioHidden.style.position = "relative";
        marioHidden.style.bottom = 50 + "px";
    }

    bodySelected.style.backgroundPositionX = 0 + "px";
    
            function moveX() {
                bodySelected.style.backgroundPositionX = -10 + "px";
            }
    
            (function moving() {
                     setInterval(moveX, 300); 
            })();

});

bodySelected.addEventListener("keyup", function (event) {
    
    if (event.keyCode === 38) {
        mario.style.display = "block";
        marioHidden.style.display = "none";
        marioHidden.style.position = "relative";
        marioHidden.style.bottom = 0 + "px";
    }
    });
