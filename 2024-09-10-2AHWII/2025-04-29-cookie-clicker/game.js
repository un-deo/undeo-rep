// extra Feature: tooltips for upgrades (hover over availible upgrade) (see tooltip.js)
window.gameData = {
  cookieCount: 0,
  cookiesPerClick: 1,
  automaticCookiesPerSecond: 0,
  upgradeCost1: 10,
  upgradeCost2: 1000,
  upgradeCost3: 10000,
  upgradeCost4: 100000,
  cursorCount: 0,
  CookiesPerCursorClick: 1,
  totalCookiesCollected: 0,
  grandmaCount: 0,
  bakeryCount: 0,
  achievements: {
    cookieMonster: false,
    tooManyClicks: false,
  },
  cookieDropChancePercent: 0,
  boosts: {
    cursorBoost: false,
    cookiedrop: false,
  },
};
window.HTMLreferences = {
  cookieCount: document.getElementById("cookieCount"),
  cookie: document.getElementById("cookieClicker"),
  upgradeClicker: document.getElementById("upgradeClicker"),
  grandmaClicker: document.getElementById("upgradeGrandma"),
  upgradeBakery: document.getElementById("upgradeBakery"),
  CookiesPerSecDisplay: document.getElementById("CPS"),
};

function saveGame() {
  localStorage.clear();
  localStorage.setItem("gameData", JSON.stringify(window.gameData));
}

function loadGame() {
  window.gameData = JSON.parse(localStorage.getItem("gameData"));
  render();
}

setInterval(function () {
  window.gameData.cookieCount += window.gameData.automaticCookiesPerSecond;
  window.gameData.totalCookiesCollected +=
    window.gameData.automaticCookiesPerSecond;
  window.HTMLreferences.cookieCount.innerHTML =
    "Cookies: " + window.gameData.cookieCount;
  window.HTMLreferences.CookiesPerSecDisplay.innerHTML =
    "Cookies per second: " + window.gameData.automaticCookiesPerSecond;
  checkForAchievements();
  animateCookieClicker();
}, 1000);

window.HTMLreferences.cookie.addEventListener("click", function () {
  window.gameData.cookieCount += window.gameData.cookiesPerClick;
  window.HTMLreferences.cookieCount.innerHTML =
    "Cookies: " + window.gameData.cookieCount;
  window.gameData.totalCookiesCollected += window.gameData.cookiesPerClick;
  randomCookieDrop();
  window.HTMLreferences.cookie.style.transition = "transform 0.1s";
  window.HTMLreferences.cookie.style.transform = "scale(1.03)";
  setTimeout(function () {
    window.HTMLreferences.cookie.style.transform = "scale(1)";
  }, 100);
});

function addCursor() {
  if (window.gameData.cookieCount >= window.gameData.upgradeCost1) {
    window.gameData.cookieCount -= window.gameData.upgradeCost1;
    window.gameData.cookiesPerClick += window.gameData.CookiesPerCursorClick;
    window.HTMLreferences.cookieCount.innerHTML =
      "Cookies: " + window.gameData.cookieCount;
    window.gameData.upgradeCost1 *= 1.1;
    window.gameData.upgradeCost1 = Math.floor(window.gameData.upgradeCost1);
    window.gameData.cursorCount += 1;
    document.getElementById("cursorCounter").innerHTML =
      "Cursors bought: " + window.gameData.cursorCount;
  } else {
    console.log("You dont have enough cookies to buy a click upgrade!");
  }
  tooltip.remove();
  tooltipcursor(event);
}

function addGrandma() {
  if (window.gameData.cookieCount >= window.gameData.upgradeCost2) {
    window.gameData.cookieCount -= window.gameData.upgradeCost2;
    window.gameData.automaticCookiesPerSecond += 5;
    window.HTMLreferences.cookieCount.innerHTML =
      "Cookies: " + window.gameData.cookieCount;
    window.gameData.grandmaCount += 1;
    window.gameData.upgradeCost2 *= 1.1;
    window.gameData.upgradeCost2 = Math.floor(window.gameData.upgradeCost2);
    document.getElementById("grandmaCounter").innerHTML =
      "Grandmas bought: " + window.gameData.grandmaCount;
  } else {
    console.log("You dont have enough cookies to buy a grandma!");
  }
  tooltip.remove();
  tooltipgrandma(event);
}

function addBakery() {
  if (window.gameData.cookieCount >= window.gameData.upgradeCost3) {
    window.gameData.cookieCount -= window.gameData.upgradeCost3;
    window.gameData.automaticCookiesPerSecond += 10;
    window.HTMLreferences.cookieCount.innerHTML =
      "Cookies: " + window.gameData.cookieCount;
    window.gameData.bakeryCount += 1;
    window.gameData.upgradeCost3 *= 1.1;
    window.gameData.upgradeCost3 = Math.floor(window.gameData.upgradeCost3);
    document.getElementById("bakeryCounter").innerHTML =
      "Bakeries bought: " + window.gameData.bakeryCount;
  } else {
    console.log("You dont have enough cookies to buy a bakery!");
  }
  tooltip.remove();
  tooltipbakery(event);
}
function boostcursor() {
  tooltip.remove();
  tooltipBoostCursor(event);
  if (window.gameData.cookieCount >= 5000) {
    window.gameData.cookieCount -= 5000;
    window.gameData.CookiesPerCursorClick += 1;
    window.HTMLreferences.cookieCount.innerHTML =
      "Cookies: " + window.gameData.cookieCount;
    window.gameData.cookiesPerClick += window.gameData.cursorCount;
    document.getElementById("boostcursor").remove();
    tooltip.remove();
    window.gameData.boosts.cursorBoost = true;
  } else {
    console.log("You dont have enough cookies to buy a cursor upgrade!");
  }
}

function checkForAchievements() {
  if (
    window.gameData.totalCookiesCollected >= 10000 &&
    !window.gameData.achievements.cookieMonster
  ) {
    window.gameData.achievements.cookieMonster = true;
    alert(
      "Achievement Unlocked: Cookie Monster! \nYou have collected 10,000 cookies in total!"
    );
    document.getElementById(
      "Achievements"
    ).innerHTML += `<h3>Achievement Unlocked: Cookie Monster!</h3> \n <p>\nCollect 10000 Cookies Total</p>`;
  }
  if (
    window.gameData.cursorCount >= 100 &&
    !window.gameData.achievements.tooManyClicks
  ) {
    window.gameData.achievements.tooManyClicks = true;
    alert(
      "Achievement Unlocked: Too Many Clicks! \nYou have bought 100 cursors!"
    );
    document.getElementById(
      "Achievements"
    ).innerHTML += `<h3>Achievement Unlocked: Too Many Clicks</h3> \n <p>\nBuy 100 Cursors</p>`;
  }
}

function resetGame() {
  if (
    confirm("Are you sure you want to reset the game? This cannot be undone.")
  ) {
    window.gameData = {
      cookieCount: 0,
      cookiesPerClick: 1,
      automaticCookiesPerSecond: 0,
      upgradeCost1: 10,
      upgradeCost2: 1000,
      upgradeCost3: 10000,
      upgradeCost4: 100000,
      cursorCount: 0,
      CookiesPerCursorClick: 1,
      totalCookiesCollected: 0,
      grandmaCount: 0,
      bakeryCount: 0,
      achievements: {
        cookieMonster: false,
        tooManyClicks: false,
      },
      boosts: {
        cursorBoost: false,
        cookiedrop: false,
      },
      cookieDropChancePercent: 0,
    };

    window.HTMLreferences.cookieCount.innerHTML = "Cookies: 0";
    window.HTMLreferences.CookiesPerSecDisplay.innerHTML =
      "Cookies per second: 0";
    document.getElementById("cursorCounter").innerHTML = "Cursors bought: 0";
    document.getElementById("grandmaCounter").innerHTML = "Grandmas bought: 0";
    document.getElementById("bakeryCounter").innerHTML = "Bakeries bought: 0";
    document.getElementById("Achievements").innerHTML = "";

    alert("Game has been reset!");
    location.reload();
  }
}

function buyCookieDrop() {
  if (window.gameData.cookieCount >= 5000) {
    window.gameData.cookieCount -= 5000;
    window.gameData.cookieDropChancePercent = 5;
    window.HTMLreferences.cookieCount.innerHTML =
      "Cookies: " + window.gameData.cookieCount;
    document.getElementById("cookieCrate").remove();
    tooltip.remove();
    window.gameData.boosts.cookiedrop = true;
  } else {
    console.log("You dont have enough cookies to buy a cookie drop!");
    tooltip.remove();
    tooltipCookieDrop(event);
  }
}

function randomCookieDrop() {
  const randomNumber = Math.floor(Math.random() * 100);
  if (randomNumber < window.gameData.cookieDropChancePercent) {
    window.gameData.cookieCount += 100;
    window.HTMLreferences.cookieCount.innerHTML =
      "Cookies: " + window.gameData.cookieCount;
  }
}

function animateCookieClicker() {
  if (window.gameData.automaticCookiesPerSecond > 0) {
    window.HTMLreferences.cookie.style.transition = "transform 0.1s";
    window.HTMLreferences.cookie.style.transform = "scale(1.03)";
    setTimeout(function () {
      window.HTMLreferences.cookie.style.transform = "scale(1)";
    }, 100);
  }
}

function render() {
  window.HTMLreferences.cookieCount.innerHTML =
    "Cookies: " + window.gameData.cookieCount;
  window.HTMLreferences.CookiesPerSecDisplay.innerHTML =
    "Cookies per second: " + window.gameData.automaticCookiesPerSecond;
  document.getElementById("cursorCounter").innerHTML =
    "Cursors bought: " + window.gameData.cursorCount;
  document.getElementById("grandmaCounter").innerHTML =
    "Grandmas bought: " + window.gameData.grandmaCount;
  document.getElementById("bakeryCounter").innerHTML =
    "Bakeries bought: " + window.gameData.bakeryCount;
  const achievementsContainer = document.getElementById("Achievements");
  achievementsContainer.innerHTML = "";
  if (window.gameData.achievements.cookieMonster) {
    achievementsContainer.innerHTML += `<h3>Achievement Unlocked: Cookie Monster!</h3> \n <p>\nCollect 10000 Cookies Total</p>`;
  }
  if (window.gameData.achievements.tooManyClicks) {
    achievementsContainer.innerHTML += `<h3>Achievement Unlocked: Too Many Clicks</h3> \n <p>\nBuy 100 Cursors</p>`;
  }
  if (window.gameData.boosts.cursorBoost) {
    document.getElementById("boostcursor").remove();
  }
  if (window.gameData.boosts.cookiedrop) {
    document.getElementById("cookieCrate").remove();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  loadGame();
});
