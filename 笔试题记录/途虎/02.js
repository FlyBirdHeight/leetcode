let priceNums = [2, 1, 2, 1, 4, 4];
let budget = 5;

arr.sort((a, b) => a - b);
let ans = 0;
for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
        if(arr[i] + arr[j] <= budget) {
            ans++;
        }else {
            break;
        }
    }
}

console.log(ans)