/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
    let len = numbers.length;
    if (len < 2) {
        return numbers[0];
    }
    let l = 0, r = len - 1;
    while (r > l) {
        let mid = l + Math.floor((r - l) / 2);
        if (numbers[mid] > numbers[r]) {
            l = mid + 1;
        } else if (numbers[mid] < numbers[r]) {
            r = mid;
        } else {
            r--;
        }
    }

    return numbers[l]
};

console.log(minArray([2, 2, 2, 0, 1]))