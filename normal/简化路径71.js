/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    let s = path.split("/");
    let stack = [];
    for(let str of s){
        if(str == ".." && stack.length != 0){
            stack.pop()
        }else if(str.length != 0 && str != "." && str != ".."){
            stack.push(str)
        }
    }

    return "/" + stack.join("/")
};

console.log(simplifyPath("/../"));