/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} time
 * @param {number} change
 * @return {number}
 */
var secondMinimum = function (n, edges, time, change) {
    const g = new Array(n + 1).fill(0).map(() => new Array());
    for (let value of edges) {
        g[value[0]].push(value[1]);
        g[value[1]].push(value[0]);
    }
    let path = new Array(n + 1).fill(0).map(() => new Array(2).fill(Number.MAX_VALUE));
    path[1][0] = 0;
    let queue = [];
    queue.push([1, 0]);
    while (path[n][1] === Number.MAX_VALUE) {
        let [cur, length] = queue.shift();
        for (let next of g[cur]) {
            if (length + 1 < path[next][0]) {
                path[next][0] = length + 1;
                queue.push([next, length + 1])
            } else if (length + 1 > path[next][0] && length + 1 < path[next][1]) {
                path[next][1] = length + 1;
                queue.push([next, length + 1]);
            }
        }
    }
    let res = 0;
    for(let i = 0; i < path[n][1]; i++){
        if(res % (2 * change) >= change){
            res += 2 * change - res % (2 * change)
        }
        res += time;
    }

    return res;
};

console.log(secondMinimum(5, [[1, 2], [1, 3], [1, 4], [3, 4], [4, 5]], 6, 5))