/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    let n = isConnected.length;
    let arr = new Array(n + 1).fill(0).map((v) => { return new Array() });
    let visibled = new Array(n + 1).fill(false);
    let ans = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < isConnected[i].length; j++) {
            isConnected[i][j] == 1 && i != j && arr[i + 1].push(j + 1);
        }
        if (arr[i + 1].length === 0) {
            visibled[i + 1] = true;
            ans++;
        }
    }
    const dfs = (node, road) => {
        if (visibled[node]) {
            return;
        }
        visibled[node] = true;
        road.push(node);
        let neight = arr[node];
        for (let i = 0; i < neight.length; i++) {
            !visibled[neight[i]] && dfs(neight[i], road);
        }

        return road;
    }

    for (let i = 1; i <= n; i++) {
        let road = dfs(i, []);
        if (road) {
            ans++;
        }
    }

    return ans;
};


var findCircleNum1 = function (isConnected) {
    let n = isConnected.length;
    let arr = new Array(n).fill(0).map((v, i) => { return i })
    const find = (index) => {
        if (arr[index] !== index) {
            arr[index] = find(arr[index]);
        }

        return arr[index];
    }

    const union = (index1, index2) => {
        arr[find(index1)] = find(index2);
    }

    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            if(isConnected[i][j] === 1) {
                union(i, j);
            }
        }
    }

    let ans = 0;
    arr.forEach((v, i) => {
        if(v === i) {
            ans++;
        }
    })

    return ans
};

console.log(findCircleNum([[1, 0, 0], [0, 1, 0], [0, 0, 1]]))