/**
 * We will be using adjacency list instead of matrix
 */


// Building an UNDIRECTED / BI-DIRECTIONAL graph for now
class Graph {
    constructor() {
        this.adjacencyList = {
            "A": ["B", "C"],
            "B": ["A", "D"],
            "C": ["A", "E"],
            "D": ["B", "E", "F"],
            "E": ["D", "C", "F"],
            "F": ["D", "E"]
        };
    }

    addVertex(v) {
        if (!v in this.adjacencyList) {
            this.adjacencyList[v] = [];
        }
    }

    addEdge(v1, v2) {
        if (!v1 in this.adjacencyList) {
            this.adjacencyList[v1] = [];
        }
        this.adjacencyList[v1].push(v2)

        if (!v2 in this.adjacencyList) {
            this.adjacencyList[v2] = [];
        }
        this.adjacencyList[v2].push(v1)
    }

    removeEdge(v1, v2) {
        let idx = -1;
        if (v1 in this.adjacencyList) {
            idx = this.adjacencyList[v1].indexOf(v2);
            if (idx > -1) {
                this.adjacencyList[v1].splice(idx, 1)
            }
        }

        if (v2 in this.adjacencyList) {
            idx = this.adjacencyList[v2].indexOf(v1);
            if (idx > -1) {
                this.adjacencyList[v2].splice(idx, 1)
            }
        }
    }

    removeVertex(v) {

        for (let vertex in this.adjacencyList) {
            if (v !== vertex) {
                this.removeEdge(v, vertex);
            }
        }
        delete this.adjacencyList[v];
    }

    _ifVisited(vertex, visited, sequence) {

        if (!vertex) return null;
        if (this.adjacencyList[vertex].length <= 0) return { sequence, visited };

        if (!visited[vertex]) {
            visited[vertex] = true;
            sequence.push(vertex)
        }

        for (let childVertex of this.adjacencyList[vertex]) {
            if (!(childVertex in visited) || !visited[childVertex]) {
                this._ifVisited(childVertex, visited, sequence)
            }
        }

        return { sequence, visited };
    }

    dfsRecursive() {
        const vertex = "A";
        const visited = {};
        visited[vertex] = true;
        const sequence = [vertex];
        return this._ifVisited(vertex, visited, sequence);
    }

    dfsIterative() {
        const start = "A";
        const stack = [start];
        const visited = {};
        const sequence = [];
        visited[start] = true;
        while (stack.length) {
            let vertex = stack.pop();
            sequence.push(vertex);
            for (let childVertex of this.adjacencyList[vertex]) {
                if (!(childVertex in visited) || !visited[childVertex]) {
                    visited[childVertex] = true;
                    stack.push(childVertex);
                }
            }
        }
        return { sequence, visited }
    }

    bfsIterative() {
        const start = "A";
        const queue = [start];
        const visited = {};
        const sequence = [];
        visited[start] = true;
        while (queue.length) {
            let vertex = queue.shift();
            sequence.push(vertex);
            for (let childVertex of this.adjacencyList[vertex]) {
                if (!(childVertex in visited) || !visited[childVertex]) {
                    visited[childVertex] = true;
                    queue.push(childVertex);
                }
            }
        }
        return { sequence, visited }
    }
}

const g = new Graph();
console.log(g.dfsRecursive());
console.log(g.dfsIterative());
console.log(g.bfsIterative());