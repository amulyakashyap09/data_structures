function countUniqueValues(arr) {
    let unique = 0;
    const fq = {};
    for (let item of arr) {
        if (!(item in fq)) {
            fq[item] = 1;
            unique += 1;
        }
    }
    return unique
}

console.log(countUniqueValues([1,3, 3, 4, 5,1,1,1,1,2]));