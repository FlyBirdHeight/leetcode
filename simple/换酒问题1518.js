/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
    if(numBottles < numExchange){
        return numBottles;
    }
    let res = 0;
    let l = 0;
    res += numBottles;
    while (numBottles >= numExchange) {
        l = numBottles - Math.floor(numBottles / numExchange) * numExchange;
        numBottles = Math.floor(numBottles / numExchange);
        res += numBottles;
        numBottles += l;
    }
    return res;
};

console.log(numWaterBottles(15, 4))