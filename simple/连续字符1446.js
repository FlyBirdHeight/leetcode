/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
    let len = s.length;
    let max = 1;
    let num = 1;
    let las = null;
    for (let i = 0; i < len; i++) {
        if (las == null) {
            las = s[i];
        } else {
            if (s[i] == las) {
                las = s[i];
                num++;

            } else {
                las = s[i];
                max = Math.max(max, num);
                num = 1;
            }
        }
    }

    max = Math.max(max, num)

    return max;
};

console.log(maxPower('cc'))