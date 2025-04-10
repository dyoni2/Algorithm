let input = require("fs").readFileSync("dev/stdin").toString().trim().split(" ");

let a = parseInt(input[0]);
let b = parseInt(input[1]);

console.log(Math.trunc(a + b));
console.log(Math.trunc(a - b));
console.log(Math.trunc(a * b));
console.log(Math.trunc(a / b));
console.log(Math.trunc(a % b));
// parseInt : 문자열 -> 정수
// Math.trunc : 소수점 절삭 == Math.floor