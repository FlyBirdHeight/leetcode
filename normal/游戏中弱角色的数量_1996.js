/**
 * @param {number[][]} properties
 * @return {number}
 */
 var numberOfWeakCharacters = function (properties) {
    properties.sort((a, b) => {
        if (a[0] == b[0]) {
            return b[1] - a[1]
        } else {
            return a[0] - b[0]
        }
    })
    let res = 0, stack = [], len = properties.length;
    for (let i = 0; i < len; i++) {
        if (stack.length == 0) {
            stack.push(properties[i])
        } else {
            while (stack.length != 0) {
                let a = stack[stack.length - 1];
                if (a[1] < properties[i][1] && a[0] < properties[i][0]) {
                    res++;
                    stack.pop();
                } else {
                    break;
                }
            }
            stack.push(properties[i]);
        }
    }
    return res;
};