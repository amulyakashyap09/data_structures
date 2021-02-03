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

// Building an WEIGHTED graph for now
class WeightedGraph {
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

    dijkstra(start, finish) {

        const nodes = new PriorityQueue();
        const distances = [];
        const path = [];
        const previous = {};
        let smallest;

        // build up an initial state
        //    1. add all vertex to distance with MAX Number (Infinity) except the starting vertex , 
        // it should be 0
        //    2. enqueue all vertext with 0/Infinity to Priority Queue
        //    3. add all vertext to previous object, which hold history with value null

        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Number.POSITIVE_INFINITY;
                nodes.enqueue(vertex, Number.POSITIVE_INFINITY);
            }
            previous[vertex] = null;
        }

        while (nodes.values.length) {
            smallest = nodes.dequeue().val;
            if (smallest === finish) {
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            } else if (smallest || distances[smallest] !== Number.POSITIVE_INFINITY) {
                for (let neighbor in this.adjacencyList[smallest]) {
                    // find neighbour node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    let candidate = distances[smallest] + nextNode.weight;
                    if (candidate < distances[nextNode.node]) {
                        distances[nextNode.node] = candidate;
                        previous[nextNode.node] = smallest;
                        nodes.enqueue(nextNode.node, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}

let graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.dijkstra("A", "E"));