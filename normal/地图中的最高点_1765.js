/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
 const DIRS = [[1, 0], [0, 1], [0, -1], [-1, 0]], MAX = 0x3f3f3f
 var highestPeak = function (isWater) {
     const m = isWater.length, n = isWater[0].length
     let queue = new Array(), cost = 0
     for (let i = 0; i < m; i++) {
         for (let j = 0; j < n; j++) {
             if (isWater[i][j] == 1) {
                 isWater[i][j] = 0
                 queue.push([i, j])
             } else {
                 isWater[i][j] = MAX
             }
         }
     }
 
     while (queue.length > 0) {
         const nxt = new Array()
         //多源的话，加法就不要放在里面了，而是在外面来处理
         cost++
         for (const point of queue) {
             for (const dir of DIRS) {
                 const nx = point[0] + dir[0], ny = point[1] + dir[1]
                 //isWater[nx][ny] > cost就代表的是他不是海面而是陆地
                 if (nx >= 0 && ny >= 0 && nx < m && ny < n && isWater[nx][ny] > cost) {
                     isWater[nx][ny] = cost
                     nxt.push([nx, ny])
                 }
             }
         }
 
         queue = nxt
     }
     return isWater
 };