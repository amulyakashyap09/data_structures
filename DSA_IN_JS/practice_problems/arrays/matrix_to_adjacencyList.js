const start = 56;

function solve(grid) {
    const rows = grid.length;
    const map = {};
    for (let i = 0; i < rows; i++) {
        map[String.fromCharCode(start + i)] = [];
    }
}

function main() {
    let grid = [
        [32, 101, 66, 13, 19],
        [11, 14, 48, 158, 7],
        [101, 114, 175, 12, 34],
        [89, 126, 42, 21, 141],
        [100, 33, 112, 42, 21]
    ];
    console.log(solve(grid, ROW, COL));
}