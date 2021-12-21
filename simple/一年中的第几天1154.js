/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let d = date.split('-');
    let y = Number(d[0]), m = Number(d[1]), day = Number(d[2]);
    let res = 0;
    if(y % 400 === 0 || (y % 4 === 0 && y % 100 !== 0)){
        days[1] = 29;
    }
    for(let i = 0; i < m - 1; i++){
        res += days[i];
    }
    return res + day;
};