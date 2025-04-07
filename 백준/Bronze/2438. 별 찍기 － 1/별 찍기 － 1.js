let input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

let num = parseInt(input);
let ret = '';

for (i = 0; i < num; i += 1){
    ret = ret + '*';
    console.log(ret);
}