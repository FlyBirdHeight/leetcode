/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
    let map = new Map();
    let res = [];
    for (let i = 0; i <= s.length - 10; i++) {
        let str = s.substring(i, i + 10);
        if (map.has(str)) {
            let d = map.get(str);
            d++;
            if (d == 2) {
                res.push(str)
            }
            map.set(str, d)
        } else {
            map.set(str, 1);
        }
    }

    return res;
};