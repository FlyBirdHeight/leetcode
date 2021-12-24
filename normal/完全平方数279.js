/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let m = [];
    let ans = 1;
    while(Math.pow(ans, 2) < 10000){
        m.push(Math.pow(ans, 2));
        ans++;
    }
    console.log(m)
};

console.log(numSquares(123));