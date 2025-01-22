//ein objekt mit
//4 properties
//2 Methoden
//3 instanzen also 3 verschiedene objecte mit den Obigen properties / Methoden

const Eichhörnchen1 = {
  farbe: "braun",
  lieblingsbaum: "Eiche",
  lieblingsnuss: "Walnuss",
  rasse: "Euroasisches_Eichhörnchen",
  sprunweite: Math.random() * 10,
  alter: Math.random() * 50,
};

const Eichhörnchen2 = {
  farbe: "golden",
  lieblingsbaum: "Buche",
  lieblingsnuss: "Erdnuss",
  rasse: "Fuchshörnchen",
  sprunweite: Math.random() * 10,
  alter: Math.random() * 50,
};

const Eichhörnchen3 = {
  farbe: "braun_schwarz",
  lieblingsbaum: "Walnuss",
  lieblingsnuss: "Fuchshörnchen",
  rasse: "Apfelbaum",
  sprunweite: Math.random() * 10,
  alter: Math.random() * 50,
};

function Eichhörnchen(farbe, lieblingsbaum, lieblingsnuss, rasse) {
  this.farbe = farbe;
  this.lieblingsbaum = lieblingsbaum;
  this.lieblingsnuss = lieblingsnuss;
  this.rasse = rasse;
  this.sprungweite = Math.floor(Math.random() * 10) + "m";
  this.alter = Math.floor(Math.random() * 50);
}

const Array = [];
const farben = [
  "braun",
  "golden",
  "schwarz",
  "weiß",
  "grau",
  "rot",
  "gelb",
  "orange",
  "beige",
  "dunkelbraun",
];
const baeume = [
  "Eiche",
  "Buche",
  "Walnuss",
  "Apfelbaum",
  "Birke",
  "Kastanie",
  "Ahorn",
  "Kiefer",
  "Fichte",
  "Linde",
];
const nuesse = [
  "Walnuss",
  "Erdnuss",
  "Haselnuss",
  "Mandel",
  "Cashew",
  "Pistazie",
  "Macadamia",
  "Pekanuss",
  "Paranuss",
  "Kokosnuss",
];
const rassen = [
  "Euroasisches_Eichhörnchen",
  "Fuchshörnchen",
  "Grauhörnchen",
  "Rothörnchen",
  "Schwarzhörnchen",
  "Japanisches_Eichhörnchen",
  "Indisches_Riesenhörnchen",
  "Sibirisches_Fliegenhörnchen",
  "Nordamerikanisches_Fliegenhörnchen",
  "Rotes_Fliegenhörnchen",
];

//eichörnchen mit randomwerten erstellen.
for (let i = 0; i < 30; i++) {
  Array[i] = new Eichhörnchen(
    farben[Math.floor(Math.random() * 10)],
    baeume[Math.floor(Math.random() * 10)],
    nuesse[Math.floor(Math.random() * 10)],
    rassen[Math.floor(Math.random() * 10)]
  );
}
console.log(Array);
