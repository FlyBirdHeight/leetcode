/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    licensePlate = licensePlate.replace(/([0-9]|\s)/gi, '').toLowerCase();
    let len = words.length
    let map = [];
    for(let i = 0; i < licensePlate.length; i++){
        map.push(licensePlate[i]);
    }
    let res = '';
    for(let i = 0; i < len; i++){
        let judge = map.slice();
        for(let char of words[i]){
            let index = judge.indexOf(char);
            if(index != -1){
                judge.splice(index, 1);
            }
        }
        if(judge.length == 0){
            if(res == ''){
                res = words[i]
            }else {
                res = res.length > words[i].length ? words[i] : res;
            }
        }
    }
    return res;
};