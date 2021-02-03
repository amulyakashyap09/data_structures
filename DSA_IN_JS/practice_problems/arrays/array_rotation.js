/**
 * Given an array of integers A and multiple values in B which represents the indices of the array A 
 * around which left rotation of the array A needs to be performed.
 * Find the rotated array for each value and return the result in the from of a matrix where i'th row 
 * represents the rotated array for the i'th value in B.
 * 
 * Input 1
 *  A = [1, 2, 3, 4, 5]
 *  B = [2, 3]
 * Output 1
 *   [[3, 4, 5, 1, 2], [4, 5, 1, 2, 3]]
 */

function leftRotateByOne(arr, len) {
    let temp = arr[0]
    for (let i = 0; i < len - 1; i++) {
        arr[i] = arr[i + 1]
    }
    arr[len - 1] = temp;
}

function leftRotate(arr, rotations) {
    for (let i = 0; i < rotations; i++) {
        leftRotateByOne(arr, arr.length);
    }
    return arr;
}

//param A : array of integers
//param B : array of integers
//return a array of array of integers
function solve(A, B) {
    let output = [];
    for (let i = 0; i < B.length; i++) {
        output.push(leftRotate(Object.assign([], A), B[i]));
    }
    return output;
}

function main() {
    const A = [1, 2, 3, 4, 5];
    const B = [2, 3];
    console.log(solve(A, B));
}