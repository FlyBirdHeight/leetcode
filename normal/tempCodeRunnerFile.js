let pq = [];
    if (n == 0) {
        return tasks.length;
    }
    let resT = 0;
    let i = 0;
    while (tasks.length != 0) {
        if (i >= tasks.length) {
            if(pq.length <= n){
                pq.push(null);
                pq = [];
                resT += n + 1;
            }
            i = 0;
        }
        if (pq.length == 0) {
            pq.push(tasks[i]);
            tasks.splice(i, 1);
        } else if (pq.length > 0) {
            if (pq.indexOf(tasks[i]) != -1 && pq.length < n + 1) {
                i++;
            } else {
                if (pq.length < n + 1) {
                    pq.push(tasks[i]);
                    tasks.splice(i, 1);
                } else if (pq.length == n + 1) {
                    pq = [];
                    resT += n + 1;
                    i = 0;
                } else {
                    i++
                }
            }
        }
    }

    return resT + pq.length;