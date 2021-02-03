module.exports = {
    //param A : string
    //param B : array of strings
    //return a array of integers
    solve: function(A, B) {
        let goodWords = A.split("_");
        let C = B.join("|").split("|");
        let t = new Trie();
        goodWords.forEach(function(w) {
            t.add(w);
        })
        let D = B.map(function(a) {
            let ai = 0;

            a.split("_").forEach(function(g) {
                if (t.search(g))
                    ai++;

            });
            return { review: a, point: ai, index: B.indexOf(a) }
        });
        D.sort(function(a, b) {
            if (b.point > a.point) return 1;
            else if (b.point < a.point) return -1;
            else {
                if (b.index > a.index) return -1;
                else return 1;
            }

        })
        let retIndex = D.map(function(r) { return r.index; })
        return retIndex;
    }
};

function Trie() {
    this.node = {}

}
Trie.prototype.add = function(word) {
    let current = this.node;
    for (let i = 0; i < word.length; i++) {
        if (!(word[i] in current))
            current[word[i]] = {};
        current = current[word[i]];
    }
    current.$ = 1;
    return;
}
Trie.prototype.search = function(word) {
    let current = this.node;
    for (let i = 0; i < word.length; i++) {
        if (!(word[i] in current))
            return false;
        current = current[word[i]];
    }
    return current.$ == 1;
}