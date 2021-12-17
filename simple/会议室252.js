/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    if(intervals.length <= 1){
        return true;
    }
    intervals.sort((a, b) => a[0] - b[0]);
    let max = intervals[0][1];
    let min = intervals[0][0];
    for(let i = 1; i < intervals.length; i++){
        if(max >= intervals[i][1]){
            return false;
        }
        if(min == intervals[i][0]){
            return false;
        }
        min = intervals[i][0];
        max = intervals[i][1];
    }

    return true;
};