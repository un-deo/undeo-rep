function fib(n) { 
    let arr = [0, 1];
    for (let i = 0; i < n; i++) { 
        arr.push(arr.at(-1) + arr.at(-2));
    }
    console.log(arr[n]);
}

fib(200);

console.log("end")