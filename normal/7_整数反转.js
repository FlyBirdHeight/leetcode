/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let max = Math.pow(2, 31) - 1;
    let min = -Math.pow(2, 31);
    let flag = false;
    if(x < 0) {
        flag = true;
    }
    x = Math.abs(x).toString().split("").reverse().join("");
    if(x > max) {
        return 0;
    }else if(flag && x > max){
        return 0;
    }

    return flag ? -1 * Number(x) : Number(x)
};