const canFinish = (numCourses, prerequisites) => {
    let g = new Array(numCourses).fill(0)
    for(let i = 0; i < numCourses; i++){
        g[i] = [];
    }
    let inDeg = new Array(numCourses).fill(0);
    for(let value of prerequisites){
        if(value[0] == value[1]){
            return false;
        }
        g[value[0]].push(value[1]);
        ++inDeg[value[1]];
    }
    const q = [];
    for(let i = 0; i < inDeg.length; i++){
        if(inDeg[i] == 0){
            q.push(i);
        }
    }
    if(q.length == 0){
        return false;
    }
    let res = 0;
    while(q.length) {
        const x = q.shift();
        res++;
        for(let value of g[x]){
            inDeg[value]--;
            if(inDeg[value] == 0){
                q.push(value)
            }
        }
    }
    return res == numCourses;
};