const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let a = parseInt(input[0]);
let b = parseInt(input[1]);

console.log(a / b);