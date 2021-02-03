class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class Bst {
    constructor() {
        this.root = null;
    }

    check(root, node) {
        if (root.value === node.value) {
            return undefined;
        } else if (root.value > node.value) {
            if (root.left === null) {
                root.left = node;
                return this;
            } else {
                this.check(root.left, node);
            }
        } else {
            if (root.right === null) {
                root.right = node;
                return this;
            } else {
                this.check(root.right, node);
            }
        }
    }

    insert(elem) {
        let child = new Node(elem);
        if (this.root === null) {
            this.root = child;
        } else {
            this.check(this.root, child)
        }
    }

    find(root, elem) {
        if (root.value === elem) {
            console.log("element found ");
            return true;
        } else if (root.value > elem) {
            if (root.left) {
                this.find(root.left, elem);
            } else {
                console.log("element not present on the left side of the tree")
                return false;
            }
        } else if (root.value < elem) {
            if (root.right) {
                this.find(root.right, elem);
            } else {
                console.log("element not present on the right side of the tree");
                return false;
            }
        } else {
            console.log("element not found")
        }
    }

    search(elem) {
        let root = this.root;
        return this.find(root, elem);
    }

    bfs() {
        let queue = [this.root];
        let visited = [];

        function traverse(node) {
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
            visited.push(node.value);
        }
        while (queue.length) {
            traverse(queue.shift());
        }
        return visited.join(" ");
    }

    dfsPreOrder() {
        let visited = [];
        let current = this.root;

        function traverse(node) {
            visited.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(current);
        return visited.join(" ");
    }

    dfsPostOrder() {
        let visited = [];
        let current = this.root;

        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            visited.push(node.value);
        }
        traverse(current);
        return visited.join(" ");
    }

    dfsInOrder() {
        let visited = [];
        let current = this.root;

        function traverse(node) {
            if (node.left) traverse(node.left);
            visited.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(current);
        return visited.join(" ");
    }
}

//          10
//       9      11
//  8             12
//7                 13

let tree = new Bst();
tree.insert(10);
tree.insert(9);
tree.insert(11);
tree.insert(8);
tree.insert(12);
tree.insert(7);
tree.insert(13);
console.log(tree.search(13))
console.log(tree.search(14))
console.log(tree.bfs())
console.log(tree.dfsPreOrder())
console.log(tree.dfsPostOrder())
console.log(tree.dfsInOrder());