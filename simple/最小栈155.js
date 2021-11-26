var MinStack = function () {
    this.t = null;
    this.stack = [];
    this.minStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    if (this.t == null) {
        this.stack.push(val);
        this.minStack.push(val);
        this.t = 0;
    } else {
        this.stack.push(val);
        this.t++;
        if (this.minStack[this.minStack.length - 1] > val) {
            this.minStack.push(val)
        } else {
            this.minStack.push(this.minStack[this.minStack.length - 1])
        }
    }
    return null;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (this.t == null) {
        return null;
    }
    let res = this.stack.pop();
    this.minStack.pop();
    this.t--;
    return res;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    if (this.t == null) {
        return null;
    }
    return this.stack[this.t];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    if (this.t == null) {
        return null;
    }
    return this.minStack[this.minStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
let minStack = new MinStack();
console.log(minStack.push(-2));
console.log(minStack.push(0));
console.log(minStack.push(-1));
console.log(minStack.getMin());
console.log(minStack.pop());
console.log(minStack.top());
console.log(minStack.getMin());