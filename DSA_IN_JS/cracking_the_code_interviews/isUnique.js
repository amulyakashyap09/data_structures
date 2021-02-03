module.exports.isUnique = (str) => {
    const strArr = str.split("");
    const exists = {};
    for (const item of strArr) {
        if (exists[item]) return false;
        exists[item] = true;
    }
    return true;
}