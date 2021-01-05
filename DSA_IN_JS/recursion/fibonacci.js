function fib(n) {
    let sum = 0, a = 0, b = 1;
    if (n < 1) return sum;
    while (n > 0) {
        sum = a + b;
        a = b;
        b = sum;
        n--;
    }
    return sum;
}

function fibo(n) {
    if (n <= 2) return 1;
    return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(4))