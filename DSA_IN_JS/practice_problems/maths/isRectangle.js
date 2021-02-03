module.exports = {
    //param A : integer
    //param B : integer
    //param C : integer
    //param D : integer
    //return an integer
    solve: function(A, B, C, D) {

        const map = {};

        if (map[A]) {
            map[A] += 1
        } else {
            map[A] = 1
        }

        if (map[B]) {
            map[B] += 1
        } else {
            map[B] = 1
        }

        if (map[C]) {
            map[C] += 1
        } else {
            map[C] = 1
        }

        if (map[D]) {
            map[D] += 1
        } else {
            map[D] = 1
        }
        const keys = Object.keys(map);
        if (keys.length === 2) {
            if (map[keys[0]] === map[keys[1]]) {
                return 1
            } else {
                return 0
            }
        } else {
            return 0
        }

    }
};