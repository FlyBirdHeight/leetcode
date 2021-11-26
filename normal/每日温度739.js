//TAG 单调栈 单调递减栈 单调递减栈就是从栈底到栈顶数据是从小到大
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let res = new Array(temperatures.length).fill(0);
    temperatures = [...temperatures];
    let stack = [];
    for (let i = 0; i < temperatures.length; i++) {
        if (stack.length == 0 || temperatures[stack[stack.length - 1]] > temperatures[i]) {
            stack.push(i);
        } else {
            while (temperatures[stack[stack.length - 1]] < temperatures[i]) {
                let top = stack.pop();
                res[top] = i - top;
            }
            stack.push(i)
        }
    }
    
    return res;
};

console.log(dailyTemperatures([30,40,60]))