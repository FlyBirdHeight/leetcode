//TAG 单调栈 单调递减栈 单调递减栈就是从栈底到栈顶数据是从小到大
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let stack = [];
    let len = heights.length;
    let res = -Infinity
    heights = [0, ...heights ,0]
    for (let i = 0; i < len; ++i) {
        while (heights[stack[stack.length - 1]] > heights[i]) {
            let top = stack.pop();
            let h = heights[top];

            res = Math.max(res, (i - stack[stack.length - 1] -1) * h);
        }
        stack.push(i);
    }

    return res;
};