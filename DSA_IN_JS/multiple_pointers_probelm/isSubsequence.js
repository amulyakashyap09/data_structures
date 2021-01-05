const isSubsequence = (subStr, str) => {
    let i = 0, j = 0;
    if (!str) return false;
    while (j < str.length) {
        if (subStr[j] === str[j]) i++;
        if (i === subStr.length) return true;
        j++;
    }
    return false;
}

console.log(isSubsequence("hello", "helloworld"));