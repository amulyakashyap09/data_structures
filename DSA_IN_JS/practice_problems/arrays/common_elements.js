/**
 * You have three Arrays.
A = {2, 5, 3, 2, 8,1}
B = {7, 9, 5, 2, 4, 10, 10}
C = {6, 7, 5, 5, 3, 7}

Make an array from this three arrays which elements is present in at least two array.

This question was followed by instead of three arrays. 
If you have a list of array then what will be the solution? 
Also what will be the time complexity?
 * 
 */

function main(A, B, C) {

    const freq = {};
    const common = [];
    let tempMap = {};

    for (let item of A) {
        if (!(item in freq)) {
            freq[item] = 1;
        }
    }

    for (let item of B) {
        if (!(item in freq)) {
            tempMap[item] = 1;
            freq[item] = 1;
        } else if (item in freq && !(item in tempMap)) {
            freq[item] = 2;
        }
    }

    tempMap = {};

    for (let item of C) {
        if (!(item in freq)) {
            freq[item] = 1;
        } else if (item in freq && !(item in tempMap)) {
            freq[item] = 3;
        }
    }

    tempMap = {};

    for (const property in freq) {
        if (freq[property] >= 2) {
            common.push(property);
        }
    }

    return { freq, common };
}

A = [2, 5, 3, 2, 8, 1]
B = [7, 9, 5, 2, 4, 10, 10]
C = [6, 7, 5, 5, 3, 7]
console.log(main(A, B, C))