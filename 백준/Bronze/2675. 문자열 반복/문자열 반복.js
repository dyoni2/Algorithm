let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let t = Number(input[0]);

for (let i = 1; i <= t; i += 1) {
    let line = input[i].split(' ');
    let r = line[0];
    let s = line[1].split('');
    
    let p = '';
    for (let j = 0; j < s.length; j += 1) {
        for (let k = 0; k < r; k += 1)
            p += s[j];
    }
    console.log(p);
}