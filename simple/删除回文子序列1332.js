/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
    let len = s.length;
    for(let i = 0; i < Math.floor((len / 2)); i++){
        if(s[i] !== s[len - i - 1]){
            return 2;
        }
    }

    return 1;
};