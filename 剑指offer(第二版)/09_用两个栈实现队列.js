var CQueue = function () {
    this.joinStack = [];
    this.popStack = [];
    this.size = 0;
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
    this.size++;
    this.joinStack.push(value);
    this.popStack.splice(0, 0, value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
    if (this.size == 0) {
        return -1;
    }
    this.size--;
    this.joinStack.shift();
    return this.popStack.pop();
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

var obj = new CQueue()
obj.appendTail(1)
obj.appendTail(2)
obj.appendTail(3)
obj.appendTail(4)
var param_2 = obj.deleteHead();