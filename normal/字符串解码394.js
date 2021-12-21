/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let stack = [];
    let nStack = [];
    let num = [];
    let len = s.length;
    let c = 0;
    let nStackN = '';
    let res = '';
    for (let i = 0; i < len; i++) {
        let char = s[i];
        if (char == ']') {
            c--;
            let sp = num.pop();
            sb = stack.splice(sp, stack.length - sp);
            
            let count = nStack.pop();
            let str = sb.slice(1).join('').repeat(count);
            if (c != 0) {
                stack = stack.concat(str.split(''))
            } else {
                let sc = stack.join('');
                stack = [];
                res += sc + str;
            }
            continue;
        }
        if (/\d/.test(char)) {
            nStackN += char
        } else {
            if(char == '['){
                c++;
                nStack.push(Number(nStackN))
                nStackN = ''
                num.push(stack.length);
            }
            stack.push(char)
        }

    }
    if (stack.length != 0) {
        res += stack.join('')
    }

    return res
};

console.log(decodeString('5[leetcode10[abc]]'))