function fact(n) {
  if (n < 1) {
    throw new Error("invalid Number");
  }
  if (n === 1) {
    return 1;
  }
  return fact(n - 1) * n;
}
console.log(fact(10));
console.log(fact(-10));
console.log();
