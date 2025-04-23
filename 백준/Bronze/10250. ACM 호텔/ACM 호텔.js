let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let t = Number(input[0]);

for (let i = 1; i <= t; i += 1) {
    let [h, w, n] = input[i].split(" ");
    
    let y = n % h;
    if (y === 0) y = h;
    
    let x = n / h;
    if (x - Math.floor(x) > 0) x = Math.floor(x) + 1;
    if (x < 10) x = '0' + x;
    
    console.log(`${y}${x}`);
}