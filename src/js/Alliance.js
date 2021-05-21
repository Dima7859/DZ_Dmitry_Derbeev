import moment from 'moment';
import { addComentAl } from '../api/api-handlers'
import { renderComentAl } from '../js/comment'
import { getName } from '../api-handlers/api-ls-handlers';
import { exitAcc, scrollTop } from './variables'

if (window.location.pathname === '/Alliance.html') {

    const arrPersAL = [];
    const allPersonageBlock = document.querySelectorAll('.allPersonageBlock').forEach(item => arrPersAL.push(item));

    function searchBlockPersonage(btnAllPersonageActivss) {
        const persClickedBtn = btnAllPersonageActivss.getAttribute('pers');
        arrPersAL.forEach(item => {
            const persClickedBlock = item.getAttribute('pers');
            if (persClickedBtn === persClickedBlock) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    };

    document.querySelector('.allBtnPersonage').addEventListener('click',function(e){
        if (e.target.classList.contains('btnPersonage')) searchBlockPersonage(e.target)
    });

    const addBtnComentAl = document.getElementById('addBtnComentAl');

    addBtnComentAl.onclick = () => {
        const textComentAl = document.getElementById('textComentAl');
        if (textComentAl.value !== '') {
            const comApp = {
                name: getName(),
                coment: textComentAl.value,
                date: moment().format('MMMM Do YYYY, h:mm:ss a')
            };
    
            addComentAl(comApp).then( () => renderComentAl());
            textComentAl.value = null;
        } else alert('Вы должны что-то написать');

    };

    const exitMyPageAl = document.getElementById('exitMyPageAl');

    exitMyPageAl.onclick = () => {
        exitAcc();
    };

    scrollTop()

};

