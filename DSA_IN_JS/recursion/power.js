function power(base, pow){
    if (pow === 0) {
        return 1
    }
    return base * power(base, pow -1)
}

console.log(power(2, 0))
console.log(power(2, 2))
console.log(power(2, 3))
console.log(power(2, 4))
//2 * power(2, 2)
//2 * 2 * power(2, 1)
//2 * 2 * 2 * power(2, 0)
//8
