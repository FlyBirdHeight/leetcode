/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
    let n = edges.length;
    let arr = new Array(n + 1).fill(0).map((v, i) => { return i });
    let ans = -Infinity;
    const union = (index1, index2, idx) => {
        let f1 = find(index1);
        let f2 = find(index2);
        if (f2 === index1 || f2 === f1) {
            ans = Math.max(ans, idx)
        }
        arr[find(index2)] = find(index1);
    }
    const find = (index) => {
        if (arr[index] !== index) {
            arr[index] = find(arr[index])
        }

        return arr[index];
    }
    for (let i = 0; i < edges.length; i++) {
        union(edges[i][0], edges[i][1], i)
    }

    return edges[ans]
};

findRedundantConnection([[1, 2], [2, 3], [1, 5], [3, 4], [1, 4]])