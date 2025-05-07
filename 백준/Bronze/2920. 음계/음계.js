const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
    input = line.trim().split(' ').map(Number);
}).on("close", () => {
    const asc = [1, 2, 3, 4, 5, 6, 7, 8];
    const desc = [8, 7, 6, 5, 4, 3, 2, 1];

    if (input.join() === asc.join()) console.log('ascending');
    else if (input.join() === desc.join()) console.log('descending');
    else console.log('mixed');

    process.exit();
});
