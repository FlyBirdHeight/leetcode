let char = new Map();
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
    if (s.length != goal.length) {
        return false;
    }
    let len = s.length;
    let sA = new Array(26).fill(0);
    let gA = sA.slice(0);
    let eq = false;
    for (let i = 0; i < len; ++i) {
        let sI = s[i].charCodeAt() - 97;
        let gI = goal[i].charCodeAt() - 97
        sA[sI]++;
        gA[gI]++;
    }
    if (s == goal) {
        eq = true
    }
    for (let i = 0; i < 26; i++) {
        if (sA[i] == gA[i] && sA[i] > 1 && eq) {
            return true;
        }
        if (sA[i] != gA[i]) {
            return false;
        }
    }
    let diff = 0;
    for (let i = 0; i < len; ++i) {
        if (goal[i] != s[i]) {
            diff++;
        }
    }
    if (diff == 2) {
        return true;
    } else {
        return false;
    }
};

var buddyStrings = function (s, goal) {
    if (s.length != goal.length) return false;
    if (s == goal) return s.length > new Set(s).size;
    let a = "", b = "";
    for (let i = 0; i < s.length; i++) {
        if (goal[i] != s[i]) {
            a = s[i] + a;
            b = b + goal[i]
        }
    }
    return a.length == 2 && a == b;
}

console.log(buddyStrings('ab', 'ab'));