function findShortest(graphNodes, graphFrom, graphTo, colorIds, val) {

    if (colorIds.indexOf(val) < 0) {
        return -1
    }

    const colors = {};
    const adjacentList = {};
    const visited = {};
    const queue = [];

    for (let i = 0; i < graphNodes; i++) {
        const v1 = graphFrom[i];
        const v2 = graphTo[i];
        if (!v1 || !v2) continue;
        if (!(v1 in adjacentList)) {
            adjacentList[v1] = [];
        }
        adjacentList[v1].push(v2);
        if (!(v2 in adjacentList)) {
            adjacentList[v2] = [];
        }
        adjacentList[v2].push(v1);
        if (!(v1 in colors)) {
            colors[v1] = colorIds[v1 - 1];
        }
        if (!(v2 in colors)) {
            colors[v2] = colorIds[v2 - 1];
        }
    }

    let start_color = colors[val];
    queue.push({ node: val, weight: 0 });

    while (queue.length) {
        let currentElement = queue.shift();
        visited[currentElement.node] = true;
        for (let neighbor of adjacentList[currentElement.node]) {
            if (!visited[neighbor]) {
                if (colors[neighbor] === start_color) {
                    return currentElement.weight + 1
                } else {
                    visited[neighbor] = true;
                    queue.push({ node: neighbor, weight: currentElement.node + 1 })
                }
            }
        }
    }
    console.log(visited)
    return -1
}

// console.log(findShortest(4, [1, 1, 4], [2, 3, 2], [1, 2, 3, 4], 2));
console.log(findShortest(5, [1, 1, 2, 3], [2, 3, 4, 5], [1, 2, 3, 3, 2], 2));