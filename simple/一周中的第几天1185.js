/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
    const dayTime = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let date = new Date(year, month - 1, day);
    return dayTime[date.getDay()];
};

console.log(dayOfTheWeek(2, 1, 2022))