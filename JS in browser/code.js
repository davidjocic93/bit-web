function newMessage(text) {
    console.log(text);
};

function showInformations() {
    console.log(navigator.platform);
    console.log(navigator.appVersion);
    console.log(navigator.vendor);
}

function isOnline() {
    if (navigator.onLine) {
        console.log("Online");
    } else {
        console.log("Offline");
    }
}

function screenSize() {
    console.log("Current browser resolution is " + screen.availWidth + " x " + screen.availHeight);
    console.log("Max possible is " + screen.width + " x " + screen.height);
}

function findLocation() {
    console.log("URL: " + location.href);
    console.log("Domain name: " + location.hostname);
    console.log("Protocol: " + location.protocol);
    console.log("Parameters: " + location.search);
}

function reloadPage() {
    return location.reload();
}

function goTo(adress) {
    return location.replace(adress);
}

function storageLocal(key, value) {
    localStorage.setItem(key, value);
}

function showData(key) {
    if (localStorage.getItem(key) === null) {
        console.log("There is no data.");
    } else {
        console.log(localStorage.getItem(key));
    }
}

function storageLocalRemove(key) {
    localStorage.removeItem(key);
}

function storageSession(key, value) {
    sessionStorage.setItem(key, value);
}

function showSessionData(key) {
    if (sessionStorage.getItem(key) === null) {
        console.log("There is no data.");
    }
    console.log(sessionStorage.getItem(key));

}

function storageSessionRemove(key) {
    sessionStorage.removeItem(key);
}

function getFood(hrana) {
    if (hrana === true) {
        console.log("Mia vise nije gladna");
    } else {
        console.log("Mia umire gladna.");
    }
}

function backForward(direction) {

    if (direction === "forward") {
        history.forward(2);
    }   else if (direction === "back") {
        history.back(2);
    } else {
        console.log("Unsupported argument value");
    }
}

// function hello () {
//     alert ("Hello!");

//     var question = prompt ("Do you know JavaScript?");

//     if (question) {
//     var userChoice = confirm ("We will submit your answer now!");

//     if(userChoice ) {
//         alert ("Succes message")

//     } 
// }
// };

function changeColor(){
    var x = document.getElementsByClassName("second");
    x[0].className = "red";
}

function liColor(){
   var y = document.getElementsByTagName("li");
   var i;
   for (i = 0; i < y.length; i++) {
       y[i].className = "blue";
   }
}


function activeElement() {
    var z = document.getElementsByClassName("active");
    z[0].className = "";


}




