const ROW = 5;
const COL = 5;
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(x, y, distance) {
        this.values.push({ x, y, distance });
        this.sort();
    }

    dequeue() {
        this.values.shift();
    }

    sort() {
        this.values.sort((a, b) => { a.distance - b.distance });
    }

    remove(x, y, distance) {
        for (let item of this.values) {
            if (item.x === x && item.y === y && item.distance === distance) {
                this.values.splice(i, 1);
            }
        }
    }

    isEmpty() {
        return this.values.length > 0;
    }
}

function compare(a, b) {
    if (a.distance < b.distance) {
        return -1;
    } else if (a.distance > b.distance) {
        return 1;
    } else { return 0; }
}

function isInsideGrid(i, j) {
    return (i >= 0 && i < ROW &&
        j >= 0 && j < COL);
}


function solve(grid, row, col) {
    let dist = [];
    // Initializing distance array by INT_MAX  
    for (let i = 0; i < row; i++) {
        if (!Array.isArray(dist[i])) dist[i] = [];
        for (let j = 0; j < col; j++) {
            dist[i][j] = Number.POSITIVE_INFINITY;
        }
    }

    // Initialized source distance as 
    // initial grid position value 
    dist[0][0] = grid[0][0];

    let pq = new PriorityQueue();

    // Insert source cell to priority queue 
    pq.enqueue(0, 0, dist[0][0]);

    while (!pq.isEmpty()) {
        let curr = pq.dequeue();
        for (let i = 0; i < 4; i++) {
            let rows = curr.x + dx[i];
            let cols = curr.y + dy[i];

            if (isInsideGrid(rows, cols)) {
                if (dist[rows][cols] >
                    dist[curr.x][curr.y] +
                    grid[rows][cols]) {

                    // If Cell is already been reached once, 
                    // remove it from priority queue 
                    if (dist[rows][cols] != Number.POSITIVE_INFINITY) {
                        // let adj = new Cell(rows, cols,
                        //     dist[rows][cols]);

                        // pq.remove(adj);
                        console.log("heloo bhalu");
                        console.log(pq.remove(rows, cols, dist[rows][cols]));
                    }

                    // Insert cell with updated distance  
                    dist[rows][cols] = dist[curr.x][curr.y] +
                        grid[rows][cols];

                    pq.enqueue(rows, cols,
                        dist[rows][cols]);
                }
            }
        }
    }
    return dist[row - 1][col - 1];
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

main();