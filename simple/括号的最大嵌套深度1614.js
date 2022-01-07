/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let len = s.length;
    let level = 0;
    let res = 0;
    for(let i = 0; i < len; i++){
        if(s[i] == '('){
            level++;
            res = Math.max(res, level);
        }else if(s[i] == ')'){
            level--;
        }
    }
    return res;
};