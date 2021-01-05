function areDuplicatesPresent() {
    const arr = [];
    for (let i = 0; i < arguments.length; i++) {
        arr.push(arguments[i]);
    }
    arr.sort((a,b) => a > b);
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            return true;
        }
        i++;
    }
    return false;
}

console.log(areDuplicatesPresent(1, 2, 3, 4, 5, 6, 7));
console.log(areDuplicatesPresent(1, 1, 3, 4, 5, 6, 7));
console.log(areDuplicatesPresent(1, 2, 3, 4, 5, 6, 3));
console.log(areDuplicatesPresent(1, 2, 3, 4, 9, 6, 7));
console.log(areDuplicatesPresent(1, 2, 3, 4, 5, 2, 2));