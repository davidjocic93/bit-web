function togglee() {
    document.getElementById("body").classList.toggle("black");
    
    }


var blink;



function blinking () {
    if (!blink) {
        blink = setInterval(togglee, 500);
        document.getElementById("blinking-button").value = "Turn off";
} else {
    clearInterval (blink);
    blink = null;
    document.getElementById("blinking-button").value = "Blinking";
}
}









