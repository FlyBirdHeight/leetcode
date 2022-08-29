var sequenceReconstruction = function (nums, sequences) {
    let n = nums.length;
    let degrees = new Array(n + 1).fill(0);
    let arr = new Array(n + 1).fill(0).map(v => new Set());
    for (let value of sequences) {
        for (let i = 1; i < value.length; i++) {
            const preV = value[i - 1], next = value[i];
            if (arr[preV].add(next)) {
                degrees[next]++;
            }
        }
    }
    const queue = [];
    for (let i = 1; i <= n; i++) {
        if (degrees[i] === 0) {
            queue.push(i)
        }
    }
    while (queue.length) {
        if (queue.length > 1) {
            return false
        }
        const num = queue.shift();
        const set = arr[num];
        for (const next of set) {
            degrees[next]--;
            if (degrees[next] === 0) {
                queue.push(next);
            }
        }
    }

    return true;
};

sequenceReconstruction([1, 2, 3], [[1, 2], [1, 3]]);