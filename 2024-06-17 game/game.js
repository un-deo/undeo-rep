let input = document.getElementById("ask");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");
let items = document.getElementById("items");
let haveascrewdriver = false;
let openedVent = false;
let haveacrowbar = false;

function start() {
  option1.innerText = "Try to kick in the door.";
  option2.innerText = "Open the chest and check what is inside";
  option3.innerText = "Try and open the Ventilation shaft";
  option4.innerText = "Give Up";
  haveascrewdriver = false;
  openedVent = false;
  haveacrowbar = false;
}

start();

option1.addEventListener("click", function () {
  if (option1.innerText == "Try to kick in the door.") {
    kickDoor();
  }
});

option2.addEventListener("click", function () {
  if (option2.innerText == "Open the chest and check what is inside") {
    openChest();
  } else if (option2.innerText == "check behind the painting") {
    alert(
      "You found a note behind the painting. on it someone has written: lift up the box. there is a hidden compartment beneath it."
    );
    option2.innerText = "Lift up box";
  } else if (option2.innerText == "Lift up box" && haveacrowbar === false) {
    alert("the box is nailed to the floor. You need a tool to remove it.");
  } else if (option2.innerText == "Lift up box" && haveacrowbar === true) {
    avterBoxlift();
  }
});

option3.addEventListener("click", function () {
  if (option3.innerText == "Try and open the Ventilation shaft") {
    openVent();
  } else if (option3.innerText == "Climb into the Ventilation shaft") {
    climbInToVent();
  }
});

option4.addEventListener("click", function () {
  alert("You gave up. You failed.");
  start();
});

function kickDoor() {
  alert("you broke your leg trying to kick in the door. You failed.");
  start();
}

function openChest() {
  alert("You found a screwdriver in the box");
  haveascrewdriver = true;
  items.innerText = "Screwdriver";
  option2.innerText = "check behind the painting";
  option1.innerText = "Try to unhinge the door";
}

function openVent() {
  if (haveascrewdriver === true && openedVent === false) {
    alert("You managed to open the ventilation shaft with the screwdriver.");
    openedVent = true;
    option3.innerText = "Climb into the Ventilation shaft";
  } else if (haveascrewdriver === false) {
    alert("You need a tool to open the ventilation shaft.");
  }
}

function climbInToVent() {
  if (openedVent === true && haveacrowbar === false) {
    alert("You found a crowbar in the ventilation shaft.");
    haveacrowbar = true;
    items.innerText += " Crowbar";
  } else if (openedVent === false) {
    alert("You need to open the ventilation shaft first.");
  } else if (haveacrowbar === true) {
    alert(
      "It seems that you don't fit in the ventilation shaft. You need to find another way to escape."
    );
  }
}

function avterBoxlift() {
  alert(
    "you have found a hidden compartment beneath the box. You found a puzzle inside it."
  );
  option2.innerText = "Solve puzzle";
}
