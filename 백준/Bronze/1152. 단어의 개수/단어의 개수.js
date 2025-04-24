let input = require('fs').readFileSync('dev/stdin').toString().trim().split(" ");

// console.log(input.length);
// 공백 입력 받았을 경우 input = [''] 돼서 1이 출력되는 버그

let cnt = 0;
for (let i = 0; i < input.length; i += 1) {
    if(input[i] !== "") 
        cnt += 1;
}
console.log(cnt);