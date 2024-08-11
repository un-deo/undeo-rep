let input = document.getElementById("ask");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");
let items = document.getElementById("items");
let keypad = document.getElementById("solveX");
let haveascrewdriver = false;
let openedVent = false;
let haveacrowbar = false;
let finish = document.getElementById("finish");
let failedAtempts = 0;
let keypadinput = document.getElementById("keypadinput");

function start() {
  option1.innerText = "Try to kick in the door.";
  option2.innerText = "Open the chest and check what is inside";
  option3.innerText = "Try and open the Ventilation shaft";
  option4.innerText = "Give Up";
  haveascrewdriver = false;
  openedVent = false;
  haveacrowbar = false;
  items.innerText = "";
  option3.hidden = false; //show the option again
  keypad.hidden = true;
  finish.hidden = true;
  failedAtempts = 0;
  keypadinput.value = "";
}

start();

option1.addEventListener("click", function () {
  if (option1.innerText == "Try to kick in the door.") {
    kickDoor();
  } else if (
    option1.innerText == "Try to unhinge the door" &&
    haveacrowbar === false
  ) {
    alert("The doors hinges are sturdy. Find another way to open the door.");
  } else if (
    option1.innerText == "Try to unhinge the door" &&
    haveacrowbar === true
  ) {
    alert("Even with a crowbar you can't unhinge the door.");
  }
});

option2.addEventListener("click", function () {
  if (option2.innerText == "Open the chest and check what is inside") {
    openChest();
  } else if (option2.innerText == "check behind the painting") {
    alert(
      "You found a note and an input panel behind the painting. on it someone has written: lift up the box. there is a hidden compartment beneath it."
    );
    option2.innerText = "Lift up box";
    keypad.hidden = false;
  } else if (option2.innerText == "Lift up box" && haveacrowbar === false) {
    alert("the box is nailed to the floor. You need a tool to remove it.");
  } else if (option2.innerText == "Lift up box" && haveacrowbar === true) {
    avterBoxlift();
  } else if (option2.innerText == "Solve puzzle") {
    puzzle();
  }
});

option3.addEventListener("click", function () {
  if (option3.innerText == "Try and open the Ventilation shaft") {
    openVent();
  } else if (option3.innerText == "Climb into the Ventilation shaft") {
    climbInToVent();
  } else if (
    option3.innerText == "input answer into the panel the press this button"
  ) {
    if (keypadinput.value == "880" || keypadinput.value == 880) {
      finish.hidden = false;
    } else if (
      option3.innerText ==
        "input answer into the panel the press this button" &&
      keypadinput.value != 880 &&
      failedAtempts !== 1
    ) {
      alert("You have inputted the wrong answer. you have 1 more try.");
      failedAtempts++;
      keypadinput.value = "";
    } else if (
      option3.innerText ==
        "input answer into the panel the press this button" &&
      keypadinput.value != 880 &&
      failedAtempts === 1
    ) {
      alert("You have inputted the wrong answer. you have failed.");
      start();
    }
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
    option3.hidden = true; //hide the option temporarily
  } else if (openedVent === false) {
    alert("You need to open the ventilation shaft first.");
  }
}

function avterBoxlift() {
  alert(
    "you have found a hidden compartment beneath the box. You found a puzzle inside it."
  );
  option2.innerText = "Solve puzzle";
}

function puzzle() {
  option2.innerText = `Solve for X: "8x - 246 = 6794"`; //answer is 1
  option3.innerText = "input answer into the panel the press this button";
  option3.hidden = false;
}
