function Node(data) {
    this.data = data;
    this.isEndOfWord = false;
}

function Trie() {
    this.root = new Node();
}

Trie.prototype.insert = function(word) {

    let node = this.root;

    for (char of word) {
        if (node[char] == null) node[char] = {};
        node = node[char];
    }

    node.isEndOfWord = true;
}

Trie.prototype.search = function(word) {

    let node = this.root;

    for (char of word) {
        node = node[char];
        if (node === null) return null;
    }

    return node !== null && node.isEndOfWord === true;

}

t = new Trie();

console.log(t.insert("test"));
console.log(t.insert("toaster"));
console.log(t.insert("taco"));
console.log(t.insert("etaco"));
console.log(t.insert("etacoe"));
console.log(t.insert("setacoe"));
console.log(t.insert("setacoes"));
console.log(JSON.stringify(t));
console.log(t.search("test"));
console.log(t.search("toast"));
console.log(t.search("taco"));
console.log(t.search("setacoes"));
console.log(t.search("etacoe"));

/***
 * TREE WILL LOOK LIKE
 {
  "root": {
    "isEndOfWord": false,
    "t": {
      "e": {
        "s": {
          "t": {
            "isEndOfWord": true
          }
        }
      },
      "o": {
        "a": {
          "s": {
            "t": {
              "e": {
                "r": {
                  "isEndOfWord": true
                }
              }
            }
          }
        }
      },
      "a": {
        "c": {
          "o": {
            "isEndOfWord": true
          }
        }
      }
    }
  }
}
 */