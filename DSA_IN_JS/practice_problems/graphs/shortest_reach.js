class Graph {
    constructor(obj) {
        this.adjacencyList = obj.adjacencyList;
        this.nNodes = obj.nNodes;
        this.startingNode = obj.startingNode;
        this.weight = 6;
    }
    // use BFS here
    shortestReach() {
        const distances = Array(this.nNodes + 1).fill(-1);
        const start = this.startingNode;
        const queue = [start];
        const visited = {};
        visited[start] = true;
        distances[start] = 0;
        while (queue.length) {
            let vertex = queue.pop();
            if (vertex in this.adjacencyList) {
                for (let childVertex of this.adjacencyList[vertex.toString()]) {
                    if (!(childVertex in visited) || !visited[childVertex]) {
                        visited[childVertex] = true;
                        distances[childVertex] = distances[vertex] + this.weight;
                        queue.push(childVertex);
                    }
                }
            } else {
                console.log(vertex, queue)
            }
        }

        distances.shift()
        return distances.filter((n) => n !== 0).join(" ");
    }
}

function getOutput(formattedinput) {

    const output = [];

    while (formattedinput.length) {
        const input = formattedinput.shift();
        let graph = new Graph();
        output.push(graph.shortestReach());
    }
    return output;
}

const arrInput = [{
    "nNodes": 4,
    "nEdges": 2,
    "adjacencyList": { "1": [2, 3], "2": [1], "3": [1] },
    "startingNode": 1
},
{
    "nNodes": 3,
    "nEdges": 1,
    "adjacencyList": { "2": [3], "3": [2] },
    "startingNode": 2
}, {
    "nNodes": 7,
    "nEdges": 4,
    "adjacencyList": { '1': [2, 3], '2': [1, 5], '3': [4], '4': [3], '5': [2] },
    "startingNode": 2
}];
console.log(getOutput(arrInput))