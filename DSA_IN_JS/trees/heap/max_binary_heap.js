class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    /**
     * 
     * @param {Int} element 
     * insert element in max heap
     * push element into last of an array{all elements of heap}
     * any child node at n has it's parent node at (n-1)/2
     * now, find the new element parent
     * swap the element and update the index as well
     */

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

    /**
     * remove element from max heap and make new element from heap it's root
     * you have to remove the root and find the new root
     * swap the first element with last one in array
     * remove the last element from array
     * now, compare and the first element with it's largest child and replace it. repeat untill all 
     * elements are sorted
     * 12 13 09
     */
    remove() {
        if (this.values.length) {
            this.values[0] = this.values.pop();
            this.sinkDown()
        }
    }

    sinkDown() {
        let idx = 0;
        let length = this.values.length;
        const element = this.values[0];
        while (true) {
            const leftIdx = 2 * idx + 1;
            const rightIdx = 2 * idx + 2;
            let leftChild = null;
            let rightChild = null;
            let indexToSwap = null;

            if (leftIdx < length) {
                leftChild = this.values[leftIdx];
                if (leftChild > element) {
                    indexToSwap = leftIdx
                }
            }

            if (rightIdx < length) {
                rightChild = this.values[leftIdx];
                if (
                    // when left child is smaller but right child is larger than element
                    (indexToSwap === null && rightChild > element) ||
                    // when right and left child both are larger than element
                    (indexToSwap !== null && rightChild > leftChild)
                ) {
                    indexToSwap = rightIdx
                }
            }

            if (indexToSwap === null) break;
            this.values[idx] = this.values[indexToSwap];
            this.values[indexToSwap] = element;
            idx = indexToSwap
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.insert(55)
heap.remove();
console.log(heap);
