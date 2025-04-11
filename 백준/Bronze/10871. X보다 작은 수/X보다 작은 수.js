let input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

let line1 = input[0].split(" ");
let line2 = input[1].split(" ");

let n = Number(line1[0]);
let x = Number(line1[1]);

let ret = '';

for (i = 0; i < n; i += 1) {
    if (Number(line2[i]) < x)
        ret = ret + line2[i] + ' ';
}

console.log(ret);