class Node {
    constructor(val) {
        this.left = null;
        this.right = null;
        this.value = val;
    }
}

class LowesrCommonAncestor {
    constructor() {
        this.root = null;
    }

    findLca(node, v1, v2) {
        if (!node) return -1;
        if (node.value == v1 || node.value == v2) return node
        leftLca = this.findLca(node.left, v1, v2)
        rightLca = this.findLca(node.right, v1, v2)
        if (leftLca && rightLca) {
            return node;
        } else if (leftLca) {
            return leftLca
        } else if (rightLca) {
            return rightLca
        } else {
            return -1
        }
    }
}

const root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)
root.right.left = new Node(6)
root.right.right = new Node(7)

const tree = new LowesrCommonAncestor(root);
console.log(tree.findLca(4, 5))
console.log(tree.findLca(4, 6))
console.log(tree.findLca(3, 4))
console.log(tree.findLca(2, 4))
console.log(tree.findLca(12, 14))