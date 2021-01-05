function pureRecursion(nums) {
    let newArr = [];

    if (nums.length <= 0) return newArr;
    if (nums[0] % 2 === 0) newArr.push(nums[0]);
    newArr = newArr.concat(pureRecursion(nums.slice(1)))
    return newArr
}

console.log(pureRecursion([1, 2, , 3, 4, 5, 6, 7, 8, 9, 10]))