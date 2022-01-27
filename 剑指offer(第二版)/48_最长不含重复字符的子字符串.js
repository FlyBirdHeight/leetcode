/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let compareStr = '';
    let max = 0;
    for(let i = 0; i < s.length; i++){
        let indexOf = compareStr.indexOf(s[i]);
        if(indexOf == -1){
            compareStr += s[i];
        }else {
            if(compareStr.length > max){
                max = compareStr.length;
            }
            if(compareStr.length == indexOf){
                compareStr = s[i];
            }else{
                compareStr = compareStr.substr(indexOf + 1) + s[i];
            }
        }
    }
    if(compareStr.length > max){
        max = compareStr.length
    }

    return max;
};