let tempcard;
let tempcolor;
let tempCardSymbol;
let startingCard;
let player1 = [];
let player2 = [];
let player3 = [];
let uniqueID = 0;
let currenCard;

const cardColors = [
  "red",
  "blue",
  "green",
  "yellow",
  "red",
  "blue",
  "green",
  "yellow",
  "wild",
];
const cardSymbol = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "reverse",
  "Skip",
  "+2",
];

function generateCard() {
  tempcard;
  tempcolor = cardColors[Math.floor(Math.random() * cardColors.length)];
  tempCardSymbol = cardSymbol[Math.floor(Math.random() * cardSymbol.length)];
  if (tempcolor == "wild") {
    tempCardSymbol = ["+4", "color Change", "color Change"][
      Math.floor(Math.random() * 3)
    ];
  }

  tempcard = `{"ID": "unique${uniqueID}", "attributes": { "color": "${tempcolor}", "Symbol": "${tempCardSymbol}"}}`;
  tempcard = JSON.parse(tempcard);
  uniqueID++;
  return tempcard;
}

function handOutCards(cardCount) {
  for (let i = 0; i < cardCount; i++) {
    player1.push(generateCard());
  }
  for (let i = 0; i < cardCount; i++) {
    player2.push(generateCard());
  }
  for (let i = 0; i < cardCount; i++) {
    player3.push(generateCard());
  }
  renderHand();
}
handOutCards(8);

function declareStartingCard() {
  startingCard = generateCard();
  if (startingCard.attributes.color == "wild") {
    console.log("starting Card can not be a wild!... Regenerating");
    declareStartingCard();
  } else if (
    startingCard.attributes.Symbol == "reverse" ||
    startingCard.attributes.Symbol == "Skip" ||
    startingCard.attributes.Symbol == "+2" ||
    startingCard.attributes.Symbol == "color Change" ||
    startingCard.attributes.Symbol == "+4"
  ) {
    console.log(
      "starting Card can not be a special ability Card!... Regenerating!"
    );
    declareStartingCard();
  }
  renderStartingCard(startingCard);
  currenCard = startingCard;
  return startingCard;
}
declareStartingCard();

function renderStartingCard(startingCard) {
  document.getElementById("color").style.background =
    startingCard.attributes.color;
  document.getElementById("Symbol").innerHTML = startingCard.attributes.Symbol;
}

function renderHand() {
  document.getElementById("player1").innerHTML = "";
  player1.forEach(function (card) {
    document.getElementById(
      "player1"
    ).innerHTML += `<button class="card" id="${card.ID}" onlick="playCard('${card.ID}')" style="background-color: ${card.attributes.color}">${card.attributes.Symbol}</button>
`;
  });
}

//function is to be refined to only allow 1 draw per Turn and to only work when it is the users turn
function drawCard() {
  player1.push(generateCard());
  renderHand();
}

//fix this function as it is not calling from the onclick un the HTML
function playCard(CardID) {
  alert("yes");
  player1.forEach(function (card) {
    if (card.ID == `unique${CardID}`) {
      console.log("found");
    }
  });
}
