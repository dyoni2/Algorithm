let input = require("fs").readFileSync("dev/stdin").toString().trim().split(" ");

let sum = 0;

for (i = 0; i < 5; i += 1) {
    sum = sum + Number(input[i]) * Number(input[i]);
}
let last = sum % 10;
console.log(last);