let length = 0;
let top = null;
const Node = function (value) {
    this.value = value;
    this.next = null;
}
Node.prototype.push = function (value) {
    let node = new Node;
    top ? node.next = top : top = node;
    top = node;
    node.value = value;
    length++;
}

Node.prototype.pop = function () {
    let current = top;
    if (top) {
        top = current.next;
        length--;
        current.next = null;
        return current;
    } else {
        return null;
    }
}

let lmap = new Map();
lmap.set('{', '}');
lmap.set('(', ')');
lmap.set('[', ']');

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let las = 0;
    let node = new Node();
    length = 0;
    top = null;
    if (s.length < 2) {
        return false;
    }
    if (s.length % 2 == 0) {
        for (let i = 0; i < s.length; ++i) {
            if (lmap.has(s[i])) {
                if (las == 0 || i - las == 1) {
                    node.push(s[i]);
                    las = i;
                } else {
                    return false;
                }
            } else {
                if (length < 1) {
                    return false;
                }
                let nt = top;
                if (s[i] == lmap.get(nt.value)) {
                    nt.pop();
                    las = 0;
                } else {
                    return false;
                }
            }
        }
        if (!top) {
            return true;
        }else {
            return false;
        }
    } else {
        return false;
    }
};