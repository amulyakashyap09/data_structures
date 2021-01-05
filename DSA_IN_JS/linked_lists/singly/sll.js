class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {

    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    // insert new node at beginning
    unshift(element) {

        /**
         * link new element next linked to first element
         */

        let newNode = new Node(element);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            newNode = this.head;
        }
        this.length++;
        return this;
    }

    // remove the first element from the list
    shift() {
        if (!this.head) return undefined;
        let current = this.head;
        let secondElement = current.next;
        this.head = secondElement;
        this.head.next = secondElement;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return current.val;
    }

    // remove the last element from the list
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current.val;
    }

    // insert the element at the end
    push(element) {
        const newNode = new Node(element)
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // traverse the list
    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.val)
            current = current.next
        }
    }

    // inserts a new node at specific position
    insert(index, element) {

        if (index < 0 || index > this.length) return false;
        if (index === this.length) !!this.push(element);
        if (index === 0) !!this.unshift(element);
        let prev = this.get(index - 1);
        let current = prev.next;
        let newNode = new Node(element);
        prev.next = newNode;
        newNode.next = current;
        this.length++;
        return true;
    }

    // set the value of node at particular index
    set(index, element) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = element;
            return true;
        } else {
            return false;
        }
    }

    // fetches element from a particular index
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let ctr = 0;
        let current = this.head;
        while (ctr !== index) {
            current = current.next;
            ctr++;
        }
        return current;
    }

    // remove element from specific index
    remove(index) {
        if (index < 0 || index >= this.length) return false;
        if (index === this.length - 1) return this.pop()
        if (index === 0) return this.shift();
        let prev = this.get(index - 1);
        let current = prev.next; // element to be removed
        let after = current.next;
        prev.next = after;
        this.length--;
        return current;
    }

    // reverses the linked lists
    reverse() {

        let node = this.head
        this.head = this.tail
        this.tail = node;
        let prev = null;
        let next;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node
            node = next;
        }
        return this;
    }
}

let sll = new SinglyLinkedList()
sll.push('Hi ');
sll.push('Mr ');
sll.push('Amulya ');
sll.push('Kashyap ');
sll.traverse()
sll.pop()
sll.traverse()