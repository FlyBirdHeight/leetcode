/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
    let len = timePoints.length;
    if (len > 1440) {
        return 0;
    }
    timePoints.sort()
    let min = Infinity;
    function getTime(time1, time2) {
        let t1 = time1.split(":");
        let t2 = time2.split(":")
        let d1 = Number(t1[0]) < 12 ? new Date(`2022-01-02 ${time1}:00`) : new Date(`2022-01-01 ${time1}:00`);
        let d2 = Number(t2[0]) < 12 ? new Date(`2022-01-02 ${time2}:00`) : new Date(`2022-01-01 ${time2}:00`);
        let time = Math.abs(d1.getTime() - d2.getTime());
        let res = (time / (60 * 1000));
        if (res > 720) {
            return (t1[0] - t2[0]) * 60 + (t1[1] - t2[1])
        }
        return res;
    }
    for (let i = 1; i < len; i++) {
        let time = getTime(timePoints[i], timePoints[i - 1]);
        min = Math.min(time, min)
    }

    let time = getTime(timePoints[len - 1], timePoints[0]);

    return Math.min(min, time);
};