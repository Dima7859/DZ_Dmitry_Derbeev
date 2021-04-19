//!!!!!!!!!!!!exercise1!!!!!!!!!!!!!!


const arr = [213, 4, 5, 8, 3, 1, 85, 52];

function ubSortArr(ver) {
    const newArr = ver ;
    return newArr.sort((a, b) => a < b ? 1 : -1);
}

console.log(ubSortArr(arr));


//!!!!!!!!!!!!exercise2!!!!!!!!!!!!!!


const arr2 = [213, false, 4, 5, NaN, 8, 3, '', undefined, true, 1, 0, -0, 85, 52, false, '', undefined, NaN, 0,];

function filterFalse(arr) {
    return arr.filter(item => item)
}

console.log(filterFalse(arr2));



//!!!!!!!!!!!!exercise3!!!!!!!!!!!!!!


const user1 = {
    firsName:'Vika',
    lastName:'Rezer',
    age: 45
};

const user2 = {
    firsName:'Aleks',
    lastName:'Amd',
    age: 18,
};

const user3 = {
    firsName:'Diana',
    lastName:'Nvidia',
    age: 5,
};

const userall = [
    user1,
    user2,
    user3
];


// const name_key = prompt('Введите ключ...'); 

const name_key = 'firsName';

function propertyValue(array, key) {
    return array.map(item => item[key]);
}

console.log(propertyValue(userall, name_key));


//!!!!!!!!!!!!exercise4 and exercise6!!!!!!!!!!!!!!


const arrstr = ['Diana', 'Anna', 'Mervyn', 'Jack', 'Ariel', 'Sophie'];


const lengthArrForEach = [];

arrstr.forEach(item => lengthArrForEach.push(item.length));
console.log('Через forEach');
console.log(lengthArrForEach);

const lengthArrReduce = arrstr.reduce((acc, item) => ([...acc, item.length]), []);
console.log('Через reduce');
console.log(lengthArrReduce);


const lengthArrMap = arrstr.map(item => item.length );
console.log('Через map');
console.log(lengthArrMap);


//!!!!!!!!!!!!exercise5!!!!!!!!!!!!!!


const numbers = [2, 3, 5, 7, 11, 13, 17, 19];

function currentSums(numbers) {
    return newNumbers = numbers.reduce((acc, item, i) => {
        if (i == 0) {
            acc.push(item);
            return acc;
        } else {
            acc.push(acc[i - 1] + item);
            return acc;
        }
}, []);
}


console.log(currentSums(numbers));


//!!!!!!!!!!!!exercise7!!!!!!!!!!!!!!


let ver1 = [];
let ver2 = [];

var myNodelist = document.getElementsByTagName("LI");
for (let i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    }
}


function newElement() {
    let inputValue = document.getElementById("myInput").value;
    let inputValuePush;
    if (inputValue !== '') {
        if (!/\D/.test(inputValue)) {
            inputValuePush = +inputValue;
            ver1.push(inputValuePush);
        }else {
            ver2.push(inputValue);
        }
    }
    if (inputValue === '') {
      alert("Вы должны что-то написать!");
    }
    document.getElementById("myInput").value = "";
    return ver1,ver2;
}


function sorarr() {
    console.log(ver2);
    let x = ver1;
    let y = ver2;
    let li = document.createElement("li");
    let li2 = document.createElement("li");
    let t;
    let c;

    if (x.length !== 0 && y.length == 0) {
        x.sort((a, b) => a > b ? 1 : -1)
        x = x.join(', ');
        t = document.createTextNode(x);
        li.appendChild(t);
        document.getElementById("myUL").prepend(li);
        document.getElementById("myInput").value = "";
        ver1 = [];

        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);
      
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }

        return ver1;
    } else if (y.length !== 0 && x.length == 0) {
        y.sort((a, b) => a > b ? 1 : -1)
        y = y.join(', ');
        t = document.createTextNode(y);
        li.appendChild(t);
        document.getElementById("myUL").prepend(li);
        document.getElementById("myInput").value = "";
        ver2 = [];

        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);
      
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }

        return ver2;
    } else if (y.length !== 0 && x.length !== 0) {
        x.sort((a, b) => a > b ? 1 : -1)
        x = x.join(', ');
        y.sort((a, b) => a > b ? 1 : -1)
        y = y.join(', ');
        t = document.createTextNode(x);
        c = document.createTextNode(y);
        li.appendChild(t);
        li2.appendChild(c);
        document.getElementById("myUL").prepend(li);
        document.getElementById("myUL").prepend(li2);
        document.getElementById("myInput").value = "";
        ver1 = [];
        ver2 = [];

        var span = document.createElement("SPAN");
        var span2 = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        var txt2 = document.createTextNode("\u00D7");
        span.className = "close";
        span2.className = "close";
        span.appendChild(txt);
        span2.appendChild(txt2);
        li.appendChild(span);
        li2.appendChild(span2);
    
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }

        return ver1, ver2;
    }
}
