/**
 * @param {number[][]} grid
 * @param {number} r0
 * @param {number} c0
 * @param {number} color
 * @return {number[][]}
 */

const x = [-1, 1, 0, 0];
const y = [0, 0, -1, 1];

const isInner = function(grid, m, n, r0, c0, ori) {
    if (r0 > 0 && r0 < m - 1 && c0 > 0 && c0 < n - 1 &&
        Math.abs(grid[r0 - 1][c0]) === ori &&
        Math.abs(grid[r0 + 1][c0]) === ori &&
        Math.abs(grid[r0][c0 + 1]) === ori &&
        Math.abs(grid[r0][c0 - 1]) === ori
    ) { return true; } else {
        return false;
    }
}

const inbound = function(m, n, ro, co) {
    return (ro >= m || ro < 0 || co >= n || co < 0) ? false : true;
}

const dfs = function(grid, m, n, r0, c0, color, ori) {

    if (!inbound(m, n, r0, c0) || grid[r0][c0] != ori) return;
    grid[r0][c0] = -1 * grid[r0][c0];

    for (let k = 0; k < x.length; k++) {
        let ro = r0 + x[k];
        let co = c0 + y[k];
        dfs(grid, m, n, ro, co, color, ori);
    }

    if (isInner(grid, m, n, r0, c0, ori)) {
        grid[r0][c0] = -1 * grid[r0][c0];
    }

}

const colorBorder = function(grid, r0, c0, color) {
    const m = grid.length;
    const n = rC[0].length;
    const ori = grid[r0][c0];
    dfs(grid, m, n, r0, c0, color, ori);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] < 0) grid[i][j] = color;
        }
    }
    return grid;
};