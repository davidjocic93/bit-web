function soccer (event) {
    var player = document.getElementById("player");

    player.style.left = event.clientX - 50 + "px";
    player.style.top = event.clientY - 50 + "px";

    document.documentElement.addEventListener("click", soccer(event));




}