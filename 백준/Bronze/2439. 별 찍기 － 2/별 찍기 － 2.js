let input = require("fs").readFileSync("dev/stdin").toString().trim();

let n = parseInt(input);
let blank = "";
let star = "";

for (let i = 1; i <= n; i += 1) {
    star += "*";
    for (let j = 0; j < n - i; j += 1) {
        blank += " ";
    }
    console.log(blank + star);
    blank = "";
}