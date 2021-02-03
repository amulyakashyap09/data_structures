/**
 * Longest Common Substring | DP-29
 * Given two strings ‘X’ and ‘Y’, find the length of the longest common substring.
 *
 * Input : X = “GeeksforGeeks”, y = “GeeksQuiz”
Output : 5
The longest common substring is “Geeks” and is of length 5.

Input : X = “abcdxyz”, y = “xyzabcd”
Output : 4
The longest common substring is “abcd” and is of length 4.

Input : X = “zxabcdezy”, y = “yzabcdezx”
Output : 6
The longest common substring is “abcdez” and is of length 6.
 */

function LCSubStr(str1, str2, s1, s2) {
    let LCSuffixes = [];
    for (let i = 0; i < s1 + 1; i++) {
        LCSuffixes[i] = [];
        for (let j = 0; j < s2 + 1; j++) {
            LCSuffixes[i][j] = 0;
        }
    }
    let result = 0;

    for (let i = 0; i < s1 + 1; i++) {
        for (let j = 0; j < s2 + 1; j++) {
            if (i == 0 || j == 0) {
                LCSuffixes[i][j] = 0;
            } else if (str1[i - 1] == str2[j - 1]) {
                LCSuffixes[i][j] = LCSuffixes[i - 1][j - 1] + 1
                result = Math.max(result, LCSuffixes[i][j])
            } else {
                LCSuffixes[i][j] = 0;
            }
        }
    }
    return result;
}

function main() {
    const X = 'OldSite:GeeksforGeeks.org';
    const Y = 'NewSite:GeeksQuiz.com';
    return LCSubStr(X, Y, X.length, Y.length)
}

console.log(main());