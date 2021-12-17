/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
    let res = [];
    if (intervals.length == 1) {
        return intervals.length;
    }
    intervals.sort((a, b) => a[0] - b[0]);
    let max = intervals[0][1];
    let min = intervals[0][0];
    console.log(intervals)
    intervals.shift();
    while (intervals.length > 0) {
        let a = intervals.shift();
        if (max >= a[1]) {
            res.push([min, max]);
            max = a[1];
            min = a[0];
        } else {
            if (max > a[0]) {
                if (min <= a[0]) {
                    res.push(a);
                } else {
                    res.push([min, max]);
                    min = a[0];
                    max = a[1];
                }
            } else {
                max = a[1];
            }
        }
        if (intervals.length == 0) {
            res.push([min, max])
        }
    }
    console.log(res)
    return res.length;
};

console.log(minMeetingRooms([[2, 15], [36, 45], [9, 29], [16, 23], [4, 9]]))