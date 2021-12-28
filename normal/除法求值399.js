// var BCSet = function () {
//     this.set = new Array(26).fill(0);
//     this.map = new Map();
//     for (let i = 0; i < 26; i++) {
//         this.set[i] = i;
//         this.map.set(i, 1);
//     }
// }

// BCSet.prototype.merge = function (i, j) {
//     let find01 = this.find(i);
//     let find02 = this.find(j);
//     this.set[find01] = find02;
// }

// BCSet.prototype.find = function (x) {
//     return x == this.set[x] ? x : (this.set[x] = this.find(this.set[x]))
// }


// /**
//  * @param {string[][]} equations
//  * @param {number[]} values
//  * @param {string[][]} queries
//  * @return {number[]}
//  */
// var calcEquation = function (equations, values, queries) {
//     if (values.length == 0) {
//         return [];
//     }
//     let bcSet = new BCSet();
//     for (let i = 0; i < equations.length; i++) {
//         let strList = equations[i];
//         let bS = strList[0];
//         let sS = strList[1];
//         let v = values[i];
//         if(bS.length != 0){

//         }
//     }
// };

// console.log(calcEquation([["a", "b"], ["b", "c"]], [2.0, 3.0], [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]]));

var calcEquation = function (equations, values, queries) {
    let nvars = 0;
    const variables = new Map();

    const n = equations.length;
    for (let i = 0; i < n; i++) {
        if (!variables.has(equations[i][0])) {
            variables.set(equations[i][0], nvars++);
        }
        if (!variables.has(equations[i][1])) {
            variables.set(equations[i][1], nvars++);
        }
    }
    const edges = new Array(nvars).fill(0);
    for (let i = 0; i < nvars; i++) {
        edges[i] = [];
    }
    for (let i = 0; i < n; i++) {
        const va = variables.get(equations[i][0]), vb = variables.get(equations[i][1]);
        edges[va].push([vb, values[i]]);
        edges[vb].push([va, 1.0 / values[i]]);
    }
    const queriesCount = queries.length;
    const ret = [];
    for (let i = 0; i < queriesCount; i++) {
        const query = queries[i];
        let result = -1.0;
        if (variables.has(query[0]) && variables.has(query[1])) {
            const ia = variables.get(query[0]), ib = variables.get(query[1]);
            if (ia === ib) {
                result = 1.0;
            } else {
                const points = [];
                points.push(ia);
                const ratios = new Array(nvars).fill(-1.0);
                ratios[ia] = 1.0;
                while (points.length && ratios[ib] < 0) {
                    const x = points.pop();
                    for (const [y, val] of edges[x]) {
                        if (ratios[y] < 0) {
                            ratios[y] = ratios[x] * val;
                            points.push(y);
                        }
                    }
                }
                result = ratios[ib];
            }
        }
        ret[i] = result;
    }
    return ret;
};

console.log(calcEquation([["a", "b"], ["b", "c"], ["bc", "cd"]], [1.5, 2.5, 5.0], [["a", "c"], ["c", "b"], ["bc", "cd"], ["cd", "bc"]]));