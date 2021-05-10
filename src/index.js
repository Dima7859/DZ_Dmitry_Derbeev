
let todos;
const btnTrue = document.getElementById('btnTrue');
const btnNotTrue = document.getElementById('btnNotTrue');
const btnAll = document.getElementById('btnAll');

const block = document.getElementById('block');
const ul = document.createElement('ul');
block.prepend(ul);


function renderItems(ittd ,var1) {
    let td = ittd;
    const b = var1;
    let tdInterim = [];


    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }

    if (b !== undefined) {
        td.forEach(item => {
            if (item.completed === b) {
                tdInterim.push(item);
            }
        });
        td = tdInterim;
        tdInterim = [];
    }

    td.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = item.title;
    ul.appendChild(li);
    li.onclick  = () => {
        const isClicked = li.getAttribute('clicked');
        if (!isClicked) {
            document.getElementById('addsound').play();
            li.setAttribute('clicked', true);
            li.style.color = 'red';
            li.style.fontSize = '50px';
        } else {
            document.getElementById('sound').play();
            li.removeAttribute('clicked');
            li.removeAttribute("style")
        }
    };
    });
};

const fetchtd = () => {
    return fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => todos = json);
};

const getTodos = async () => {
    await fetchtd();
    renderItems(todos);
}

getTodos();

btnTrue.onclick = () => {
    document.getElementById('tudu').play();
    renderItems(todos, true);
};

btnNotTrue.onclick = () => {
    document.getElementById('tudu').play();
    renderItems(todos, false);
};

btnAll.onclick = () => {
    document.getElementById('tudu').play();
    renderItems(todos);
};
