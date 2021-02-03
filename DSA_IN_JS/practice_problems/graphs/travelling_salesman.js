/**
 *  0   10  15  20
 *  10  0   35  25
 *  15  35  0   30
 *  20  25  30  0
 */

const INT_MAX = Number.POSITIVE_INFINITY;
const n = 4;
const dist = [
    [0, 20, 42, 25],
    [20, 0, 30, 34],
    [42, 30, 0, 10],
    [25, 34, 10, 0]
];
const VISITED_ALL = (1 << n) - 1;
const dp = [];

function tsp(mask, currentCity) {

    if (mask == VISITED_ALL) {
        return dist[currentCity][0];
    }
    // handling overlapping optimal case
    if (dp[mask][currentCity] != -1) {
        return dp[mask][currentCity];
    }

    //Now from current node, we will try to go to every other node and take the min ans
    let ans = INT_MAX;

    //Visit all the unvisited cities and take the best route
    for (let city = 0; city < n; city++) {

        if ((mask & (1 << city)) == 0) {

            let newAns = dist[currentCity][city] + tsp(mask | (1 << city), city);
            ans = Math.min(ans, newAns);
        }

    }

    return dp[mask][currentCity] = ans;
}


function main() {
    for (let i = 0; i < (1 << n); i++) {
        for (let j = 0; j < n; j++) {
            if (!Array.isArray(dp[i])) {
                dp[i] = [];
            }
            dp[i][j] = -1;
        }
    }
    console.log("Minimum weight / cost is ", tsp(1, 0));
}
main();