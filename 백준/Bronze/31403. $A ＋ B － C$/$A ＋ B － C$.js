let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(x => x.trim());

let [a, b, c] = input;
console.log(Number(a) + Number(b) - Number(c));
console.log(a + b - c);

// console.log(input);  // [ '3\r', '4\r', '5' ] 공백이 껴있었다
// map(x => x.trim()) 사용해서 해결
// map()은 배열의 모든 요소를 하나씩 바꿔서 새로운 배열을 만드는 함수
// x => x.trim()은 배열 안의 각 요소를 trim()(양쪽 공백 제거)한 값으로 바꾼다