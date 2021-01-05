/***
 * Program to find max sum s of consecutive digits in array n of k
 * Approach : window sliding pattern
 */

function maxSum(arr, k) {
    if (arr.length < 1 || k < 1) return null;
    let max = 0, temp = 0, counter = 0;
    for (let i = 0; i < k; i++) {
        max += arr[i];
    }

    for (let i = k; i < arr.length; i++) {
        temp = max - arr[counter];
        temp = temp + arr[i];
        if (temp > max) {
            max = temp;
        }
        counter += 1;
    }
    return max;
}

// console.log(maxSum([1, 2, 3, 4], 3));
// console.log(maxSum([1, 2, 3, 4, 5, 6], 3));
console.log(maxSum([1, 2, 3, 4, 5, 6, 7, 1, 4], 4));