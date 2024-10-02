let input = document.getElementById("input");
let btn = document.getElementById("submit");
let output = document.getElementById("ausgabe");
btn.addEventListener("click", bankomat);

function bankomat() {
  switch (Number(input.value)) {
    case 1:
      output.innerHTML = "es werden 100€ ausgezahlt";
      break;
    case 2:
      output.innerHTML = "es werden 200€ ausgezahlt";
      break;
    case 3:
      output.innerHTML = "es werden 300€ ausgezahlt";
      break;
    default: //kontrolle ob die eingabe ein vielfaches von 10 ist aber kleiner als 400
      if (input.value % 10 == 0 && input.value < 400) {
        output.innerHTML = "es werden " + input.value + "€ ausgezahlt";
      } else {
        output.innerHTML = "ungültige Eingabe";
      }
  }
}
