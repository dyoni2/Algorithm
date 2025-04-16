let input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

let s = input[0].split("");
let i = parseInt(input[1]);

console.log(s[i - 1]);