//TAG 拓扑排序、图、dfs
/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
var loudAndRich = function(richer, quiet) {
    const n = quiet.length;
    const g = new Array(n).fill(0);
    for (let i = 0; i < n; ++i) {
        g[i] = [];
    }
    const inDeg = new Array(n).fill(0);
    for (const r of richer) {
        g[r[0]].push(r[1]);
        ++inDeg[r[1]];
    }
    console.log(g)
    const ans = new Array(n).fill(0);
    for (let i = 0; i < n; ++i) {
        ans[i] = i;
    }
    const q = [];
    for (let i = 0; i < n; ++i) {
        if (inDeg[i] === 0) {
            q.push(i);
        }
    }
    while (q.length) {
        const x = q.shift();
        for (const y of g[x]) {
            if (quiet[ans[x]] < quiet[ans[y]]) {
                ans[y] = ans[x]; // 更新 x 的邻居的答案
            }
            if (--inDeg[y] === 0) {
                q.push(y);
            }
        }
    }
    return ans;
};

console.log(loudAndRich([[1,0],[2,1],[3,1],[3,7],[4,3],[5,3],[6,3]], [3,2,5,4,6,1,7,0]))