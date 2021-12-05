/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let rm = new Map();
    for (let i = 0; i < 26; i++) {
        rm.set(String.fromCharCode(i + 97), 0);
    }
    for (let i = 0; i < ransomNote.length; i++) {
        let num = rm.get(ransomNote[i]);
        num += 1;
        rm.set(ransomNote[i], num)
    }
    for (let i = 0; i < magazine.length; i++) {
        let num = rm.get(magazine[i]);
        if (num == 0) {
            continue
        }
        num -= 1;
        rm.set(magazine[i], num)
    }
    for (let [key, value] of rm) {
        if (value != 0) {
            return false;
        }
    }
    return true;
};

console.log(canConstruct("aa", "aab"))