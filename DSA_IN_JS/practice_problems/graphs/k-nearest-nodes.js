class Graph {
    constructor() {
        this.vertex = 7;
        this.edges = 6;
        this.graph = [[2, 1],
        [2, 5],
        [5, 4],
        [5, 7],
        [4, 3],
        [7, 6]];
        this.tree = [];
        this.output = [];
    }

    dfs(k, startNode, parent) {

        if (k < 0) return;
        this.output.push(startNode);

        for (let child of this.tree[startNode]) {
            if (child !== parent) {
                this.dfs(k - 1, child, startNode)
            }
        }
    }

    findNodesWithinK(k, startNode) {
        for (let i = 0; i < this.edges; i++) {
            let from = this.graph[i][0]
            let to = this.graph[i][1]
            if (!Array.isArray(this.tree[from])) {
                this.tree[from] = [];
            }
            this.tree[from].push(to)
            if (!Array.isArray(this.tree[to])) {
                this.tree[to] = [];
            }
            this.tree[to].push(from)
        }
        this.dfs(k, startNode, -1);
        console.log(this)
    }
}

const g = new Graph();
console.log(g.findNodesWithinK(2, 4))