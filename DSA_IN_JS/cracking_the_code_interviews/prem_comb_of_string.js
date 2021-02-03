/**
 * Check Permutation: Given two strings, write a method to decide if one is a permutation of the
other
 * @param {*} str1
 * @param {*} str2
 */
module.exports.permutation = (str1, str2) => {
    if (str1.length !== str2.length) return false;

    const count1 = new Array(NO_OF_CHARS).fill(0);
    const count2 = new Array(NO_OF_CHARS).fill(0);

    for (let i of str1.split("")) count1[i.charCodeAt(0)] += 1
    for (let i of str2.split("")) count2[i.charCodeAt(0)] += 1

    for (let i = 0; i < NO_OF_CHARS; i++) {
        if (count1[i] !== count2[i]) return false;
    }

    return true;
}

console.log(module.exports.permutation("stars", "ratss"));
console.log(module.exports.permutation("aaca", "aca"));