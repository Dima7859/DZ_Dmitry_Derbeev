import { authUrl, API_CONFIG, baceUrl } from './api-config';
import fierbase from 'firebase/app';
import { setToken, setName } from '../api-handlers/api-ls-handlers';


export const initApi = () => {
    fierbase.initializeApp(API_CONFIG);
};

export const singIn = (email, password) => {

    return fetch(authUrl, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            email,
            password,
            returnSecureToken: true
        })
    }).then( response => response.json());

};

export const createeUser = async (name, email, password, birth, gender) => {

    const user = await fierbase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(response => console.log('response', response));

        await fetch(`${baceUrl}/users.json`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({name, email, birth, gender}),
        })
        .then( res => res.json())
        .then( result => console.log(result))
        .then(setName(name))

        await singIn(email, password).then(({idToken}) => {
            if (idToken) {
                setToken(idToken);
                window.location.href = '/';
            } else alert('error');
        });

};

export const getUser = async () => {
    return fetch(`${baceUrl}/users.json`,{
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json'
        },
    }).then( response => response.json());
};

export const addComentAl = async ({name, coment, date}) => {
    return fetch(`${baceUrl}/ComentAl.json`,{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({name, coment, date}),
    })
    .then( res => res.json())
    .then( result => console.log(result))
};

export const getComentAl = async () => {
    return fetch(`${baceUrl}/ComentAl.json`,{
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json'
        },
    }).then( response => response.json());
};

export const addComentHorde = async ({name, coment, date}) => {
    return fetch(`${baceUrl}/ComentHorde.json`,{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({name, coment, date}),
    })
    .then( res => res.json())
    .then( result => console.log(result))
};

export const getComentHorde = async () => {
    return fetch(`${baceUrl}/ComentHorde.json`,{
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json'
        },
    }).then( response => response.json());
};
