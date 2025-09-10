class Fib {
  #fibs;
  constructor() {
    this.#fibs = [0, 1];
  }
  fib(n) {
    if (n < 0) {
      return NaN;
    }
    const wieOft = n - this.#fibs.length + 1;
    for (let i = 0; i < wieOft; i++) {
      this.#fibs.push(this.#fibs.at(-1) + this.#fibs.at(-2));
    }
    return this.#fibs.at(n);
  }
}

fibInstance = new Fib();
console.log(`Ergebniss: ${fibInstance.fib(5)}`);
console.log(`Ergebniss: ${fibInstance.fib(12)}`);
console.log(`Ergebniss: ${fibInstance.fib(8)}`);
console.log(`Ergebniss: ${fibInstance.fib(3)}`);
console.log(`Ergebniss: ${fibInstance.fib(-8)}`);
