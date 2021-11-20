/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let L, R;
    let max = -1;
    if (height.length == 2) {
        return height[0] > height[1] ? height[1] : height[0]
    }
    L = 0;
    R = height.length - 1;
    while (R > L) {
        max = height[L] < height[R] ? Math.max(max, (R - L) * height[L++]) : Math.max(max, (R - L) * height[R--]);
    }
    return max;
};

console.log(maxArea([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))