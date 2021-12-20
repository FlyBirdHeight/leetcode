/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function (houses, heaters) {
    let hLen = houses.length;
    let htLen = heaters.length;
    heaters.sort((a, b) => a - b)
    let res = 0;
    let find = function (value, l, r) {
        if (heaters[l] > value) {
            return -1;
        }
        while (r > l) {
            let mid = Math.floor((r - l + 1) / 2) + l;
            if (heaters[mid] > value) r = mid - 1;
            else l = mid;
        }

        return l;
    }
    for (let i = 0; i < hLen; i++) {
        let value = houses[i]
        let fIndex = find(value, 0, htLen - 1);
        let j = fIndex + 1;
        let lD = fIndex < 0 ? Number.MAX_VALUE : (value - heaters[fIndex]);
        let rD = j >= htLen ? Number.MAX_VALUE : (heaters[j] - value);
        let cD = Math.min(lD, rD);
        res = Math.max(res, cD)
    }

    return res;
};

console.log(findRadius([1, 2, 3, 4], [1, 4]))