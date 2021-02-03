function maxRegion(pathArr, minPrice, maxPrice) {
    let rows = pathArr.length;
    let cols = pathArr[0].length;
    let nearestHotels = [];

    function isReachable(grid, i, j, r, c, dist) {
        if (i < 0 || j < 0 || i >= r || j >= c || grid[i][j] < 1) {
            return;
        } else {
            if (grid[i][j] >= minPrice && grid[i][i] <= maxPrice) {
                nearestHotels.push({ dist: dist, grid: grid[i][j] });
                grid[i][j] = 0;
                return;
            }
            grid[i][j] = 0;
            isReachable(grid, i - 1, j, r, c, dist + 1) //up
            isReachable(grid, i + 1, j, r, c, dist + 1) // down
            isReachable(grid, i, j - 1, r, c, dist + 1) // left
            isReachable(grid, i, j + 1, r, c, dist + 1) // right
        }
    }
    isReachable(pathArr, 0, 0, rows, cols, 0);
    return nearestHotels.sort((a, b) => a.dist - b.dist);
}

const grid = [
    [1, 1, 4, 0, 0],
    [1, 2, 0, 0, 0],
    [3, 1, 1, 6, 0],
    [5, 0, 0, 0, 0],
    [0, 0, 0, 0, 7]
];
const minPrice = 4;
const maxPrice = 8;

console.log(maxRegion(grid, minPrice, maxPrice));