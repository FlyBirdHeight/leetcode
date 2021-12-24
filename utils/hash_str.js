/**
 * @description 字符串哈希算法模板书写
 */
class HashStr {
    constructor(s) {
        this.str = s;
        this.length = this.str.length;
        this.p = new Array(this.length).fill(0);
        this.f = new Array(this.length).fill(0);
        this.p[0] = 1;
        this.b = 1313131;
        this.res = 0;
    }

    /**
     * @method generateF 生成字符串hash值
     */
    generateF() {
        for (let i = 0; i < this.length; i++) {
            this.p[i + 1] = this.p[i] * this.b;
            this.res = this.res * this.b + this.str[i].charCodeAt();
            this.f[i] = this.res;
        }
    }

    /**
     * @method getStrChild 获取子字符串
     * @param {number} l 左侧起点
     * @param {number} r 右侧终点
     */
    getStrChild(l, r) {
        let cur = this.f[r] - this.f[l - 1] * this.p[r - l + 1];
        return cur;
    }
}