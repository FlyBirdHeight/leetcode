/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
    let d = 1;
    let readOrder = 0;
    let a0 = 1;
    while(n != 1){
        if(n % 2 != 0){
            a0 = a0 + d; 
        }else {
            if(readOrder % 2 == 0){
                a0 = a0 + d;
            }else {
                a0 = a0;
            }
        }
        d *= 2;
        readOrder++;
        n = Math.floor(n / 2);
    }

    return a0;
};
console.log(lastRemaining(12));