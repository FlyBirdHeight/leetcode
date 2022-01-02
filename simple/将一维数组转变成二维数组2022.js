/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    let len = original.length;
    if(len != m * n){
        return [];
    }
    let res = new Array(m);
    let n = 0;
    for(let i = 0; i < m; i++){
        res[i] = [];
        for(let j = 0; j < n; j++){
            res[i].push(original[n]);
            n++;
        }
    }

    return res;
};