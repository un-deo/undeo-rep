//deffinieren der variablen
let input = document.getElementById("input");
let btn = document.getElementById("submit");
let output = document.getElementById("ausgabe");
btn.addEventListener("click", bankomat);
let stand = document.getElementById("kontostand");
let nummer = document.getElementById("kontonummer");
let x = Math.random();
let standb = (x * 10000).toFixed(2);
let abzug = 0;

//ausgabe der Kontonummer und des Kontostandes --> ist jedes mal eine andere Nummer
//wird auf 2 nachkommastellen gerundet
stand.innerHTML = "Kontostand:" + standb + "€";
nummer.innerHTML = "Kontonummer:" + (x * 10000000000).toFixed(0);

//funktion für den bankomat
//deffiniert die abzüge und kontrolliert ob der Kontostand ausreicht
//gibt die ausgabe auf der seite aus
//bei case 4 wird kontrolliert ob die eingabe ein vielfaches von 10 ist und kleiner als 400
function bankomat() {
  switch (Number(input.value)) {
    case 1:
      abzug = 100;
      if (standb - abzug < 0) {
        output.innerHTML = "Kontostand reicht nicht aus";
        return;
      }
      standb -= abzug;
      standb = standb.toFixed(2);
      output.innerHTML = "es werden 100€ ausgezahlt";
      stand.innerHTML = "Kontostand:" + standb + "€";
      console.log(standb);
      break;
    case 2:
      abzug = 200;
      if (standb - abzug < 0) {
        output.innerHTML = "Kontostand reicht nicht aus";
        return;
      }
      standb -= abzug;
      standb = standb.toFixed(2);
      output.innerHTML = "es werden 200€ ausgezahlt";
      stand.innerHTML = "Kontostand:" + standb + "€";
      console.log(standb);
      break;
    case 3:
      abzug = 300;
      if (standb - abzug < 0) {
        output.innerHTML = "Kontostand reicht nicht aus";
        return;
      }
      standb -= abzug;
      standb = standb.toFixed(2);
      output.innerHTML = "es werden 300€ ausgezahlt";
      stand.innerHTML = "Kontostand:" + standb + "€";
      console.log(standb);
      break;
    default: //kontrolle ob die eingabe ein vielfaches von 10 ist aber kleiner als 400
      abzug = input.value;
      if (standb - abzug < 0) {
        output.innerHTML = "Kontostand reicht nicht aus";
        return;
      }
      if (input.value % 10 == 0 && input.value <= 400) {
        standb -= abzug;
        standb = standb.toFixed(2);
        output.innerHTML = "es werden " + input.value + "€ ausgezahlt";
        stand.innerHTML = "Kontostand:" + standb + "€";
        console.log(standb);
      } else {
        output.innerHTML = "ungültige Eingabe";
      }
  }
}
