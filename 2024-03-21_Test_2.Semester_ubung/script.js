//function fib(n) {
//    const arr = [0, 1];
//    for (let i = 0; i < n; i++) {
//        arr.push(arr.at(-1) + arr.at(-2))
//    }
//    console.log(arr[n]);
//}
//
//fib(7)
//fib(8)
//fib(21)
//fib(3)
//fib(40)
//
//console.log("Breakpoint")

class Fib {
  constructor() {
    this.fibs = [0, 1];
  }
  fib(n) {
    const wieOft = n - this.fibs.length + 1;
    for (let i = 0; i < wieOft; i++) {
      this.fibs.push(this.fibs.at(-1) + this.fibs.at(-2));
    }
    return this.fibs.at(n);
  }
}

fibInstance = new Fib();
console.log(fibInstance.fib(5));
console.log(fibInstance.fib(12));
console.log(fibInstance.fib(8));
console.log(fibInstance.fib(3));
