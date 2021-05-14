import { authUrl, API_CONFIG } from './api-config';
import fierbase from 'firebase/app';
// import { API_CONFIG } from './api-config'

export const singIn = (email, password) => {
    return fetch(authUrl, {
        method: 'POST',
        body: JSON.stringify({
            email,
            password,
            returnSecureToken: true
        }),
        headers: {
            'Content-Type' : 'application/json'
        }
    }).then( response => response.json());
}


export const initApi = () => {
    fierbase.initializeApp(API_CONFIG);
};