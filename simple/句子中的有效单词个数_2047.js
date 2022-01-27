/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function (sentence) {
    sentence = sentence.trimStart().trimEnd().split(" ");
    let res = 0;
    for (let value of sentence) {
        if(value == ""){
            continue;
        }
        if(!value.match(/^([a-z]*([a-z]+[-]?[a-z]+)?)?(\!|\.|,)?$/g)){
            continue
        }
        res++;
    }

    return res;
};