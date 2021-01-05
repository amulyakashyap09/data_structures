class Node {
    constructor(freq, data) {
        this.freq = freq
        this.data = data
        this.left = None
        this.right = None
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.sort();
    }

    enqueue() {
        this.values.shift();
    }

    sort() {
        this.values.sort((a, b) => { a.priority - b.priority });
    }
}

class BinaryTree {
    constructor(root) {
        this.root = root;
    }
}