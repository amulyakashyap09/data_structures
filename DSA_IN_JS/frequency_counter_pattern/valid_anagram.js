/**
 * Valid anagram checks if two strings have same character with same number of frequency
 * complexity of solution given below is O(n)
 */


function validAnagram(a1, a2) {
    if (a1.length !== a2.length || a1.length === 0 || a2.length === 0) {
        return false;
    }

    const f1 = {};
    const f2 = {};

    for (let i of a1) {
        f1[i] = (f1[i] || 0) + 1;
    }

    for (let j of a2) {
        f2[j] = (f2[j] || 0) + 1;
    }

    for (let key in f1) {
        if (!(key in f2)){
            return false;
        }
        if (f1[key] !== f2[key]){
            return false;
        }
    }
    return true;
}

console.log(validAnagram("", ""));