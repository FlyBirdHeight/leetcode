const map = new Map();
map.set("zero", {
    n: 0,
    p: [25, 4, 17, 14]
});
map.set("one", {
    n: 1,
    p: [14, 13, 4]
});
map.set("two", {
    n: 2,
    p: [19, 22, 14]
});
map.set("three", {
    n: 3,
    p: [19, 7, 17, 4, 4]
});
map.set("four", {
    n: 4,
    p: [5, 14, 20, 17]
});
map.set("five", {
    n: 5,
    p: [5, 8, 21, 4]
});
map.set("six", {
    n: 6,
    p: [18, 8, 23]
});
map.set("seven", {
    n: 7,
    p: [18, 4, 21, 4, 13]
});
map.set("eight", {
    n: 8,
    p: [4, 8, 6, 7, 19]
});
map.set("nine", {
    n: 9,
    p: [13, 8, 13, 4]
});
/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function (s) {
    const c = new Map();
    for (const ch of s) {
        c.set(ch, (c.get(ch) || 0) + 1);
    }

    const cnt = new Array(10).fill(0);
    cnt[0] = c.get('z') || 0;
    cnt[2] = c.get('w') || 0;
    cnt[4] = c.get('u') || 0;
    cnt[6] = c.get('x') || 0;
    cnt[8] = c.get('g') || 0;

    cnt[3] = (c.get('h') || 0) - cnt[8];
    cnt[5] = (c.get('f') || 0) - cnt[4];
    cnt[7] = (c.get('s') || 0) - cnt[6];

    cnt[1] = (c.get('o') || 0) - cnt[0] - cnt[2] - cnt[4];

    cnt[9] = (c.get('i') || 0) - cnt[5] - cnt[6] - cnt[8];

    const ans = [];
    for (let i = 0; i < 10; ++i) {
        for (let j = 0; j < cnt[i]; ++j) {
            ans.push(String.fromCharCode(i + '0'.charCodeAt()));
        }
    }
    return ans.join('');
};