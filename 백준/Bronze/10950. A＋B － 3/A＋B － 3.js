let input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

let num = Number(input[0]);

for (i = 1; i <= num; i += 1) {
    let num = input[i].split(" ");
    console.log(Number(num[0]) + Number(num[1]));
}