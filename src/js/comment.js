import { getComentAl, getUser, getComentHorde } from '../api/api-handlers';
import { setName } from '../api-handlers/api-ls-handlers';

export const renderComentAl = () => {
    const comentListAl = document.getElementById('comentListAl');
    comentListAl.innerHTML = null;
    getComentAl().then( result => {
        const transFormedArr = Object.keys(result).map( key => ({
            ...result[key],
            id: key
        }));

        transFormedArr.forEach( content => {
            const li = document.createElement('li');
            const pNmae = document.createElement('p');
            const pData = document.createElement('p1');
            const pText = document.createElement('p2');
            const devider = document.createElement('div');
            const divName = document.createElement('div')

            pNmae.className = 'pNameUser';
            devider.className = 'devider';
            devider.style.backgroundColor = '022dff';
            divName.className = 'comentNameAndDat';
            pNmae.innerHTML = content.name;
            pData.innerHTML = content.date;
            pText.innerHTML = content.coment;
            divName.append(pNmae,pData);
            li.append(divName)
            li.append(pText)
            comentListAl.append(li);
            comentListAl.append(devider);
        });
    });
};

export const renderComentHorde = () => {
    const comentListHorde = document.getElementById('comentListHorde');
    comentListHorde.innerHTML = null;
    getComentHorde().then( result => {
        const transFormedArr = Object.keys(result).map( key => ({
            ...result[key],
            id: key
        }));

        transFormedArr.forEach( content => {
            const li = document.createElement('li');
            const pNmae = document.createElement('p');
            const pData = document.createElement('p1');
            const pText = document.createElement('p2');
            const devider = document.createElement('div');
            const divName = document.createElement('div')

            pNmae.className = 'pNameUser';
            devider.className = 'devider';
            devider.style.backgroundColor = 'ff0202';
            divName.className = 'comentNameAndDat';
            pNmae.innerHTML = content.name;
            pData.innerHTML = content.date;
            pText.innerHTML = content.coment;
            divName.append(pNmae,pData);
            li.append(divName)
            li.append(pText)
            comentListHorde.append(li);
            comentListHorde.append(devider);
        });
    });
};

export const renderUser = (email) => {
    getUser().then( result => {
        const transFormedArr = Object.keys(result).map( key => ({
            ...result[key],
            id: key
        }));

        console.log(transFormedArr);

        transFormedArr.forEach( content => {
            if (content.email === email) {
                setName(content.name);
            };
        });

    });

};
