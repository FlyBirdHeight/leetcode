/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let set = new Set();
    for(let i = 0; i < wordList.length; i++){
        set.add(wordList[i]);
    }
    if(!set.has(endWord)){
        return 0;
    }
    let fSet = new Map();
    let rSet = new Map();
    let forwordQ = [];
    let reverseQ = [];
    forwordQ.push(beginWord);
    fSet.set(beginWord, 0);
    reverseQ.push(endWord);
    rSet.set(endWord, 0);
    function bfs(setM){
        while(forwordQ.length != 0 && reverseQ.length != 0){
            let res = -1;
            if(forwordQ.length <= reverseQ.length){
                res = find(forwordQ, fSet, rSet);
            }else {
                res = find(reverseQ, rSet, fSet);
            }
            if(res != -1){
                return res;
            }
        }
        return -1;
    }
    function find(queue, visibleMap, otherMap){
        let str = queue.shift();
        let len = str.length
        for(let i = 0; i < len; i++){
            for(let j = 0; j < 26; j++){
                let char = String.fromCharCode(0x60+j+1);
                let sub = str.substring(0, i) + char + str.substring(i + 1);
                if(set.has(sub)){
                    if(visibleMap.has(sub)){
                        continue;
                    }
                    if(otherMap.has(sub)){
                        return visibleMap.get(str) + 1 + otherMap.get(sub);
                    }else {
                        queue.push(sub);
                        visibleMap.set(sub, visibleMap.get(str) + 1)
                    }
                }else {
                    continue;
                }
            }
        }
        return - 1;
    }
    let res =  bfs();
    return res == -1 ? 0 : res +1;
};