function productOfArray(nums) {
    if (nums.length === 0){
        return 1
    }
    return nums[0] * productOfArray(nums.slice(1));
}

console.log(productOfArray([1, 2, 3, 4]))