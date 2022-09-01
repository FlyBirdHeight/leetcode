/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
    const n = prices.length;
    const ans = new Array(n).fill(0);
    const stack = [];
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && stack[stack.length - 1] > prices[i]) {
            stack.pop();
        }
        ans[i] = stack.length === 0 ? prices[i] : prices[i] - stack[stack.length - 1];
        stack.push(prices[i]);
    }
    return ans;
};

console.log(finalPrices([8, 7, 4, 2, 8, 1, 7, 7, 10, 1]))