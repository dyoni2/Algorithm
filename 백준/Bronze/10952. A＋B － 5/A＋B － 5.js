let input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

for (i = 0; i < input.length; i += 1) {
    let arr = input[i].split(" ");
    let ret = Number(arr[0]) + Number(arr[1]);
    if (ret !== 0) console.log(ret);
    else break;
}