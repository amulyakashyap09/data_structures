class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({ val, priority })
        return this.values.sort();
    }

    dequeue() {
        return this.values.shift()
    }

    sort() {
        // O(N * Log(N))
        return this.values.sort((a, b) => a.priority - b.priority)
    }
}