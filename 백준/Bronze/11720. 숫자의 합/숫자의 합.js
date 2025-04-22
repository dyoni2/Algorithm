let input = require('fs').readFileSync('dev/stdin').toString().trim().split("\n");

let n = Number(input[0]);
let a = input[1].split("");

let sum = 0;
for (let i = 0; i < n; i += 1) {
    sum += Number(a[i]);
}
console.log(sum);