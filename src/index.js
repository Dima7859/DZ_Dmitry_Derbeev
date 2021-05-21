require('firebase/auth');
import { setToken, getToken, getName } from './api-handlers/api-ls-handlers';
import { initApi, singIn, createeUser } from './api/api-handlers';
import { renderComentAl, renderUser, renderComentHorde } from './js/comment';
import { log,
    btnRegistration,
    weExitP,
    wishExitP,
    exitMyPage,
    imgGerOrc,
    imgGerAl,
    exitAcc
} from './js/variables';
import './js/curtains';
import './js/Alliance';
import './js/Horde';
import './sass/style.scss';

initApi();

window.onload = () => {

    if (window.location.pathname === '/Alliance.html') {
        renderComentAl();
    };
    if (window.location.pathname === '/Horde.html') {
        renderComentHorde();
    };

    if (window.location.pathname !== '/' &&
        !getToken()
        ) {
        window.location.href = '/';
    };

    if (window.location.pathname === '/') {

        const formLog = document.getElementById('formLog');
        const formRegist = document.getElementById('formRegist');

        formLog.addEventListener('submit', event => {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            singIn(email, password).then(renderUser(email)).then( ({idToken}) => {
                if (idToken) {
                    setToken(idToken);
                    window.location.href = '/';
                } else alert ('Не верно введён логин или пароль');
            })
        });

        formRegist.addEventListener('submit', event => {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const emailRegist = document.getElementById('emailRegist').value;
            const passwordRegist = document.getElementById('passwordRegist').value;
            const passwordRegist2 = document.getElementById('passwordRegist2').value;
            const birth = document.getElementById('birth').value;
            const male = document.getElementById('male');
            const gender = male.checked ? 'Male' : 'Female' ;

            if (passwordRegist === passwordRegist2) {
                createeUser(name, emailRegist, passwordRegist, birth, gender);
            } else alert ('Пароль не совпадает');

        });

        const IkonEnteyYesTiket = document.getElementById('IkonEnteyYesTiket');
        const IkonEnteyNotTiket = document.getElementById('IkonEnteyNotTiket');
        const textEnterCurtains = document.getElementById('textEnterCurtains');

        if (getToken()) {
            IkonEnteyYesTiket.style.display = 'block';
            exitMyPage.style.display = 'block';
            weExitP.style.display = 'block';
            wishExitP.style.display = 'block';
            log.style.display = 'none';
            btnRegistration.style.display = 'none';
            IkonEnteyNotTiket.style.display = 'none';
            textEnterCurtains.innerHTML = `Добро пожаловать! ${getName()}`;
            imgGerOrc.style.opacity = '1';
            imgGerAl.style.opacity = '1';
        } else {
            exitMyPage.style.display = 'none';
            weExitP.style.display = 'none';
            wishExitP.style.display = 'none';
            log.style.display = 'block';
            btnRegistration.style.display = 'block';
            IkonEnteyYesTiket.style.display = 'none';
            IkonEnteyNotTiket.style.display = 'block';
            textEnterCurtains.innerHTML = 'Войдите чтобы выброть фракцию'
            imgGerOrc.style.opacity = '0.5';
            imgGerAl.style.opacity = '0.5';
        };

    };

};

if (window.location.pathname === '/') {

    const zatemnenie = document.getElementById('zatemnenie');
    const btnCloseLog = document.getElementById('btnCloseLog');
    const zatemnenieRegistration = document.getElementById('zatemnenieRegistration');
    const btnCloseRegist = document.getElementById('btnCloseRegist');

    log.onclick = () => {
            zatemnenie.style.display = 'block';
    };

    btnRegistration.onclick = () => {
        zatemnenieRegistration.style.display = 'block';
    };

    btnCloseLog.onclick = () => {
        zatemnenie.style.display = 'none';
    };

    btnCloseRegist.onclick = () => {
        zatemnenieRegistration.style.display = 'none';
    };

    exitMyPage.onclick = () => {
        exitAcc();
    };

    if (getToken()) {
        imgGerAl.onclick = () => {
            window.location.href = 'Alliance.html';
        };
    
        imgGerOrc.onclick = () => {
            window.location.href = 'Horde.html';
        };
    } else {
        imgGerAl.onclick = () => alert('Авторизуйтесь  чтобы перейти!');
        imgGerOrc.onclick = () => alert('Авторизуйтесь  чтобы перейти!');
    };

};
