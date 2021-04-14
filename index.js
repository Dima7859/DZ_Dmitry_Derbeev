//!!!!!!!!!!!!exercise1!!!!!!!!!!!!!!


function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let x = inputValue.split('');
    let a = [];

    for (let i = 0; i < x.length; i++) {
        if ((x[i] % 2 !== 0) && (x[i + 1] % 2 !== 0)) {
            if (i !== x.length - 1) {
                a.push(x[i]);
                a.push(':');
            } else {
                a.push(x[i]);
            }
        } else {
            a.push(x[i]);
        }
    }

    a = a.join('');
    let t = document.createTextNode(a);
    li.appendChild(t);
    if (inputValue === '') {
      alert("Вы должны что-то написать!");
    } else {
      document.getElementById("myUL").prepend(li);
    }
    document.getElementById("myInput").value = "";

}


//!!!!!!!!!!!!exercise2!!!!!!!!!!!!!!


let newArray = ['123' , '3645', 'Alex', 'Dima', 'Diana', 'Den', '54375', '365', '364555'];

//!!!!!!!!!!!!version1!!!!!!!!!!!!!!

function getFirst(array, n) {
    let arrall = array;
    let minarr = [];
    let rezult = [];
    for (let i = 0; i < arrall.length; i++) {
        minarr = arrall[i].split('');
        if (minarr[0].toLowerCase() == n.toLowerCase()) {
            rezult.push(arrall[i]);
        }
    }

    return rezult;
}

//!!!!!!!!!!!!version2!!!!!!!!!!!!!!

//!!!! тут я попытался сделать поиск по превым ведённым символам , вроде как получилось!!!!!!!!!!

function getFirst2(array, n) {
    let arrall = array;
    let minarr = [];
    let rezult = [];
    let newN = n.split('');
    let newNlenght = newN.length;
    for (let i = 0; i < arrall.length; i++) {
        minarr = arrall[i].split('');
        let sovpad = 0;
        for (let f = 0; f < newNlenght; f++) {
            let micser = newN[f];
            if (!/\D/.test(micser)) {
                if (minarr[f] == newN[f]) {
                    sovpad++ ;
                }
            } else {
                if (minarr[f].toLowerCase() == newN[f].toLowerCase()) {
                    sovpad++ ;
                }
            }
        }
        if (sovpad >= newNlenght) {
            rezult.push(arrall[i]);
        }
    }

    return rezult;
}


//!!!!!!!!!!!!exercise3!!!!!!!!!!!!!!


function getLast(array, n) {
    let arrall = array;
    let minarr = [];
    let rezult = [];
    for (let i = 0; i < arrall.length; i++) {
        minarr = arrall[i].split('');
        if (minarr[minarr.length - 1].toLowerCase() == n.toLowerCase()) {
            rezult.push(arrall[i]);
        }
    }

    return rezult;
}

console.log(getFirst(newArray, '3'));

console.log(getFirst2(newArray, '36455'));

console.log(getLast(newArray, 'a'));


//!!!!!!!!!!!!exercise4!!!!!!!!!!!!!!


const arr1 = [123 , 456523, '@', 'ygfr', '%'];
const arr2 = [123 , 'gyhewr', '%', 65743];

////!!!!!!!!!!!!!!!!!My version!!!!!!!!!!!!!!!!!

function arrayes(var1, var2) {
    let arrall = var1.concat(var2)
    let unique = [];
    let yes = 0;
    for (let i = 0; i < arrall.length; i++) {
        for (let a = 0; a < arrall.length; a++) {
            if (arrall[i] == arrall[a]) {
                yes++ ;
            }
        }

        if (yes == 1) {
            unique.push(arrall[i])
        }
        yes = 0;
    }
    return unique;
}

//!!!!!!!!!!!!!!!!!!!!Internet!!!!!!!!!!!!!!!!!!

function arrayes2(var1, var2) {
    let arrall = var1.concat(var2)
    let unique = [];
    for (var i=0, l=arrall.length; i<l; i++)
    if (unique.indexOf(arrall[i]) === -1)
        unique.push(arrall[i]);
    return unique;
}

console.log(arrayes(arr1, arr2));

console.log(arrayes2(arr1, arr2));


//!!!!!!!!!!!!exercise5!!!!!!!!!!!!!!


let sum = [2, 7, 3, 5];

function sumOfSquares(arr) {
    let x = 0;

    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.pow(arr[i], 2);
        x += arr[i]
    }

    return x
}

console.log(sumOfSquares(sum));


// !!!!!!!!!!!!exercise6!!!!!!!!!!!!!!


let user = [
    {
        name:'Vika',
        age: 45,
        job: 'It'
    },
    {
        name:'Aleks',
        age: 18,
        job: 'It'
    },
    {
        name:'Diana',
        age: 85,
        job: 'pensioner'
    },
    {
        name:'Dima',
        age: 12,
        job: 'school'
    }
];

let skey = prompt('Введите по какому ключу сортировать');


//!!!!!!!!!!!!version1!!!!!!!!!!!!!!


function sor(arr, s) {
    if (s in arr[0]) {
        for (let i = 0, endI = arr.length - 1; i < endI; i++) {
            for (let j = 0, endJ = endI - i; j < endJ; j++) {
                if (arr[j][s] > arr[j + 1][s]) {
                    let swap = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = swap;
                }
            }
        }
        return arr;
    }else {
        return 'такого ключа нет';
    }
}

console.log(sor(user, skey));


//!!!!!!!!!!!!version2!!!!!!!!!!!!!!


function sortByAge(arr, s) {
    if (s in arr[0]) {
        return arr.sort((a, b) => a[s] > b[s] ? 1 : -1);
    }else {
        return 'такого ключа нет';
    }
}

console.log(sortByAge(user, skey));


//!!!!!!!!!!!!exercise7!!!!!!!!!!!!!!


let k = prompt('Введите ключ...');

function propertyValue(array, key) {
    key = key.toLowerCase();
    let res = [];
    if (key in array[0]) {
        for (let i = 0; i < array.length; i++) {
            res.push(array[i][key]);
        }
        res = res.join(', ');
        return res;
    }else {
        return 'такого ключа нет';
    }
}


console.log(propertyValue(user, k));

