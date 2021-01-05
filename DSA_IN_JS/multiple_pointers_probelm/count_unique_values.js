/**
 * Thiss function counts unique value in the given SORTED array
 * APPROACH : Multiple Counter Solution
 * The above given solution works only for SORTED ARRAY
 * We will not be using any extra variable / data structure to store new values
 * 
 * keep two points let say i, j
 * if i === j, means duplicate move j to j+1
 * if i !== j, means unique, replace value at j to value at i and increase counter of i & j by 1
 * iterate till length of array
 */

function countUniqueValues(arr) {
    if (arr.length === 0) {
        return -1
    } else if (arr.length === 1) {
        return 1
    } else {
        let i = 0;
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] !== arr[j]) {
                i += 1;
                arr[i] = arr[j];
            }
        }
        return i + 1;
    }
}

console.log(countUniqueValues([1, 1, 1]));
// console.log(countUniqueValues([1, 2, 3, 4, 5, 6]));
// console.log(countUniqueValues([1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 6, 6]));