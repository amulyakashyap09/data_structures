// Building an WEIGHTED graph for now
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(v) {
        if (!v in this.adjacencyList) {
            this.adjacencyList[v] = [];
        }
    }

    addEdge(v1, v2, w) {
        if (!(v1 in this.adjacencyList)) {
            this.adjacencyList[v1] = [];
        }
        this.adjacencyList[v1].push({ node: v2, weight: w })

        if (!(v2 in this.adjacencyList)) {
            this.adjacencyList[v2] = [];
        }
        this.adjacencyList[v2].push({ node: v2, weight: w })
    }
}