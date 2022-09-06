/**
 * 本题通过计算每一个字符的贡献值，即出现的位置进行记录，然后通过(b - a) * (c - b)
 * @param {*} s 
 */
var uniqueLetterString = function (s) {
    const index = new Map();
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (!index.has(c)) {
            index.set(c, []);
            index.get(c).push(-1);
        }
        index.get(c).push(i);
    }
    let res = 0;
    for (const [_, arr] of index.entries()) {
        arr.push(s.length);
        for (let i = 1; i < arr.length - 1; i++) {
            res += (arr[i] - arr[i - 1]) * (arr[i + 1] - arr[i]);
        }
    }
    return res;
}

uniqueLetterString('ABC')