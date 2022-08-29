/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    let len = s.length;
    let res = [];
    let ans = new Array(4);
    const dfs = (idx, index) => {
        if (idx === 4) {
            if (index === len) {
                res.push(ans.slice().join("."));
            }
            return;
        }
        if (index === len) {
            return;
        }
        if (s.charAt(index) === '0') {
            ans[idx] = 0;
            dfs(idx + 1, index + 1);
        }
        let addr = 0;
        for (let i = index; i < len; i++) {
            addr = addr * 10 + (s.charAt(i) - '0');
            console.log(addr, 0xFF)
            if (addr > 0 && addr <= 0xFF) {
                ans[idx] = addr;
                dfs(idx + 1, i + 1);
            } else {
                break;
            }
        }
    }
    dfs(0, 0, []);

    return res;
};

restoreIpAddresses("25525511135")