const solve = function(intervals) {
    let start = [];
    let end = [];
    intervals.forEach(x => {
        start.push(x[0]);
        end.push(x[1]);
    });

    start.sort((x, y) => x - y);
    end.sort((x, y) => x - y);

    let i = 0,
        j = 0;

    let rooms = 0;

    while (i < start.length) {

        if (start[i] >= end[j]) {
            rooms--;
            j++;
        }

        rooms++;
        i++;
    }
    return rooms;
}

console.log(solve([
    [1, 18],
    [18, 23],
    [15, 29],
    [4, 15],
    [2, 11],
    [5, 13]
]));