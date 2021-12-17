/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    let res = [];
    if (intervals.length == 1) {
        return intervals;
    }
    intervals.sort((a, b) =>  a[0] - b[0]);
    let max = intervals[0][1];
    let min = intervals[0][0];
    intervals.shift();
    while (intervals.length > 0) {
        let a = intervals.shift();
        if (max >= a[0]) {
            if(min > a[0]){
                min = a[0]
            }
            if(max < a[1]){
                max = a[1]
            }
        } else {
            res.push([min, max]);
            min = a[0];
            max = a[1];
        }
        if (intervals.length == 0) {
            res.push([min, max])
        }
    }
    return res;
};

console.log(merge([[9,10],[4,9],[4,17]]))