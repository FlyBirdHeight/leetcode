/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    let regT = /^([+-]?((\d*\.\d+)|(\d+)|(\d+\.\d*)))([eE][+-]?\d+)?$/;
    return regT.test(s.trim())
};