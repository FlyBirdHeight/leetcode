//TAG 快速幂
/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
const MOD = 1337
var superPow = function (a, b) {
    dfs = function (idx) {
        if (idx == -1)
            return 1
        return quickPow(dfs(idx - 1), 10) * quickPow(a, b[idx]) % MOD
    }

    quickPow = function (x, y) {
        let ans = 1
        x %= MOD
        while (y != 0) {
            if ((y & 1) != 0)
                ans = ans * x % MOD
            x = x * x % MOD
            y >>= 1
        }
        return ans
    }

    a %= MOD
    return dfs(b.length - 1)
};

console.log(superPow(2, [1, 5, 2, 0]))