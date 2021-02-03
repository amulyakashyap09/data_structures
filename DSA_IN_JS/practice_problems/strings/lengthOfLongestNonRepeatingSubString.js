/**
 * Problem: Given a string str, find the length of the longest substring without repeating characters. 

For “ABDEFGABEF”, the longest substring are “BDEFGA” and “DEFGAB”, with length 6.
For “BBBB” the longest substring is “B”, with length 1.
For “GEEKSFORGEEKS”, there are two longest substrings shown in the below diagrams, with length 7
 * 
 * 
 * 
 * @param {*} string 
 * 
 * Approach : This solution uses extra space to store the last indexes of already visited characters. 
 * The idea is to scan the string from left to right, keep track of the maximum length Non-Repeating 
 * Character Substring seen so far in res. When we traverse the string, to know the length of current 
 * window we need two indexes. 
1) Ending index ( j ) : We consider current index as ending index. 
2) Starting index ( i ) : It is same as previous window if current character was not present in the previous window. To check if the current character was present in the previous window or not, we store last index of every character in an array lasIndex[]. If lastIndex[str[j]] + 1 is more than previous start, then we updated the start index i. Else we keep same i.  
 */


function main(string) {
    const NO_OF_CHARS = 256;
    const lastIndex = [];

    for (let x = 0; x < NO_OF_CHARS; x++) lastIndex[x] = -1;

    const str = string.split("")
    const n = str.length;
    let res = 0;
    let i = 0;
    for (let j = 0; j < n; j++) {
        i = Math.max(i, lastIndex[str[j].charCodeAt(0)] + 1);
        res = Math.max(res, j - i + 1);
        lastIndex[str[j].charCodeAt(0)] = j;
    }
    return res;
}

console.log(main("geeksforgeeks"));