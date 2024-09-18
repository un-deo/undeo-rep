let zahl1 = document.getElementById("z1");
let zahl2 = document.getElementById("z2");
let button = document.getElementById("calc");
let output = document.getElementById("output");

button.addEventListener("click", function () {
  if (
    isNaN(Number(zahl1.value)) === true ||
    isNaN(Number(zahl2.value)) === true
  ) {
    output.innerHTML = "bitte Zahlen eingeben";
  } else if (Number(zahl1.value) < 0 || Number(zahl2.value) < 0) {
    output.innerHTML = "bitte positive Zahlen eingeben";
  } else if (
    Number(zahl1.value) - Math.floor(Number(zahl1.value)) !== 0 ||
    Number(zahl2.value) - Math.floor(Number(zahl2.value)) !== 0
  ) {
    output.innerHTML = "Bitte eine Zahl ohne Dezimalstellen eingeben";
  } else {
    add();
  }
});

function add() {
  output.innerHTML = `${Number(z1.value)} + ${Number(z2.value)} = ${
    Number(z1.value) + Number(z2.value)
  }`;
  return;
}
