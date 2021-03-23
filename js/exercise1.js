let a = prompt('Введите количество минут от 1 до 59');
let min = parseInt(a);

if (min < 15) {
    console.log('в первой четвери часа');
}else if (min == 15) {
    console.log('на середине первой и второй четверти часа');
}else if (min < 30) {
    console.log('во второй четверти часа');
}else if (min == 30) {
    console.log('на середине второй и третьей четверти часа');
}else if (min < 45) {
    console.log('в третьей четвети часа');
}else if (min == 45) {
    console.log('на середине третьей и четвёртой четвети часа');
}else if (min < 59) {
    console.log('в четвёртой четверти часа');
}else {
    console.log('Читать не умеешь  ((╬◣﹏◢))  ???');
}
