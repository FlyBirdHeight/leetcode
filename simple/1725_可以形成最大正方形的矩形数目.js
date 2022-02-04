/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function (rectangles) {
    let res = 0, max = -Infinity;
    for (let i = 0; i < rectangles.length; i++) {
        let [a, b] = rectangles[i];
        let w = Math.min(a, b);
        max < w ? (max = w, res = 1) : max == w ? res = res + 1 : max = max;
    }

    return res;
};