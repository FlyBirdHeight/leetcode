/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function (ages) {
    let len = ages.length;
    if (len < 2) {
        return 0;
    }
    ages.sort((a, b) => a - b);
    let res = 0;
    function find(l, r, target) {
        while (r > l) {
            let mid = (r + l + 1) >> 1;
            if (target == ages[mid]) {
                return mid;
            }
            if (target > ages[mid]) l = mid;
            else r = mid - 1;
        }
        return r;
    }
    for (let i = 0; i < len; i++) {
        if (ages[i] < 15) {
            continue;
        }
        let sAge = ages[i] * 0.5 + 7;
        let idx = find(0, i, sAge);
        if (ages[idx] <= sAge || (idx == i && i != len - 1)) {
            idx++;
        }
        if (idx == i) {
            continue;
        }
        if (judge02(ages[i], ages[idx])) {
            continue;
        }
        if (judge03(ages[i], ages[idx])) {
            continue;
        }
        res += Math.abs(i - idx);
        if (idx < i) {
            for (let j = i + 1; j < len; j++) {
                if (ages[i] == ages[j]) {
                    res++;
                } else {
                    break;
                }
            }
        } else {
            for (let j = idx + 1; j < len; j++) {
                if (ages[idx] == ages[j]) {
                    res++;
                } else {
                    break;
                }
            }
        }
    }

    return res;
};
function judge02(x, y) {
    return y > x;
}
function judge03(x, y) {
    return x < 100 && y > 100;
}

console.log(numFriendRequests([73, 106, 39, 6, 26, 15, 30, 100, 71, 35, 46, 112, 6, 60, 110]));

var numFriendRequests02 = function(ages) {
    const n = ages.length;
    ages.sort((a, b) => a - b);
    let left = 0, right = 0, ans = 0;
    for (const age of ages) {
        if (age < 15) {
            continue;
        }
        while (ages[left] <= 0.5 * age + 7) {
            ++left;
        }
        while (right + 1 < n && ages[right + 1] <= age) {
            ++right;
        }
        ans += right - left;
    }
    return ans;
};