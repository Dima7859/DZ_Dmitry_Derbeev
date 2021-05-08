import '../style/style.scss'

const inp = document.getElementById('inp');
const form = document.querySelector('form');
const add = document.getElementById('add');
const clearAll = document.getElementById('clearAll');

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

add.onclick = () => {
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
    document.getElementById('addsound').play();
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);

    const btn = document.createElement('input');
    btn.className = 'inpbtn';
    btn.getAttribute('type')
    btn.setAttribute('type', "image");
    btn.getAttribute('src')
    btn.setAttribute('src', "../img/red.png");
    li.append(btn)

    btn.onclick = () => {
        let contli = li.textContent;
        document.getElementById('sound').play();
        let arr = []
        allArr.forEach((item) => {
            if (item !== contli) {
                arr.push(item);
            }
        })
        allArr = arr;
        arr = [];
        btn.remove();
        li.remove();
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


clearAll.onclick = () => {
    localStorage.clear();
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    allArr = [];
    inp.value = "";
    document.getElementById('sound').play();
};
