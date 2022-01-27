var DetectSquares = function () {
    this.map = new Map();
};

/** 
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function (point) {
    let [x, y] = point;
    if (!this.map.has(y)) {
        this.map.set(y, new Map());
    }
    let yA = this.map.get(y);
    yA.set(x, (yA.get(x) || 0) + 1);
};

/** 
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count1 = function (point) {
    let res = 0;
    let yA = this.map.get(point[1]);
    let [x, y] = point;
    if (!yA) {
        return 0;
    }
    const entries = this.map.entries();
    for (const [col, colCnt] of entries) {
        if (col !== y) {
            // 根据对称性，这里可以不用取绝对值
            let d = col - y;
            console.log(d, colCnt.get(x), yA.get(x + d), (colCnt.get(x + d)))
            res += (colCnt.get(x) || 0) * (yA.get(x + d) || 0) * (colCnt.get(x + d) || 0);
            res += (colCnt.get(x) || 0) * (yA.get(x - d) || 0) * (colCnt.get(x - d) || 0);
        }
    }
    return res;
};

/**
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */

var obj = new DetectSquares()
obj.add([3, 10])
obj.add([11, 2])
obj.add([3, 2])
var param_2 = obj.count1([11, 10]);
console.log(param_2)