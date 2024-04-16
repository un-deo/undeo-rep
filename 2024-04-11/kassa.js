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
