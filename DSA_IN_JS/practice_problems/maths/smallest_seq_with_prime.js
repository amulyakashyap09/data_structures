module.exports = {
    //param A : integer
    //param B : integer
    //param C : integer
    //param D : integer
    //return a array of integers
    solve: function(A, B, C, D) {
        let res = [];
        res.push(1);
        let i = 0,
            x = 0,
            y = 0,
            z = 0;
        while (i < D) {
            let tmp = Math.min(A * res[x], Math.min(B * res[y], C * res[z]));
            res.push(tmp);
            ++i;
            if (tmp == A * res[x]) ++x;
            if (tmp == B * res[y]) ++y;
            if (tmp == C * res[z]) ++z;
        }
        res.shift();
        return res;
    }
};