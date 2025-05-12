//tooltips for upgrades

function tooltipcursor(event) {
  tooltip = document.createElement("div");
  tooltip.innerHTML =
    "Cost: " +
    window.gameData.upgradeCost1 +
    "<br>Increases cookies per click by: " +
    window.gameData.CookiesPerCursorClick;
  tooltip.style.position = "absolute";
  tooltip.style.backgroundColor = "white";
  tooltip.style.border = "1px solid black";
  tooltip.style.padding = "5px";
  document.body.appendChild(tooltip);
  tooltip.style.left = event.pageX + 20 + "px";
  tooltip.style.top = event.pageY + "px";
}

function tooltipgrandma(event) {
  tooltip = document.createElement("div");
  tooltip.innerHTML =
    "Cost: " +
    window.gameData.upgradeCost2 +
    "<br>Increases cookies per second by 5";
  tooltip.style.position = "absolute";
  tooltip.style.backgroundColor = "white";
  tooltip.style.border = "1px solid black";
  tooltip.style.padding = "5px";
  document.body.appendChild(tooltip);
  tooltip.style.left = event.pageX + 20 + "px";
  tooltip.style.top = event.pageY + "px";
}

function tooltipbakery(event) {
  tooltip = document.createElement("div");
  tooltip.innerHTML =
    "Cost: " +
    window.gameData.upgradeCost3 +
    "<br>Increases cookies per second by 10";
  tooltip.style.position = "absolute";
  tooltip.style.backgroundColor = "white";
  tooltip.style.border = "1px solid black";
  tooltip.style.padding = "5px";
  document.body.appendChild(tooltip);
  tooltip.style.left = event.pageX + 20 + "px";
  tooltip.style.top = event.pageY + "px";
}

window.HTMLreferences.upgradeClicker.addEventListener(
  "mouseover",
  function (event) {
    tooltipcursor(event);
  }
);

window.HTMLreferences.upgradeClicker.addEventListener("mouseout", function () {
  tooltip.remove();
});

window.HTMLreferences.grandmaClicker.addEventListener(
  "mouseover",
  function (event) {
    tooltipgrandma(event);
  }
);

window.HTMLreferences.grandmaClicker.addEventListener("mouseout", function () {
  tooltip.remove();
});

window.HTMLreferences.upgradeBakery.addEventListener(
  "mouseover",
  function (event) {
    tooltipbakery(event);
  }
);

window.HTMLreferences.upgradeBakery.addEventListener("mouseout", function () {
  tooltip.remove();
});

function tooltipBoostCursor(event) {
  tooltip = document.createElement("div");
  tooltip.innerHTML =
    "Cost: 5000<br>" +
    "Boost Cursor: Increases cursor efficiency by 1 (+1cookie/click/cursor)";
  tooltip.style.position = "absolute";
  tooltip.style.backgroundColor = "white";
  tooltip.style.border = "1px solid black";
  tooltip.style.padding = "5px";
  document.body.appendChild(tooltip);
  tooltip.style.left = event.pageX + 20 + "px";
  tooltip.style.top = event.pageY + "px";
}

document
  .getElementById("boostcursor")
  .addEventListener("mouseover", function (event) {
    tooltipBoostCursor(event);
  });

document
  .getElementById("boostcursor")
  .addEventListener("mouseout", function () {
    tooltip.remove();
  });

function tooltipCookieDrop(event) {
  tooltip = document.createElement("div");
  tooltip.innerHTML =
    "Cost: 500<br>" +
    "Cookie Drop: 5% chance to recieve 100 cookies when clicking";
  tooltip.style.position = "absolute";
  tooltip.style.backgroundColor = "white";
  tooltip.style.border = "1px solid black";
  tooltip.style.padding = "5px";
  document.body.appendChild(tooltip);
  tooltip.style.left = event.pageX + 20 + "px";
  tooltip.style.top = event.pageY + "px";
}
document
  .getElementById("cookieCrate")
  .addEventListener("mouseover", function (event) {
    tooltipCookieDrop(event);
  });

document
  .getElementById("cookieCrate")
  .addEventListener("mouseout", function () {
    tooltip.remove();
  });
