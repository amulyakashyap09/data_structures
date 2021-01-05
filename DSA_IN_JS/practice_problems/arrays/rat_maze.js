/**
 * We have discussed Backtracking and Knight’s tour problem in Set 1.
 * Let us discuss Rat in a Maze as another example problem that can be solved using Backtracking.

A Maze is given as N*N binary matrix of blocks where source block is the upper left most block i.e.,
maze[0][0] and destination block is lower rightmost block i.e., maze[N-1][N-1].
A rat starts from source and has to reach the destination.
The rat can move only in two directions: forward and down.

In the maze matrix,
    0 means the block is a dead end and 1 means the block can be used in the path from source to destination.
     Note that this is a simple version of the typical Maze problem.
     For example, a more complex version can be that the rat can move in 4 directions and a more complex version can be with a limited number of moves.
 **/

const inputMaze = [
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [0, 1, 0, 0],
    [1, 1, 1, 1]];

class RatMaze {
    constructor(maze, size) {
        this.maze = maze;
        this.outputMaze = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
        this.mazeSize = size;
    }

    canTravel(i, j) {
        if (i >= 0 && i < this.mazeSize && j >= 0 && j < this.mazeSize && this.maze[i][j] === 1) {
            return true;
        } else {
            return false;
        }
    }

    solve(row, col) {
        if (row === this.mazeSize - 1 && col === this.mazeSize - 1 &&
            this.maze[row][col] === 1) {
            this.outputMaze[row][col] = 1;
            return true;
        } else if (this.canTravel(row, col)) {
            this.outputMaze[row][col] = 1;
            if (this.solve(row + 1, col)) return true;
            if (this.solve(row, col + 1)) return true;
            this.outputMaze[row][col] = 0;
        } else {
            return false;
        }
    }

    travel() {
        if (!this.solve(0, 0)) {
            console.log("solution does not exists");
            return null;
        } else {
            return this.outputMaze;
        }
    }
}

const source = new RatMaze(inputMaze, 4);
console.log(source.travel())

