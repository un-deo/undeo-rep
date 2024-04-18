//class Kassa {
//  #geldlade;
//
//  constructor(
//    initialgeld,
//    gegeben,
//    artikel1,
//    artikel2,
//    artikel3,
//    artikel4,
//    artikel5,
//    artikel6,
//    artikel7,
//    artikel8,
//    artikel9,
//    artikel10,
//    artikel11,
//    artikel12,
//    artikel13,
//    artikel14,
//    artikel15,
//    artikel16,
//
//    preis1,
//    preis2,
//    preis3,
//    preis4,
//    preis5,
//    preis6,
//    preis7,
//    preis8,
//    preis9,
//    preis10,
//    preis11,
//    preis12,
//    preis13,
//    preis14,
//    preis15,
//    preis16,
//
//    anzahl1,
//    anzahl2,
//    anzahl3,
//    anzahl4,
//    anzahl5,
//    anzahl6,
//    anzahl7,
//    anzahl8,
//    anzahl9,
//    anzahl10,
//    anzahl11,
//    anzahl12,
//    anzahl13,
//    anzahl14,
//    anzahl15,
//    anzahl16
//  ) {
//    this.#geldlade = initialgeld;
//    this.gegeben = gegeben;
//    this.artikel1 = artikel1;
//    this.artikel2 = artikel2;
//    this.artikel3 = artikel3;
//    this.artikel4 = artikel4;
//    this.artikel5 = artikel5;
//    this.artikel6 = artikel6;
//    this.artikel7 = artikel7;
//    this.artikel8 = artikel8;
//    this.artikel9 = artikel9;
//    this.artikel10 = artikel10;
//    this.artikel11 = artikel11;
//    this.artikel12 = artikel12;
//    this.artikel13 = artikel13;
//    this.artikel14 = artikel14;
//    this.artikel15 = artikel15;
//    this.artikel16 = artikel16;
//
//    this.preis1 = preis1;
//    this.preis2 = preis2;
//    this.preis3 = preis3;
//    this.preis4 = preis4;
//    this.preis5 = preis5;
//    this.preis6 = preis6;
//    this.preis7 = preis7;
//    this.preis8 = preis8;
//    this.preis9 = preis9;
//    this.preis10 = preis10;
//    this.preis11 = preis11;
//    this.preis12 = preis12;
//    this.preis13 = preis13;
//    this.preis14 = preis14;
//    this.preis15 = preis15;
//    this.preis16 = preis16;
//
//    this.anzahl1 = anzahl1;
//    this.anzahl2 = anzahl2;
//    this.anzahl3 = anzahl3;
//    this.anzahl4 = anzahl4;
//    this.anzahl5 = anzahl5;
//    this.anzahl6 = anzahl6;
//    this.anzahl7 = anzahl7;
//    this.anzahl8 = anzahl8;
//    this.anzahl9 = anzahl9;
//    this.anzahl10 = anzahl10;
//    this.anzahl11 = anzahl11;
//    this.anzahl12 = anzahl12;
//    this.anzahl13 = anzahl13;
//    this.anzahl14 = anzahl14;
//    this.anzahl15 = anzahl15;
//    this.anzahl16 = anzahl16;
//
//    if (this.gegeben < this.preis) {
//      throw new Error("Not enought money given");
//    }
//  }
//
//  preis() {
//    const preisgesamt =
//      gespreis1 +
//      gespreis2 +
//      gespreis3 +
//      gespreis4 +
//      gespreis5 +
//      gespreis6 +
//      gespreis7 +
//      gespreis8 +
//      gespreis9 +
//      gespreis10 +
//      gespreis11 +
//      gespreis12 +
//      gespreis13 +
//      gespreis14 +
//      gespreis15 +
//      gespreis16;
//
//    const gespreis1 = this.preis1 * this.anzahl1;
//    const gespreis2 = this.preis2 * this.anzahl2;
//    const gespreis3 = this.preis3 * this.anzahl3;
//    const gespreis4 = this.preis4 * this.anzahl4;
//    const gespreis5 = this.preis5 * this.anzahl5;
//    const gespreis6 = this.preis6 * this.anzahl6;
//    const gespreis7 = this.preis7 * this.anzahl7;
//    const gespreis8 = this.preis8 * this.anzahl8;
//    const gespreis9 = this.preis9 * this.anzahl9;
//    const gespreis10 = this.preis10 * this.anzahl10;
//    const gespreis11 = this.preis11 * this.anzahl11;
//    const gespreis12 = this.preis12 * this.anzahl12;
//    const gespreis13 = this.preis13 * this.anzahl13;
//    const gespreis14 = this.preis14 * this.anzahl14;
//    const gespreis15 = this.preis15 * this.anzahl15;
//    const gespreis16 = this.preis16 * this.anzahl16;
//
//    return preisgesamt;
//  }
//}
//
//const button = document.getElementById("getRechnung");
//button.addEventListener("click", function () {
//  const prod1 = document.getElementById("produkt1");
//  const preis1e = document.getElementById("price2");
//  const amount1e = document.getElementById("amount1");
//
//  const rechnung = new Kassa();
//});
class Kassa {
  #geldLade; //summe an euro in der Lade

  constructor(initialGeld, givenMoney, eggs, milk, flour, shugar, breadslices) {
    this.#geldLade = initialGeld;
    this.eggs = eggs;
    this.milk = milk;
    this.flour = flour;
    this.shugar = shugar;
    this.breadslices = breadslices;
    this.givenMoney = givenMoney;

    if (givenMoney < this.preis) {
      throw new Error("Not enought money given");
    }
    if (isNaN(initialGeld)) {
      throw new Error("initialGeld has to be a Number");
    }
    if (
      isNaN(eggs) ||
      isNaN(milk) ||
      isNaN(flour) ||
      isNaN(shugar) ||
      isNaN(breadslices) ||
      eggs < 0 ||
      milk < 0 ||
      flour < 0 ||
      shugar < 0 ||
      breadslices < 0
    ) {
      throw new Error(
        "please enter the amount of items bought for eggs, milk, flour, shugar, breadslices. check if these are Numbers"
      );
    }
  }
  //scannen(artikel) {}

  preis() {
    const preis =
      2.49 * this.eggs +
      1.5 * this.milk +
      0.75 * this.flour +
      1.25 * this.shugar +
      0.86 * this.breadslices;
    return preis;
  }

  //bezahlen() {
  //this.#geldLade = this.#geldLade + preis;
  //rechnung schreiben
  //const rueckgeld = givenMoney - preis;
  //}
  rueckgeld() {
    return this.givenMoney - this.preis();
  }

  rechnung() {
    return `heute ${this.preis().toFixed(2)} € eingenommen
    Artikel:
    -Eier ${(this, this.eggs)}x
    -Milch ${this.milk}x
    -Mehl ${this.flour}x
    -Zucker ${this.shugar}x
    -Brotscheiben ${this.breadslices}x

    gegeben : ${this.givenMoney.toFixed(2)}
    preis : ${this.preis().toFixed(2)}
    rueckgeld: ${this.rueckgeld().toFixed(2)}


    geld in der Kassa: ${this.#geldLade + this.preis()}`;
  }
}
const kassa = new Kassa(15, 3000, 1, 1, 1, 1, 1);
console.log(kassa.rechnung());

console.log("break");
