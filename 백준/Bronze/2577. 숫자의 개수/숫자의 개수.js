let input = require('fs').readFileSync('dev/stdin').toString().trim().split("\n");

let num = String(input[0] * input[1] * input[2]);

for (let i = 0; i < 10; i += 1) {
    let cnt = 0;
    for (let j = 0; j < num.length; j += 1) {
        if (Number(num[j]) === i)
            cnt += 1;
    }
    console.log(cnt);
}