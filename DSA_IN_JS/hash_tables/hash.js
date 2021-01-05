class Hash {
    constructor(size = 17) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WIERD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WIERD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    get(key) {
        let index = this._hash(key);
        let arr = this.keyMap[index];

        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[index][i][0] === key) {
                return this.keyMap[i];
            }
        }
    }
}