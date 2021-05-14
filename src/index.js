import { initApi, singIn } from './api/api-handlers'
import '../style/style.scss';

window.onload = () => {
    initApi();

    const form = document.getElementById('form');

    form.addEventListener('submit', event => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        singIn(email, password).then( response => console.log('respoin', response))
        });
};


const log = document.getElementById('log');
const zatemnenie = document.getElementById('zatemnenie');
const btnclose = document.getElementById('btnclose');

log.onclick = () => {
    // const isClicked = zatemnenie.getAttribute('clicked');
    // if (!isClicked) {
        // zatemnenie.setAttribute('clicked', true);
        zatemnenie.style.display = 'block';
    // } else {
    //     zatemnenie.removeAttribute('clicked');
    //     zatemnenie.style.display = 'none';
    // }
};

btnclose.onclick = () => {
    // console.log('cl');
    // zatemnenie.removeAttribute('clicked');
    zatemnenie.style.display = 'none';
}

// zatemnenie.onclick = () => {
//     const isClicked = zatemnenie.getAttribute('clicked');
//     if (!isClicked) {
//         zatemnenie.setAttribute('clicked', true);
//         zatemnenie.style.display = 'block';
//     } else {
//         zatemnenie.removeAttribute('clicked');
//         zatemnenie.style.display = 'none';
//     }
// };