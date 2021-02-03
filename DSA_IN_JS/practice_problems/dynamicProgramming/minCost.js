const M = [
    [1, 3, 5],
    [2, 1, 2],
    [4, 3, 1]
];

const DP = [];

// find min cost in travelling
//  from: [0,0]
//  to: [2,2]

function main() {
    // inserting first element
    DP[0] = [];
    DP[0][0] = M[0][0];

    const rows = M.length;
    const cols = M[0].length;

    // filling first row
    for (let r = 1; r < cols; r++) {
        DP[0][r] = DP[0][r - 1] + M[0][r];
    }

    // filling first column
    for (let c = 1; c < rows; c++) {
        if (!Array.isArray(DP[c])) DP[c] = [];
        DP[c][0] = DP[c - 1][0] + M[c][0];
    }

    // filling rest of the cells
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            DP[i][j] = M[i][j] + Math.min(DP[i - 1][j], DP[i][j - 1]);
        }
    }

    return DP[rows - 1][cols - 1]
}

console.log(main());