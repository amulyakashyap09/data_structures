/**  1. find the largest number of that string [123456] k=3
 **/

class Max {

    constructor() {
        this.max = null;
    }

    swap(str, i, j) {
        let s = str.split("");
        [s[i], s[j]] = [s[j], s[i]];
        str = s.join("");
        return str;
    }

    find(str, k) {
        if (k === 0) {
            return this.max;
        } else {
            if (parseInt(str) > parseInt(this.max)) {
                this.max = str;
            };
            for (let i = 0; i < str.length - 1; i++) {
                for (let j = i + 1; j < str.length; j++) {
                    if (parseInt(str[j]) > parseInt(str[i])) {
                        let swapped = this.swap(str, i, j);
                        this.find(swapped, k - 1);
                    }
                }
            }
        }
    }

    main(str, k) {
        this.max = str;
        this.find(str, k);
        return this.max;
    }
}

const max = new Max();
console.log(max.main("193", 2));
console.log("end!!!");