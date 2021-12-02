// TAG 并查集 dfs bfs 


/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
    let fa = new Map();
    let len = values.length;
    let res = [];
    function add(equations, values) {
        if (fa.has(equations[0])) {
            let mul = fa.get(equations[0]);
            fa.set(equations[1], {
                pre: mul.pre,
                mul: mul.mul * values
            })
        } else {
            if (!fa.has(equations[1])) {
                fa.set(equations[0], {
                    pre: null,
                    mul: 1
                })
            }
            fa.set(equations[1], {
                pre: equations[0],
                mul: values
            });
        }
    }
    //构建并查集
    for (let i = 0; i < len; i++) {
        if (values[i] > 1) {
            add([equations[i][1], equations[i][0]], values[i])
            console.log(fa);
        } else {
            add([equations[i][0], equations[i][1]], values[i])
        }
    }
    console.log(fa)
    for (let i = 0; i < queries.length; ++i) {
        if (fa.has(queries[i][0]) && fa.has(queries[i][1])) {
            let mul1 = fa.get(queries[i][0]).mul;
            let mul2 = fa.get(queries[i][1]).mul;
            let num = 1 / mul1 * 1 / mul2;
            res.push(num)
        } else {
            res.push(-1.0)
        }
    }
    console.log(res)
};

console.log(calcEquation([["a", "b"], ["b", "c"]], [2.0, 3.0], [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]]));