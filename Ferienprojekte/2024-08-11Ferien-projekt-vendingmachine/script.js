//define all the elements
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let b5 = document.getElementById("b5");
let b6 = document.getElementById("b6");
let b7 = document.getElementById("b7");
let b8 = document.getElementById("b8");
let b9 = document.getElementById("b9");
let b0 = document.getElementById("b0");
let enter = document.getElementById("enter");
let del = document.getElementById("del");
let pay = document.getElementById("pay");
let disablebuttons = false;
let vendingNumbers = [];
let pricetopay = 0;
let moneyinput;
let paybutton;
let change;
let productBought;
//define all the products and prices
let products = [
  { vendingNumber: "001", name: "CocaCola", price: 1.5 },
  { vendingNumber: "002", name: "Pepsi", price: 1.5 },
  { vendingNumber: "003", name: "Pringles-Small", price: 2.0 },
  { vendingNumber: "004", name: "Orbit-Mint", price: 1.0 },
  { vendingNumber: "005", name: "Lays-Chips", price: 1.5 },
  { vendingNumber: "006", name: "Peanuts", price: 1.5 },
  { vendingNumber: "007", name: "nuts-mix", price: 2.0 },
  { vendingNumber: "008", name: "Fuzetea", price: 1.5 },
  { vendingNumber: "009", name: "Gatorade", price: 2.5 },
  { vendingNumber: "010", name: "Granola-bar", price: 0.75 },
  { vendingNumber: "011", name: "Feastables", price: 1.5 },
  { vendingNumber: "012", name: "Twix", price: 1 },
  { vendingNumber: "013", name: "kitKat", price: 1 },
];

products.forEach(function (x) {
  vendingNumbers.push(x.vendingNumber);
});

function updatedisplay() {
  display.innerHTML = displaytext;
  if (displaytext == "") {
    display.innerHTML = "Enter product number";
  }
}

//define the display
let display = document.getElementById("input");
let displaytext = [];

b1.addEventListener("click", function () {
  if (disablebuttons == false) {
    displaytext += "1";
    updatedisplay();
  }
});

b2.addEventListener("click", function () {
  if (disablebuttons == false) {
    displaytext += "2";
    updatedisplay();
  }
});

b3.addEventListener("click", function () {
  if (disablebuttons == false) {
    displaytext += "3";
    updatedisplay();
  }
});

b4.addEventListener("click", function () {
  if (disablebuttons == false) {
    displaytext += "4";
    updatedisplay();
  }
});

b5.addEventListener("click", function () {
  if (disablebuttons == false) {
    displaytext += "5";
    updatedisplay();
  }
});

b6.addEventListener("click", function () {
  if (disablebuttons == false) {
    displaytext += "6";
    updatedisplay();
  }
});

b7.addEventListener("click", function () {
  if (disablebuttons == false) {
    displaytext += "7";
    updatedisplay();
  }
});

b8.addEventListener("click", function () {
  if (disablebuttons == false) {
    displaytext += "8";
    updatedisplay();
  }
});

b9.addEventListener("click", function () {
  if (disablebuttons == false) {
    displaytext += "9";
    updatedisplay();
  }
});

b0.addEventListener("click", function () {
  if (disablebuttons == false) {
    displaytext += "0";
    updatedisplay();
  }
});

del.addEventListener("click", function () {
  displaytext = [];
  pricetopay = 0;
  disablebuttons = false;
  pay.innerHTML = "";
  updatedisplay();
});

enter.addEventListener("click", function () {
  if (disablebuttons == false) {
    if (vendingNumbers.includes(displaytext) == false) {
      display.innerHTML = "Invalid product number";
      displaytext = [];
    } else {
      products.forEach(function (x) {
        if (x.vendingNumber == displaytext) {
          disablebuttons = true;
          displaytext = [];
          displaytext.push(x.name + " $" + x.price);
          pricetopay = x.price;
          updatedisplay();
          productBought = x.name;
        }
      });
    }
  }
  if (disablebuttons == true) {
    pay.innerHTML = `please select payment method <br>
    <button id="chash">cash</button><button id="card" >card</button>`;

    let chash = document.getElementById("chash");
    let card = document.getElementById("card");

    chash.addEventListener("click", function () {
      pay.innerHTML = `Please insert ${pricetopay} $ <br> <input type="number" placeholder="inputted cash amount" id="moneyinput"> <br> <button id="paybutton">pay</button>`;
      moneyinput = document.getElementById("moneyinput");
      paybutton = document.getElementById("paybutton");

      paybutton.addEventListener("click", function () {
        if (moneyinput.value < pricetopay) {
          alert("insufficient funds");
          console.log("insufficient funds");
        } else if (moneyinput.value >= pricetopay) {
          change = moneyinput.value - pricetopay;
          alert(
            `
            -=-=-=-=-=-=-=-=-=-=-=-
            Delux Vending Machine
            ------------------------
            Item bought: ${productBought}
            Price: ${pricetopay}
            ------------------------
            Payment type: Cash
            inputted Money: ${moneyinput.value}
            change: ${change}
            ------------------------
            date: ${new Date().toLocaleDateString()}
            time: ${new Date().toLocaleTimeString()}
            -=-=-=-=-=-=-=-=-=-=-=-
            `
          );
          Machinereset();
        }
      });
    });

    card.addEventListener("click", function () {
      pay.innerHTML = `Please insert card <br> <button id="cardpaybutton"> tap card here </button>`;
      let cardpaybutton = document.getElementById("cardpaybutton");
      cardpaybutton.addEventListener("click", function () {
        alert(
          `
          -=-=-=-=-=-=-=-=-=-=-=-
          Delux Vending Machine
          ------------------------
          Item bought: ${productBought}
          Price: ${pricetopay}
          ------------------------
          Payment type: Card
          ------------------------
          date: ${new Date().toLocaleDateString()}
          time: ${new Date().toLocaleTimeString()}
          -=-=-=-=-=-=-=-=-=-=-=-
          `
        );
        Machinereset();
      });
    });
  }
});
document.addEventListener("keydown", function (event) {
  if (event.key === "r") {
    document.body.style.backgroundColor = "red";
    document.querySelectorAll("button").forEach(function (btn) {
      btn.style.backgroundColor = "red";
    });
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "g") {
    document.body.style.backgroundColor = "green";
    document.querySelectorAll("button").forEach(function (btn) {
      btn.style.backgroundColor = "green";
    });
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "b") {
    document.body.style.backgroundColor = "blue";
    document.querySelectorAll("button").forEach(function (btn) {
      btn.style.backgroundColor = "blue";
    });
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "y" || event.key === "z") {
    document.body.style.backgroundColor = "yellow";
    document.querySelectorAll("button").forEach(function (btn) {
      btn.style.backgroundColor = "yellow";
    });
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "p") {
    document.body.style.backgroundColor = "purple";
    document.querySelectorAll("button").forEach(function (btn) {
      btn.style.backgroundColor = "purple";
    });
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "o") {
    document.body.style.backgroundColor = "orange";
    document.querySelectorAll("button").forEach(function (btn) {
      btn.style.backgroundColor = "orange";
    });
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "w") {
    document.body.style.backgroundColor = "white";
    document.querySelectorAll("button").forEach(function (btn) {
      btn.style.backgroundColor = "white";
    });
  }
});
function Machinereset() {
  //reset of machine
  disablebuttons = false;
  displaytext = [];
  pricetopay = 0;
  updatedisplay();
  moneyinput = "";
  productBought = "";
  change = "";
  pay.innerHTML = "";
}
