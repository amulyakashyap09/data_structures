class Node {
    constructor(node) {
        this.left = null;
        this.right = null;
        this.value = node;
    }
}

class BinaryTree {
    constructor(root) {
        this.root = root;
    }

    iterativeApproach() {
        if (!this.root) return 0;
        const stack = [this.root];
        let h = 0;
        while (true) {
            let count = stack.length;
            if (count == 0) {
                return h;
            } else {
                h++;
            }

            while (count > 0) {
                let node = stack.pop();
                if (node && node.left) {
                    stack.push(node.left)
                }
                if (node && node.right) {
                    stack.push(node.right)
                }
                count--;
            }
        }
    }


    recursive(node, h) {
        if (!node) return 0;
        if (node.left == null && node.right == null) {
            return h;
        }
        if (node.left && node.right) {
            return Math.max(this.recursive(node.left, h += 1), this.recursive(node.right, h += 1));
        } else if (node.right) {
            return this.recursive(node.right, h += 1);
        } else {
            return this.recursive(node.left, h += 1);
        }
    }
    findHeight() {
        if (!this.root) return 0;
        return 1 + this.recursive(this.root, 0);
    }
}

const root = new Node(10);
root.left = new Node(9)
root.left.left = new Node(8)
root.left.left.left = new Node(7)
root.left.left.left.left = new Node(6)
root.left.left.left.left.left = new Node(4)
const tree = new BinaryTree(root);
console.log(tree.findHeight());
console.log(tree.iterativeApproach())