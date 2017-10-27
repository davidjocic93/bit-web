var chat = document.getElementById("chat-panel");
var message = document.getElementById("message-input");
var button = document.getElementById("button");



button.onclick = function () {
    if (message.value) {
    var textElement = document.createElement("p");
    textElement.textContent = message.value;
    chat.appendChild(textElement);
    message.value = "";
}  
}


