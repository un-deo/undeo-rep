var button = document.getElementById("button");
var box = document.getElementById("changeme");
var body = document.querySelector("body");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("changeall");

button.onclick = function changecolor() {
    if (box.style.background == "red") {box.style.background = "blue"
        
    } else {
        box.style.background = "red"
    }

}

button2.onclick = function changecolor() {
    if (body.style.background == "white") {body.style.background = "yellow"
    
    } else {
        body.style.background = "white"
    }
}
button3.onclick = function changecolor() {
    if (body.style.background == "white") {body.style.background = "yellow"
        
    } else {
        body.style.background = "white"
    }
    if (box.style.background == "red") {
        box.style.background = "blue"
        
    } else {
        box.style.background = "red"
    }
}
