function maxSubArraySum(arr, k) {
    if (arr.length < 1 || k < 1 || arr.length < k) return null;
    let max = 0;
    for (let i = 0; i < k; i++) {
        max += arr[i];
    }
    let total = max;
    for (let i = k; i < arr.length; i++) {
        total += arr[i] - arr[i - k];
        max = Math.max(max, total);
    }
    return max;
}

console.log(maxSubArraySum([100, 200, 300, 400], 2));
// console.log(maxSubArraySum([2, 3], 3));