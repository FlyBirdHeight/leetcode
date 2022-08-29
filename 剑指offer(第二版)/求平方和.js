/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if(x == 0) return 0;
    if(x == 1) return 1;
    let left = 0, right = x;
    while (right > left) {
        let mid = (left + right) >> 1;
        if ((Math.pow(mid, 2) < x && Math.pow(mid + 1, 2) > x) || (Math.pow(mid, 2) === x)) {
            return mid;
        } else if (Math.pow(mid, 2) < x) {
            left = mid + 1;
        } else if (Math.pow(mid, 2) > x) {
            right = mid - 1;
        }
    }

    return left;
};

console.log(mySqrt(36))