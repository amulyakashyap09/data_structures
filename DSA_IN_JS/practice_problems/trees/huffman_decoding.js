class Node {
    constructor(freq, data) {
        this.freq = freq
        this.data = data
        this.left = None
        this.right = None
    }
}

class BinaryTree {
    constructor(root) {
        this.root = root;
    }

    huffmanDecoding(str) {

        let result = [];
        let tmp = this.root;

        for (var i = 0; i < str.length; i++) {
            let currChar = str[i];

            if (currChar === "0") {
                tmp = tmp.left;
            } else {
                tmp = tmp.right;
            }

            // leaf node found | no nodes below this level
            if (!tmp.left && !tmp.right) {
                result.push(currChar);
                tmp = this.root;
            }
        }

        return result.join("");
    }
}