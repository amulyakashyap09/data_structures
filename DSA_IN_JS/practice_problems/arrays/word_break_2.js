let mp = {};
let dict_t = new Set();

// Utility function for 
// appending new words 
// to already existing strings
function combine(prev, word) {

    // Loop to find the append string
    // which can be broken into
    for (i = 0; i < prev.length - 1; i++) {
        prev[i] += " " + word;
    }

    return prev;
}


function wordBreakUtil(s) {
    if (s in mp) return mp[s];
    let res = []

    // If the whole word is a dictionary
    // word then directly append into 
    // the result array for the string
    if (s in dict_t) res.push(s);

    // Loop to iterate over the substring
    for (i = 0; i < s.length; i++) {

        let word = s.substring(i);

        // If the substring is present into
        // the dictionary then recurse for
        // other substring of the string
        if (word in dict_t) {

            let rem = s.substring(0, i)
            let prev = combine(wordBreakUtil(rem), word);
            for (i of prev_res) res.push(i)
        }
    }

    // Store the subproblem into the map
    mp[s] = res;
    return res;
}

function solve(s, wordDict) {
    mp = {};
    dict_t.clear();
    for (i of wordDict) dict_t.add(i)
    return wordBreakUtil(s);
}

function main() {
    console.log(solve("catsanddog", ["cat", "cats", "and", "sand", "dog"]))
}

main();