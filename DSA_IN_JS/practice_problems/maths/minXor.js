module.exports = {
    //param A : array of integers
    //return an integer
    findMinXor: function(A) {
        let min = Number.POSITIVE_INFINITY;
        A = A.sort((a, b) => a - b);
        for (let i = 0; i < A.length - 1; i++) {
            let val = A[i] ^ A[i + 1];
            min = Math.min(min, val)
        }
        return min
    }
};