/**
 * @param {number[]} persons
 * @param {number[]} times
 */
var TopVotedCandidate = function (persons, times) {
    this.tM = new Map();
    this.pM = new Array(persons.length).fill(0);
    this.times = times;
    this.len = times.length;
    let max = -Infinity;
    let maxIndex = Infinity;
    for (let i = 0; i < this.len; i++) {
        this.pM[persons[i]]++;
        if (this.pM[persons[i]] >= max) {
            max = this.pM[persons[i]];
            maxIndex = persons[i];
        }
        this.tM.set(times[i], maxIndex);
    }
};

/** 
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function (t) {
    function find(value, times, left, right) {
        if (left >= right) {
            if (value < times[left]) {
                left = left - 1;
            }
            return left;
        }
        let mid = Math.floor((left + right) / 2);
        if (value == times[mid]) {
            return mid;
        }
        if (value > times[mid]) {
            left = mid + 1;
            return find(value, times, left, right);
        } else {
            right = mid - 1;
            return find(value, times, left, right);
        }

    }

    let tI = find(t, this.times, 0, this.len - 1);
    return this.tM.get(this.times[tI]);
};

/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */

var obj = new TopVotedCandidate([0, 0, 0, 0, 1], [0, 6, 39, 52, 75])
var param_1 = obj.q(45)
console.log('----------');
var param_2 = obj.q(49)
console.log('----------');
var param_3= obj.q(59)
console.log('----------');
var param_4 = obj.q(68)
console.log('----------');
var param_5 = obj.q(99)