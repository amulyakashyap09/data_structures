class MaxBinaryHeap {
    constructor() {
        this.values = [10, 9, 8, 7, 5];
    }

    insert(element) {
        this.values.push(element);
        let idx = this.values.length - 1;
        while (idx > 0) {
            let parentIndex = Math.floor((idx - 1) / 2);
            let currentElement = this.values[idx];
            let parentElement = this.values[parentIndex];
            if (currentElement < parentElement) break;
            this.values[idx] = parentElement;
            this.values[parentIndex] = currentElement;
            idx = parentIndex;
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(4)
console.log(heap);