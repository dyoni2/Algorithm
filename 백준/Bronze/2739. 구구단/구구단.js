let input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

let dan = Number(input);

for (i = 1; i < 10; i += 1) {
    console.log(dan, "*", i, "=", dan * i );
}