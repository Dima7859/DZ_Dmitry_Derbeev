const inp = document.getElementById('inp');
const form = document.querySelector('form');
let allArr = localStorage.getItem('inp') ? JSON.parse(localStorage.getItem('inp')) : [];

localStorage.setItem('inp', JSON.stringify(allArr));
const data = JSON.parse(localStorage.getItem('inp'));

const ul = document.createElement('ul');
document.body.append(ul);


form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (inp.value === '') {
        alert("Вы должны что-то написать!");
    } else {
        allArr.push(inp.value);
        localStorage.setItem('inp', JSON.stringify(allArr));
        liMaker(inp.value);
        inp.value = "";
    }
});

const add = () => {
    if (inp.value === '') {
        alert("Вы должны что-то написать!");
    } else {
        allArr.push(inp.value);
        localStorage.setItem('inp', JSON.stringify(allArr));
        liMaker(inp.value);
        inp.value = "";
    }
};

const liMaker = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);

    const btn = document.createElement('button');
    btn.innerHTML = '\u00D7';
    btn.className = 'btnclose';
    li.append(btn)

    btn.onclick = () => {
        console.log(li.textContent);
        let contli = li.textContent;
        contli = contli.split('');
        contli.pop();
        contli = contli.join('');
        console.log(contli);
        let arr = []
        console.log(allArr);
        allArr.forEach((item) => {
            if (item !== contli) {
                arr.push(item);
            }
        })
        console.log(arr);
        allArr = arr;
        arr = [];
        btn.remove();
        li.remove();
        console.log(allArr);
        localStorage.setItem('inp', JSON.stringify(allArr));
    }

    li.onclick  = () => {
        const isClicked = li.getAttribute('clicked');
        if (!isClicked) {
            li.setAttribute('clicked', true);
            li.style.textDecoration = 'line-through';
            li.style.textDecorationColor = 'red';
        } else {
            li.removeAttribute('clicked');
            li.style.textDecoration = 'none';
        }
    }

};

data.forEach(item => {
    liMaker(item);
});


const clearAll = () => {
    localStorage.clear();
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    allArr = [];
    inp.value = "";
};
