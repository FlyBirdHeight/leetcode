/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    let stack = [];
    while (popped.length != 0) {
        let p = popped[0];
        let f = pushed.indexOf(p);
        if (f == -1) {
            let s = stack.pop();
            if (s != p) {
                return false;
            }
            popped.shift();
        } else {
            for (let i = 0; i <= f; i++) {
                let v = pushed.shift();
                stack.push(v);
            }
        }
    }

    return true;
};

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]))