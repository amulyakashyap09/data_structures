function search(arr, n) {
    if (arr.length < 1) return null;
    let l = 0, r = arr.length - 1;
    while (l <= r) {
        let mid = parseInt((l + r) / 2);
        if (arr[mid] === n) {
            return mid;
        } else if (arr[mid] > n) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return null;
}

console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));