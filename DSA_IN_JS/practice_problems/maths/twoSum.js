/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const map = {};
    for (let item = 0; item < nums.length; item++) {
        let diff = target - nums[item];
        if (diff in map) {
            return [item, map[diff]];
        } else {
            map[nums[item]] = item;
        }
    }
    return []
};

console.log(twoSum([3, 2, 3], 6));