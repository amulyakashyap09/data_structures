function solve(good, reviews) {
    let dic = {};
    let words = good.split('_');
    for (let i = 0; i < words.length; i++) dic[words[i]] = true;

    function score(ws) {
        let res = 0
        for (let i = 0; i < ws.length; i++) {
            if (dic[ws[i]]) res++
        }
        return res
    }

    let tmp = reviews.map(function(s, i) {
        let ws = s.split('_')
        return {
            i: i,
            score: score(ws)
        }
    })
    console.log(tmp);
    tmp.sort(function(r1, r2) {
        if (r1.score === r2.score) return r1.i - r2.i
        return r2.score - r1.score
    })
    return tmp.map(function(r) { return r.i });
}

function main() {
    let A = "cool_ice_wifi";
    let B = ["water_is_cool", "cold_ice_drink", "cool_wifi_speed"];
    console.log(solve(A, B));
}

main();