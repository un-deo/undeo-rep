let input = document.getElementById("ask");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");
let mission = 1;
let mission2 = 1;
let mission3 = 1;
let haveascrewdriver = undefined;
let brokenleg = false;
let triedTounhingeDoor = false;
let foundNote = false;
let openedVent = false;

function start() {
  option1.innerText = "Try to kick in the door.";
  option2.innerText = "Open the chest and check what is inside";
  option3.innerText = "Try and open the Ventilation shaft";
  option4.innerText = "Give Up";
  haveascrewdriver = false;
  mission = 1;
  mission2 = 1;
  mission3 = 1;
  triedTounhingeDoor = false;
  foundNote = false;
  openedVent = false;
  triedTounhingeDoor = false;
}

start();

option1.addEventListener("click", function () {
  if (brokenleg === false) {
    alert("you broke your leg trying to kick in the door. You failed.");
    start();
  } else if (brokenleg === "no" && foundNote !== true) {
    alert(
      "you found a note behind the painting. on it someone has written: lift up the box. there is a hidden compartment beneath it. "
    );
    foundNote = true;
    afterFoundNote();
  }
});
option2.addEventListener("click", function () {
  if (mission2 == 1) {
    alert("You found a screwdriver in the box");
    mission2 = mission2 + 1;
    haveascrewdriver = true;
    brokenleg = "no";
    missionSet2();
    mission2 = 2;
  } else if ((mission2 = 2)) {
    alert(
      "stop trying to open the door. You will not get anywhere without a key."
    );
    triedTounhingeDoor = true;
  }
});

option3.addEventListener("click", function () {
  if (mission3 == 1 && haveascrewdriver !== true) {
    alert("You realize the ventilation system is screwed shut");
    mission3 = 2;
  } else if ((haveascrewdriver = true && openedVent !== true)) {
    alert("you manage to open the ventilation shaft.");
    openedVent = true;
    afterOpenVentilation();
  }
});

option4.addEventListener("click", function () {
  alert("You gave up. get some rest and try again later.");
  start();
});

function missionSet2() {
  if (haveascrewdriver != true) {
    start();
  }
  option1.innerText = "check behind the Painting.";
  option2.innerText = "try to unhinge the door.";
  option3.innerText =
    "Try and open the Ventilation shaft with the newfound screwdriver";
  option4.innerText = "Give Up";
}

function afterOpenVentilation() {
  option3.innerText = "try escape through the Vent";
}

function afterFoundNote() {
  option1.innerText = "lift the box";
}
