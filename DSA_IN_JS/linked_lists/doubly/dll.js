class Node {
    constructor(val) {
        this.prev = null;
        this.next = null;
        this.val = val;
    }
}

class DLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(e) {
        const newNode = new Node(e);
        if (!this.head || this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length += 1;
        return this;
    }

    unshift(e) {
        const newNode = new Node(e);
        if (!this.head || this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length += 1;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (this.length / 2 >= index) {
            let stepsToCover = this.length - 1 - index;
            let prev = null;
            while (stepsToCover >= 0) {
                prev = this.tail.prev;
                stepsToCover--;
            }
            return prev;
        } else {
            let stepsToCover = 0;
            let next = null;
            while (stepsToCover < this.length / 2) {
                next = this.head.next;
                stepsToCover++;
            }
            return next;
        }
    }

    set(index, value) {
        let node = this.get(index);
        if (node && node.val) {
            node.val = value;
            return true;
        } else {
            return false;
        }
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return undefined;
        if (index === 0) return this.unshift(value);
        if (index === this.length) return this.push(value);
        let newNode = new Node(value);
        let beforeNode = this.get(index - 1);
        let afterNode = beforeNode.next;
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return false;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        let node = this.get(index);
        let beforeNode = node.prev;
        let afterNode = node.next;
        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        node.prev = null;
        node.next = null;
        this.length--;
        return node;
    }

    shift() {
        if (!this.head) return undefined;
        let popped = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = popped.next;
            this.head.prev = null;
            popped.next = null;
        }
        this.length--;
    }

    pop() {
        if (!this.head) return undefined;
        let popped = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = popped.prev;
            this.tail.next = null;
            popped.prev = null;
        }
        this.length--;
    }

    print() {
        let current = this.head;
        while (current && current.val) {
            console.log(current.val);
            current = current.next;
        }
    }
}
const dll = new DLL();
dll.push(99);
dll.push(100);
dll.push(101);
dll.print();
dll.get(1);
dll.remove(1);
dll.print();
