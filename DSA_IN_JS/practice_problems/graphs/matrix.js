class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    prepareGraph(roads, machines) {
        for (let row = 0; row < roads.length; row++) {
            for (let col = 0; col < roads[row].length - 1; col += 2) {
                const v1 = roads[row][col];
                const v2 = roads[row][col + 1];
                const w = roads[row][col + 2];

                if (machines.indexOf(v1) > -1) {
                    if (!(v1 in this.adjacencyList)) {
                        this.adjacencyList[v1] = []
                    }
                    this.adjacencyList[v1].push({ node: v2, weight: w })
                }
                if (machines.indexOf(v2) > -1) {
                    if (!(v2 in this.adjacencyList)) {
                        this.adjacencyList[v2] = []
                    }
                    this.adjacencyList[v2].push({ node: v1, weight: w })
                }
            }
        }
    }

    minTime(roads, machines) {
        // create graph only for machines
        this.prepareGraph(roads, machines)
        const start = machines[0];
        const queue = new PriorityQueue();
        const distances = [];
        const previous = {};
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                queue.enqueue(vertex, 0);
            } else {
                distances[vertex] = Number.POSITIVE_INFINITY;
                queue.enqueue(vertex, Number.POSITIVE_INFINITY);
            }
            previous[vertex] = null;
        }
        console.log("queue ", queue)
        return this.adjacencyList;
        //     const start = machines.shift();
        //     const queue = [adjacencyList[start]];
        //     const visited = {};
        //     visited[start] = true;
        //     const distance = {};
        //     while (queue.length) {
        //         const currElem = queue.shift().weight;
        //         visited[currElem.node] = true;
        //         for (let neighbor of adjacencyList[currElem.node]) {
        //             if (!visited[neighbor.node]) {
        //                 visited[neighbor.node] = true;
        //                 if (!(neighbor.node in distance)) {
        //                     distance[neighbor.node] = 0;
        //                 }
        //                 distance[neighbor.node] += neighbor.node;
        //             }
        //         }
        //     }
        //     return distance
        // }
    }
}
const graph = new WeightedGraph();
console.log(graph.minTime([[2, 1, 8], [1, 0, 5], [2, 4, 5], [1, 3, 4]], [2, 4, 0]))