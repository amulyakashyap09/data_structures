/**
 * Count Frequency of letters in array one should be equal to sq(frequency) in array two
 * [1, 2, 1] == [4, 1, 1] : true 
 * [1, 2, 3] == [1, 4, 9] : true
 * [1, 2, 3, 3] == [1, 4, 9] : false | as 3 occured twice but 9 didn't
 * [2, 2, 3, 3] == [4, 9] : false | as 2 & 3 occured twice but 4 & 9 didn't
 * complexity of solution given below is O(n)
 */

 function sameArray(a1, a2) {

    if (a1.length !== a2.length) {
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
        if (!(key**2 in f2)){
            return false;
        }
        if (f1[key] !== f2[key**2]){
            return false;
        }
    }

    return true;

}

console.log(sameArray([1, 2, 3, 4], [4, 9, 1]))