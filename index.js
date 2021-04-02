let arr1 = [0];
let arr2 = [0];

for (let i = 0; i < 10; i++) {
    arr1[i] = Math.round(Math.random()*100);
    arr2[i] = Math.round(Math.random()*100);
}

console.log(arr1);
console.log(arr2);

function work(ver1, ver2) {
    const arr3 = ver1.concat(ver2);
    console.log(arr3);

    let a = +prompt('Введите первое число для добовления в массив');
    let b = +prompt('Введите второе число для добовления в массив');
    arr3.push(a, b);
    console.log(arr3);

    for (let index = 0; index < arr3.length; index++) {
        if (index % 2 == 0) {
        }else {
            arr3[index] *= 2;
        }
    }
    console.log(arr3);

    let min = arr3[0]; 
    let max = arr3[0];

    for (let i = 0; i < arr3.length; i++) {
        if( min > arr3[i]){
            min = arr3[i];
        } else if( max < arr3[i]) {
            max = arr3[i]
        }
    }
    console.log(min);
    console.log(max);
}

work(arr1, arr2);
