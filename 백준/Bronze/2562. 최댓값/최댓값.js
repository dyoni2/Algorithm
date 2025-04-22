let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(Number);

let max = Math.max(...input);
let index = input.indexOf(max);

console.log(max);
console.log(index + 1);

// map(Number)는 배열 안의 요소들을 전부 숫자 타입으로 바꿈
// Math.max()는 입력값으로 받은 숫자 중 가장 큰 수를 반환. 그래서 배열을 펼쳐서 넣는다
// arr.indexOf()는 배열에서 특정 값이 몇 번째 인덱스에 있는지 알 수 있다