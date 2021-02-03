/**
 * RIGHT ROTATE ARRAY BY K
 */

function leftRotate(arr, rotations) {
    for (let i = 0; i < rotations; i++) {
        leftRotateByOne(arr, arr.length);
    }
    return arr;
}

function leftRotateByOne(arr, len) {
    temp = arr[0]
    for (let i = 0; i < len - 1; i++) {
        arr[i] = arr[i + 1]
    }
    arr[len - 1] = temp;
}

function main() {
    const r = 3;
    const original = [1, 2, 3, 4, 5, 6, 7];
    console.log(original, " array LEFT rotated by ", r, " is ", leftRotate(Object.assign([], original), r), "\n\n");
}
main();