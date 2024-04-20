// перший спосіб

let lines = 5;
let sym = '*';

for (let i = 1; i <= lines; i++) {
    let row = '';
    for (let j = 0; j < i; j++) {
        row += sym;
    }
    console.log(row);
}

// другий спосіб


let height = 7;
let symbol = '*';

let str = '';
for (let i = 1; i <= height; i++) {
    str += symbol.repeat(i) + '\n';
}
console.log(str);
