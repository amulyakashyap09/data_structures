function main(str = "You have to rise and shine even in the darkness", k = 19) {
    let idx = str.lastIndexOf(" ", k);
    const smartSubStr = str.substring(0, idx);
    return smartSubStr;
}
main();