let input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

let num = parseInt(input[0]);

for (i = 0; i < num; i += 1)
    console.log(i + 1);