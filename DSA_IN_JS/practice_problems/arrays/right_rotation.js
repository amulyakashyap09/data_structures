/**
 * RIGHT ROTATE ARRAY BY K
 */

function rightRotate(arr, rotations) {
    for (let i = 0; i < rotations; i++) {
        rightRotateByOne(arr, arr.length);
    }
    return arr;
}

function rightRotateByOne(arr, len) {
    temp = arr[len - 1]
    for (let i = len - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = temp;
}

function main() {
    const r = 3;
    const original = [1, 2, 3, 4, 5, 6, 7];
    console.log(original, " array RIGHT rotated by ", r, " is ", rightRotate(Object.assign([], original), r), "\n\n");
}
main();