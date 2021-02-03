/**
 * Given a binary array, find the maximum number of consecutive 1s in this array.

Example 1:
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.
Note:

The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10,000
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {

    if (nums.length < 1) return 0
    if (nums.length === 1) return 1 ? nums[0] === 1 : 0
    let count = 0, max = 0;
    for (let item of nums) {
        if (item === 0) {
            max = max < count ? count : max;
            count = 0;
        } else {
            count++;
        }
    }
    if (count > max) {
        max = count;
    }
    return max;
};