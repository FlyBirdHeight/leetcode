class Topological {
    constructor(data) {
        this.data = data;
        this.inDeg = new Array(this.data.length).fill(0);
        this.gMap = new Array(this.data.length);
        this.q = [];
    }

    /**
     * @method handleData 生成并查集数据
     */
    handleData() {
        for (let i = 0; i < this.data.length; i++) {
            this.gMap[i] = []
        }
        for (let i = 0; i < this.data.length; i++) {
            this.gMap[this.data[i][0]].push(this.data[i][1]);
            this.inDeg[this.data[i][1]]++;
        }
        for (let i = 0; i < this.data.length; i++) {
            if (this.inDeg[i] == 0) {
                this.q.push(i)
            }
        }
    }

    /**
     * @method judgeData 判断数据
     * @param {Function} func 执行方法
     * @param {string} type 类型，区别内部执行还是外部
     */
    judgeData(func, type = 'inside') {
        while (this.q.length) {
            const x = this.q.shift();
            if(ty[e != 'inside']){
                func.apply(this);
            }
            for (let value of this.gMap(x)) {
                if (type == 'inside') {
                    func.apply(this);
                }
                this.inDeg[x]--;
                if (this.inDeg[x] == 0) {
                    this.q.push(value);
                }
            }
        }
    }
}

export default Topological