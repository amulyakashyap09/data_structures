class ConnectedIslands {
    constructor(arr) {
        this.grid = arr
    }

    maxRegion() {
        let grid = this.grid;
        let rows = grid.length;
        let cols = grid[0].length;
        let maxConnectedCells = 0;

        function isConnected(grid, cr, cc, r, c, n) {
            if (cr < 0 || cc < 0 || cr >= r || cc >= c || grid[cr][cc] !== 1) {
                return 0;
            } else {
                n++;
                maxConnectedCells = Math.max(maxConnectedCells, n);
                grid[cr][cc] = 0;
                isConnected(grid, cr - 1, cc, r, c, n)
                isConnected(grid, cr + 1, cc, r, c, n)
                isConnected(grid, cr, cc - 1, r, c, n)
                isConnected(grid, cr, cc + 1, r, c, n)
                isConnected(grid, cr - 1, cc - 1, r, c, n)
                isConnected(grid, cr - 1, cc + 1, r, c, n)
                isConnected(grid, cr + 1, cc - 1, r, c, n)
                isConnected(grid, cr + 1, cc + 1, r, c, n)
                grid[cr][cc] = 1;
            }
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] === 1) {
                    cols = grid[i].length;
                    isConnected(grid, i, j, rows, cols, 0);
                }
            }
        }
        return maxConnectedCells;
    }
}

/**
1, 1, 0, 0, 0
1, 1, 0, 0, 0
0, 0, 1, 0, 0
0, 0, 0, 1, 1
Connected island where any piece of land (marked 1), is connected to it's adjacent cell
**/

const arr1 = [
    [1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0]
]

const arr2 = [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1]
];

let islands = new ConnectedIslands(arr2);
console.log(islands.maxRegion());