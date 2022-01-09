/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function (releaseTimes, keysPressed) {
    let len = releaseTimes.length;
    let max = keysPressed[0].charCodeAt();
    let maxTime = releaseTimes[0];
    for (let i = 1; i < len; i++) {
        let sc = keysPressed[i].charCodeAt();
        let time = releaseTimes[i] - releaseTimes[i - 1]
        if (maxTime < time || (maxTime === time && max <= sc)) {
            max = sc;
            maxTime = time
        }
    }

    return String.fromCharCode(max);
};

console.log(slowestKey([9, 29, 49, 50], "cbcd"))