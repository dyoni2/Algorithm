let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let num = input[1].split(" ");
console.log(Math.min(...num), Math.max(...num));