/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function (a, b) {
    let lenB = b.length;
    let str = a;
    let res = 1;
    while (str.length < lenB) {
        str += a;
        res++;
    }
    str += a;
    let index = str.indexOf(b);
    if (index == -1) {
        return -1;
    }
    return index + lenB > a.length * res ? res + 1 : res;
};

console.log(repeatedStringMatch("a", "a"))


