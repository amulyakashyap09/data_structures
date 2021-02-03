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

function optimizedSolution(A, B, C) {
    let sa = new Set(),
        sb = new Set(),
        sc = new Set();
    A.forEach(a => sa.add(a));
    B.forEach(b => sb.add(b));
    C.forEach(c => sc.add(c));
    let res = new Set();
    sa.forEach((a) => {
        if (sb.has(a) || sc.has(a)) res.add(a);
    })
    sb.forEach((b) => {
        if (sa.has(b) || sc.has(b)) res.add(b);
    })
    sc.forEach((c) => {
        if (sa.has(c) || sb.has(c)) res.add(c);
    })
    let arr = Array.from(res.values());
    arr.sort((i, j) => i - j)
    return arr
}

const A = [2, 5, 3, 2, 8, 1]
const B = [7, 9, 5, 2, 4, 10, 10]
const C = [6, 7, 5, 5, 3, 7]

console.log(optimizedSolution(A, B, C));