/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
 var uncommonFromSentences = function (s1, s2) {
    s1 = s1.split(" ");
    s2 = s2.split(" ");
    let res = [],
        map1 = new Map();
    for (let i = 0; i < s1.length; i++) {
        if (map1.has(s1[i])) {
            map1.set(s1[i], map1.get(s1[i]) + 1);
            continue;
        }
        map1.set(s1[i], 1);
    }
    for (let i = 0; i < s2.length; i++) {
        if(map1.has(s2[i])){
            map1.set(s2[i], map1.get(s2[i]) + 1);
            continue;
        }
        map1.set(s2[i], 1);
    }
    for(let [key, v] of map1.entries()){
        if(v > 1) continue;
        res.push(key)
    }

    return res;
};