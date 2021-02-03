/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const groupAnagrams = function(strs) {

    const sortedMap = {};
    const outputMap = {};
    for (let word of strs) {
        let sorted = word.split("").sort().join("");
        if (!(sorted in sortedMap)) {
            sortedMap[sorted] = word;
            outputMap[sorted] = [word];
        } else {
            outputMap[sorted].push(word);
        }
    }
    return Object.values(outputMap)
}

function main() {
    return groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
}

console.log(main());