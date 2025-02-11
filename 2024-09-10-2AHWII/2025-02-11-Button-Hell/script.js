let currentcolor = "red";
const buttonarray = [
  `<button class='child' onclick=double() style="background-color: ${currentcolor};">click to double</button>`,
];
let buttoncount = buttonarray.length;
const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "pink",
  "brown",
  "gray",
  "aquamarine",
];
document.getElementById("buttonarea").innerHTML = buttonarray;

function double() {
  for (let i = 0; i < buttoncount; i++) {
    currentcolor = colors[Math.floor(Math.random() * 10)];
    buttonarray.push(
      `<button class='child' onclick=double() style="background-color: ${currentcolor};">click to double</button>`
    );
  }
  buttoncount = buttonarray.length;
  document.getElementById(
    "counter"
  ).innerHTML = `Anzahl der Buttons: ${buttoncount}`;
  document.getElementById("buttonarea").innerHTML = buttonarray.join("");
}

document.getElementById("remove").addEventListener("click", function () {
  for (
    let i = 0;
    i < Number(document.getElementById("removenumber").value);
    i++
  ) {
    buttonarray.pop();
  }
  buttoncount = buttonarray.length;
  document.getElementById(
    "counter"
  ).innerHTML = `Anzahl der Buttons: ${buttoncount}`;
  document.getElementById("buttonarea").innerHTML = buttonarray.join("");
});
