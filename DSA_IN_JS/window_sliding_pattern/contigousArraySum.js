function contigousMinSumSubArrayLen(nums, sum) {
    let i = 0, min = a[i], total = a[i];
    for (let j = 1; j < contigousMinSumSubArrayLen.length; j++) {
        total += a[i]
        if (total < min){
            total = min;
        }
    }
}

console.log(contigousMinSumSubArrayLen([100, 200, 300, 400, 500, 600, 700, 800, 900], 1600));