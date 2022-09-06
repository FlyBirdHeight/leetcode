/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function (s, t) {
    if (s === t) {
        return false;
    }
    if (s.length > t.length && s.length - t.length > 1) {
        return false;
    } else if (t.length > s.length && t.length - s.length > 1) {
        return false;
    }
    let diff = 0;
    let sI = 0, tI = 0;
    if (s.length === t.length) {
        while (sI < s.length) {
            if (s[sI] != t[tI]) {
                diff++;
            }
            if (diff > 1) {
                return false;
            }
            sI++;
            tI++;
        }

        return true;
    } else {
        while (sI < s.length && tI < t.length) {
            if (s[sI] !== t[tI]) {
                diff++;
                if (s.length > t.length) {
                    if (s[sI + 1] == t[tI]) {
                        sI++;
                        continue;
                    } else {
                        return false;
                    }
                } else {
                    if (tI + 1 < t.length && s[sI] !== t[tI + 1]) {
                        return false;
                    } else {
                        tI++;
                        continue;
                    }
                }
            }
            if(diff > 1) {
                return false
            }
            sI++;
            tI++;
        }
        return true;
    }
};