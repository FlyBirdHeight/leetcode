/**
 * @description 前缀和与后缀和
 * @description 前缀与后缀的介绍：
 * 1. 前缀：
 *      前缀是当前元素前的所有元素的乘积、和、差、除等记录，不包括自己本身
 * 2. 后缀：
 *      后缀是当期元素后的所有元素的乘积、和、差、除等记录，不包括自己本身
 */
class PrefixSuffix {
    constructor(data, handle = (a, b) => a + b) {
        this.data = data;
        this.len = data.length;
        this.handle = handle;
        this.prefix = new Array(this.len).fill(0);
        this.prefix[0] = 1;
        this.suffix = new Array(this.len).fill(0);
        this.suffix[this.len - 1] = 1;
    }

    createPrefix() {
        for (let i = 1; i < this.len; i++) {
            this.prefix[i] = this.handle(this.prefix[i - 1], this.data[i - 1]);
        }
    }

    createSuffix() {
        for(let i = this.len - 2; i >= 0; i--){
            this.suffix[i] = this.handle(this.suffix[i + 1], this.data[i + 1]);
        }
    }
}

export default PrefixSuffix;