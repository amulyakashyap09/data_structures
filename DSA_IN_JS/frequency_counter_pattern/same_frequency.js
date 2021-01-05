function isFrequencySame(n1, n2) {

    const m1 = {}, m2 = {}
    while (n1 > 0) {
        let digit = parseInt(n1 % 10);
        n1 = parseInt(n1 / 10);
        m1[digit] = (m1[digit] || 0) + 1;
    }

    while (n2 > 0) {
        let digit = parseInt(n2 % 10);
        n2 = parseInt(n2 / 10);
        m2[digit] = (m2[digit] || 0) + 1;
    }

    for (let key in m1) {
        if (!(key in m2) || m1[key] != m2[key]) {
            return false;
        }
    }
    return true;
}

console.log(isFrequencySame(181, 811));