//// extra Feature: tooltips for upgrades (hover over availible upgrade)
//let attributes = {
//  cookieCount: 0,
//  cookiesPerClick: 1,
//  cookiesPerSecond: 0,
//  upgradeCost1: 10,
//  upgradeCost2: 1000,
//  upgradeCost3: 10000,
//  upgradeCost4: 100000,
//  cursorcount: 0,
//  cursorCookiesperClick: 1,
//};
//let HTMLreferences = {
//  cookieCount: document.getElementById("cookieCount"),
//  cookieClicker: document.getElementById("cookieClicker"),
//  upgradeClicker: document.getElementById("upgradeClicker"),
//  grandmaClicker: document.getElementById("upgradeGrandma"),
//  tooltip: null,
//  upgradeBakery: document.getElementById("upgradeBakery"),
//};
//
//setInterval(function () {
//  attributes.cookieCount += attributes.cookiesPerSecond;
//  HTMLreferences.cookieCount.innerHTML = "Cookies: " + attributes.cookieCount;
//}, 1000);
//
//HTMLreferences.cookieClicker.addEventListener("click", function () {
//  attributes.cookieCount += attributes.cookiesPerClick;
//  HTMLreferences.cookieCount.innerHTML = "Cookies: " + attributes.cookieCount;
//});

//Upgrades:
//
//HTMLreferences.upgradeClicker.addEventListener("click", function () {
//  if (attributes.cookieCount >= attributes.upgradeCost1) {
//    attributes.cookieCount -= attributes.upgradeCost1;
//    attributes.cookiesPerClick += attributes.cursorCookiesperClick;
//    HTMLreferences.cookieCount.innerHTML = "Cookies: " + attributes.cookieCount;
//    attributes.upgradeCost1 *= 1.1;
//    attributes.upgradeCost1 = Math.floor(attributes.upgradeCost1);
//    attributes.cursorcount += 1;
//  } else {
//    console.log("You dont have enough cookies to buy a click upgrade!");
//  }
//  tooltip.remove();
//  tooltipcursor(event);
//});

//function addGrandma() {
//  if (attributes.cookieCount >= attributes.upgradeCost2) {
//    attributes.cookieCount -= attributes.upgradeCost2;
//    attributes.cookiesPerSecond += 5;
//    HTMLreferences.cookieCount.innerHTML = "Cookies: " + attributes.cookieCount;
//    attributes.upgradeCost2 *= 1.1;
//    attributes.upgradeCost2 = Math.floor(attributes.upgradeCost2);
//  } else {
//    console.log("You dont have enough cookies to buy a grandma!");
//  }
//  tooltip.remove();
//  tooltipgrandma(event);
//}

//boosts
//function boostcursor() {
//  if (attributes.cookieCount >= 5000) {
//    attributes.cookieCount -= 5000;
//    attributes.cursorCookiesperClick += 1;
//    HTMLreferences.cookieCount.innerHTML = "Cookies: " + attributes.cookieCount;
//    attributes.cookiesPerClick += attributes.cursorcount;
//  } else {
//    console.log("You dont have enough cookies to buy a cursor upgrade!");
//  }
//  //tooltip.remove();
//  //tooltipcursor(event);
//}

//tooltips for upgrades
//function tooltipcursor(event) {
//  tooltip = document.createElement("div");
//  tooltip.innerHTML =
//    "Cost: " + attributes.upgradeCost1 + "<br>Increases cookies per click by 1";
//  tooltip.style.position = "absolute";
//  tooltip.style.backgroundColor = "white";
//  tooltip.style.border = "1px solid black";
//  tooltip.style.padding = "5px";
//  document.body.appendChild(tooltip);
//  tooltip.style.left = event.pageX + 20 + "px";
//  tooltip.style.top = event.pageY + "px";
//}
//
//function tooltipgrandma(event) {
//  tooltip = document.createElement("div");
//  tooltip.innerHTML =
//    "Cost: " +
//    attributes.upgradeCost2 +
//    "<br>Increases cookies per second by 5";
//  tooltip.style.position = "absolute";
//  tooltip.style.backgroundColor = "white";
//  tooltip.style.border = "1px solid black";
//  tooltip.style.padding = "5px";
//  document.body.appendChild(tooltip);
//  tooltip.style.left = event.pageX + 20 + "px";
//  tooltip.style.top = event.pageY + "px";
//}
//
//function tooltipbakery(event) {
//  tooltip = document.createElement("div");
//  tooltip.innerHTML =
//    "Cost: " +
//    attributes.upgradeCost3 +
//    "<br>Increases cookies per second by 10";
//  tooltip.style.position = "absolute";
//  tooltip.style.backgroundColor = "white";
//  tooltip.style.border = "1px solid black";
//  tooltip.style.padding = "5px";
//  document.body.appendChild(tooltip);
//  tooltip.style.left = event.pageX + 20 + "px";
//  tooltip.style.top = event.pageY + "px";
//}
//
//HTMLreferences.upgradeClicker.addEventListener("mouseover", function (event) {
//  tooltipcursor(event);
//});
//
//HTMLreferences.upgradeClicker.addEventListener("mouseout", function () {
//  tooltip.remove();
//});
//
//HTMLreferences.grandmaClicker.addEventListener("mouseover", function (event) {
//  tooltipgrandma(event);
//});
//
//HTMLreferences.grandmaClicker.addEventListener("mouseout", function () {
//  tooltip.remove();
//});
//
//HTMLreferences.upgradeBakery.addEventListener("mouseover", function (event) {
//  tooltipbakery(event);
//});
//
//HTMLreferences.upgradeBakery.addEventListener("mouseout", function () {
//  tooltip.remove();
//});
//
//function addBakery() {
//  if (attributes.cookieCount >= attributes.upgradeCost3) {
//    attributes.cookieCount -= attributes.upgradeCost3;
//    attributes.cookiesPerSecond += 10;
//    HTMLreferences.cookieCount.innerHTML = "Cookies: " + attributes.cookieCount;
//    attributes.upgradeCost3 *= 1.1;
//    attributes.upgradeCost3 = Math.floor(attributes.upgradeCost3);
//  } else {
//    console.log("You dont have enough cookies to buy a bakery!");
//  }
//  tooltip.remove();
//  tooltipbakery(event);
//}
//
