/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
    let res = [], vis = [];
    let len = s.length;
    let a = Array.from(s).sort();
    let bfs = (arr, i, n, per) => {
        if(i == len){
            res.push(per.toString())
            return;
        }
        for(let j = 0; j < n; j++){
            //如果存在重复的字符，那么可以在回溯中直接排除掉，可以判断当前字符是否是最左边的字符，且是未被遍历过的
            if(vis[j] || (j > 0 && vis[j - 1] == false && arr[j - 1] == a[j])){
                continue;
            }
            vis[j] = true;
            per.push(arr[j]);
            //这里就是将当前这个填入的固定住，然后去填入后面的单词
            bfs(arr, i + 1, n, per);
            per.pop();
            vis[j] = false;
        }
    }

    bfs(a, 0, len, [])
    const size = res.length;
    const recArr = new Array(size).fill(0);
    for (let i = 0; i < size; i++) {
        recArr[i] = res[i].split(',').join('');
    }
    return recArr;
};

console.log(permutation("abc"));