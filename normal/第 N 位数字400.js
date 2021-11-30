//TAG 数学推导 二分查找
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
    let len = [];
    for (let i = 1; i < 10; i++) {
        len.push(i * 9 * Math.pow(10, i - 1));
    }
    let d = null;
    for (let i = 0; i < len.length; i++) {
        if (n - len[i] < 0) {
            d = i + 1;
            break;
        } else {
            n -= len[i];
        }
    }
    const index = n - 1;
    let start = Math.pow(10, d - 1);
    let num = start + Math.floor(index / d);
    let dI = index % d;
    const digit = Math.floor(num / Math.floor(Math.pow(10, d - digitIndex - 1))) % 10;

    return digit;
};

findNthDigit(3000);