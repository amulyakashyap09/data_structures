/**
 * Check Pallindrome Permutation: Given two strings, write a method to decide if one is a permutation of the
other
 * @param {*} str
 */

const permute = (arr, l, r) => {
    if (l === r) {
        console.log(arr);
    } else {
        for (let i = l; i < r + 1; i++) {
            [arr[l], arr[i]] = [arr[i], arr[l]];
            permute(arr, l + 1, r);
            [arr[l], arr[i]] = [arr[i], arr[l]];
        }
    }
}

module.exports.stringPermutations = (str) => {
    permute(str.split(""), 0, str.length - 1)
}

module.exports.stringPermutations("ABC")