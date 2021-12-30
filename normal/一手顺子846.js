/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
    let len = hand.length;
    if (len % groupSize != 0) {
        return false;
    }
    hand.sort((a, b) => a - b);
    let map = new Map();
    for (let i = 0; i < len; i++) {
        if (map.has(hand[i])) {
            let n = map.get(hand[i]);
            n++;
            map.set(hand[i], n)
        } else {
            map.set(hand[i], 1);
        }
    }
    for (let [key, value] of map) {
        if (value == 0) {
            continue;
        }
        while (value != 0) {
            for (let i = 1; i < groupSize; i++) {
                if (map.has(key + i) && map.get(key + i) != 0) {
                    let n = map.get(key + i);
                    n--;
                    map.set(key + i, n);
                } else {
                    return false;
                }
            }
            value--;
        }
        map.set(key, value);
    }

    return true;
};

console.log(isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3))