function newMessage(text) {
    console.log(text);
};

function showInformations () {
    console.log (navigator.platform);
    console.log (navigator.appVersion);
    console.log (navigator.vendor);
}

function isOnline () {
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

function findLocation () {
    console.log("URL: " + location.href);
    console.log("Domain name: " + location.hostname);
    console.log("Protocol: " + location.protocol);
    console.log("Parameters: " + location.search);
}

function reloadPage () {
    return location.reload();
}

function goTo (adress) {
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

function getFood (hrana) {
    if (hrana === true) {
        console.log("Mia vise nije gladna");
    } else{
        console.log("Mia umire gladna.");
    }
    
}



