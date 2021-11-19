/**
 * 树的节点
 * @param {string} str 
 * @param {number} left 
 * @param {number} right 
 * @param {number} res 
 */
function dfs(str, left, right, res) {
    if(left == 0 && right == 0){
        res.push(str);
        return;
    }

    if(left > right){
        return;
    }   

    if(left > 0){
        dfs(str + '(', left - 1, right, res);
    }
    if(right > 0){
        dfs(str + ')', left, right - 1, res);
    }
}

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let res = [];
    if (n == 1) {
        return ["()"]
    }
    dfs("", n, n, res);

    return res;
};

console.log(generateParenthesis(2));