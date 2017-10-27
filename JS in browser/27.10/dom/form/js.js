function validate() {
    var input = document.querySelectorAll("input");

    for (var i = 0; i < input.length; i++) {
        
    
    if (input[i].required && !input[i].value) {
        input[i].classList.add("redborder");
    } else {
        input[i].classList.remove("redborder");
    }
}
}