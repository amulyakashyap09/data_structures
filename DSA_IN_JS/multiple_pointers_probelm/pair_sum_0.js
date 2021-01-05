/**
 * Given input a sorted array find the first pair whose sum is equals to 0
 * APPROACH : Multiple Counter Solution
 * The above given solution works only for SORTED ARRAY
 */

function sumZero(arr) {
    if (arr.length <= 1) {
        return []
    } else {
        let startPointer = 0, endPointer = parseInt(arr.length - 1), len = arr.length;
        while (len > 0) {
            let sum = arr[startPointer] + arr[endPointer];
            if (sum === 0) {
                return [arr[startPointer], arr[endPointer]];
            } else if (sum > 0) {
                endPointer -= 1;
            } else {
                startPointer += 1;
            }
            len--;
        }
        return [];
    }
}


console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]));