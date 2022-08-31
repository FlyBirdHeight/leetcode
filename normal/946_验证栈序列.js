/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    let arr = [];
    while (pushed.length) {
        if (pushed[0] != popped[0]) {
            arr.push(pushed[0]);
            pushed.shift();
        } else {
            popped.shift();
            pushed.shift();
            while (arr.length) {
                if (arr[arr.length - 1] === popped[0]) {
                    arr.pop();
                    popped.shift();
                } else {
                    break
                }
            }
        }
    }
    if (arr.length === 0) return true;
    return arr.reverse().toString() === popped.toString()
};

console.log(validateStackSequences([2, 1, 0], [1, 2, 0]))