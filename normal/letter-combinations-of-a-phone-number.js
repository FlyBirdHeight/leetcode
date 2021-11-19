let nM = new Map();
nM.set("2", ["a", "b", "c"])
nM.set("3", ["d", "e", "f"])
nM.set("4", ["g", "h", "i"])
nM.set("5", ["j", "k", "l"])
nM.set("6", ["m", "n", "o"])
nM.set("7", ["p", "q", "r", "s"])
nM.set("8", ["t", "u", "v"])
nM.set("9", ["w", "x", "y", "z"])
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (!digits || digits == '1') {
        return [];
    }
    if (digits.length == 1) {
        return nM.get(digits);
    }
    let nD = [];
    let res = [];
    for (let value of digits) {
        nD.push(nM.get(value));
    }
    for (let i = nD.length - 1; i >= 0; i--) {
        let t = [];
        for (let value of nD[i]) {
            t = t.concat(getC(value, res));
        }
        res = t;
    }

    return res;
};

var getC = function (char, arr) {
    let res = [];
    if(arr.length == 0){
        return [char];
    }
    for (let value of arr) {
        res.push(char + value);
    }

    return res;
}

console.log(letterCombinations("2345"));