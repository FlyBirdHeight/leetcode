// TAG 贪心、数组、排序

/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
    people.sort((a, b) => {
        if (b[0] !== a[0]) {
            return b[0] - a[0]
        } else {
            return a[1] - b[1]
        }
    })
    let queue = [];
    for(let i = 0; i < people.length; i++) {
        queue.splice(people[i][1], 0, people[i])
    }

    return queue
};

console.log(reconstructQueue([[8, 2], [4, 2], [4, 5], [2, 0], [7, 2], [1, 4], [9, 1], [3, 1], [9, 0], [1, 0]]))