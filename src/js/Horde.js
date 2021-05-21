import moment from 'moment';
import { addComentHorde } from '../api/api-handlers'
import { renderComentHorde } from '../js/comment'
import { getName } from '../api-handlers/api-ls-handlers';
import { exitAcc, scrollTop } from './variables'

const arrPersAL = [];
const allPersonageBlock = document.querySelectorAll('.allPersonageBlock').forEach(item => arrPersAL.push(item))

if (window.location.pathname === '/Horde.html') {

    function searchBlockPersonage(btnAllPersonageActivss) {
        const persClickedBtn = btnAllPersonageActivss.getAttribute('pers');
        arrPersAL.forEach(item => {
            const persClickedBlock = item.getAttribute('pers');
            if (persClickedBtn === persClickedBlock) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            };
        });
    };

    document.querySelector('.allBtnPersonage').addEventListener('click',function(e){
        if (e.target.classList.contains('btnPersonage')) searchBlockPersonage(e.target)
    })

    const exitMyPageOrc = document.getElementById('exitMyPageOrc');

    exitMyPageOrc.onclick = () => {
        exitAcc();
    };

    const addBtnComentHorde = document.getElementById('addBtnComentHorde');

    addBtnComentHorde.onclick = () => {
        const textComentHorde = document.getElementById('textComentHorde');
        if (textComentHorde.value !== '') {
            const comApp = {
                name: getName(),
                coment: textComentHorde.value,
                date: moment().format('MMMM Do YYYY, h:mm:ss a')
            };
    
            addComentHorde (comApp).then( () => renderComentHorde());
            textComentHorde.value = null;
        } else alert('Вы должны что-то написать');

    };

    scrollTop();

};
