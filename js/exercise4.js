const x = prompt();
const z = prompt();
const y = prompt();
let a = parseInt(x);
let b = parseInt(z);
let c = parseInt(y);


if ((a>b) && (a>c)) {
    console.log(a);
}else if ((b>a) && (b>c)) {
    console.log(b);
}else if ((c>a) && (c>b)) {
    console.log(c);
}

if ((a % 2 == 0 ) && (b % 2 == 0 ) && (c % 2 == 0 )){
    console.log('Все числа чётные');
} else {
    console.log('Есть нечётные');
}
