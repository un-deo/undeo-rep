function fib(n) { 
    const arr = [0, 1];
    for (let i = 0; i < n; i++) { 
        arr.push(arr.at(-1) + arr.at(-2))
    }
    console.log(arr[n]);
}

fib(7)
fib(8)
fib(21)
fib(3)
fib(40)

console.log("Breakpoint")