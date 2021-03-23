let a = prompt ('Введите число от 1 до 4');
let num = parseInt(a);
let result;
let switch_rsult;


if (num == 1) {
    result = 'Зима';
}else if (num == 2) {
    result = 'Весна';
}else if (num == 3) {
    result = 'Лето';
}else if (num == 4) {
    result = 'Осень';
}else {
    result = 'До четырёх считать не умеем 	(╬￣皿￣)=○＃(￣#)３￣)   ?';
}

switch (num) {
    case 1:
        switch_rsult = 'Зима';
        break;
    case 2:
        switch_rsult = 'Весна';
        break;
    case 3:
        switch_rsult = 'Лето';
        break;
    case 4:
        switch_rsult = 'Осень';
        break;
    default:
        switch_rsult = 'До четырёх считать не умеем 	(╬￣皿￣)=○＃(￣#)３￣)   ?';
        break;
}

console.log(result);
console.log(switch_rsult);
