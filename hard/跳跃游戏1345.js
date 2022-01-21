/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function (arr) {
    let len = arr.length;
    if (len < 3) {
        return len - 1
    }
    let map = new Map(), res = 0, record = new Array(len).fill(0);
    for (let i = 1; i < len; i++) {
        if (map.has(arr[i])) {
            let d = map.get(arr[i]);
            d.push(i)
            map.set(arr[i], d)
        } else {
            map.set(arr[i], [i])
        }
    }
    record[0] = 1;
    function bfs(queue, level) {
        let req = [];
        for (let i = 0; i < queue.length; i++) {
            let idx = queue[i];
            if (idx == len - 1) {
                return level;
            }
            let value = arr[idx];
            if (map.has(value)) {
                for (let v of map.get(value)) {
                    if (record[v] != 1) {
                        req.push(v);
                        record[v] = 1;
                    }
                }
                map.delete(value)
            }
            if (idx - 1 >= 0 && record[idx - 1] == 0) {
                req.push(idx - 1);
                record[idx - 1] = 1;
            }
            if (idx + 1 < len && record[idx + 1] == 0) {
                req.push(idx + 1);
                record[idx + 1] = 1;
            }
        }


        return bfs(req, level + 1);
    }
    res = bfs([0], 0);

    return res;
};

console.log(minJumps([6, 1, 9]))