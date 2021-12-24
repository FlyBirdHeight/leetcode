/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    let res = 0;
    let q = [n];
    let v = new Set();
    while (q.length != 0) {
        let len = q.length;
        res++;
        for (let i = 0; i < len; i++) {
            let data = q.shift();
            for (let j = 1; j * j <= data; j++) {
                let resData = data - Math.pow(j, 2);
                if (resData == 0) {
                    return res;
                }
                if (v.has(resData)) {
                    continue;
                }
                v.add(resData);
                q.push(resData);
            }
        }
    }

    return res;
};

console.log(numSquares(13));