/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    if(x == y){
        return 0;
    }
    let m = x ^ y;
    return m.toString(2).match(/1/g).length
};

console.log(hammingDistance(0, 0));