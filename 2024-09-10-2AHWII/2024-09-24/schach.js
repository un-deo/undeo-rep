let meme = document.getElementById("meme"); //declaration der Variable

meme.addEventListener("click", function () {
  //wenn der Knopf gedrückt wird, wird die Funktion replaceimages ausgeführt
  replaceImages();
});

function replaceImages() {
  //nimmt jedes Bild als einen Array auf und, jede wird dann mit ForEach zu einem anderen geändert
  let images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.src = "pics/meme.jpeg";
  });
}

function changebackground() {
  //ändert die Schrift/- und Hintergrundfarbe
  document.body.style.color = "red";
  document.body.style.background = "darkgreen";
}

document.addEventListener("keydown", function (event) {
  //wenn B auf der Tastatur gedrückt wird ändert sich mиt der Funktion
  //die farbe der Schrift und des Hintergrunds
  if (event.key === "b") {
    changebackground();
  }
});

document.addEventListener("keydown", function (event) {
  //wenn man A auf der Tasstatur drückt wird mann zu einer weiteren seite geführt wit einem Automat
  //(der Automat war ein Ferienprojekt welches ich jetzt fertiggemacht und verbessert habe)
  if (event.key === "a") {
    window.location.href = "index.html";
  }
});
